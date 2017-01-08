'use strict';

var jade = require('jade');

function jadeCompile(data, options) {
  if (!options) options = {};
  options.filename = data.path;1
  return jade.compile(data.text, options);
}

function jadeRendererFunc(options) {
  return function (data, locals) {
    return jadeCompile(data, options)(locals);
  };
}

module.exports = jadeRendererFunc;