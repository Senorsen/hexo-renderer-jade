/* global hexo */
'use strict';

hexo.extend.renderer.register('jade', 'html', require('./lib/renderer')(hexo.config.jade), true);
