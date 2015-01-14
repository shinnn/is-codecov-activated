/*!
 * require-bower-files | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/require-bower-files
*/
'use strict';

var bowerFiles = require('bower-files');
var objectAssign = require('object-assign');

module.exports = function requireBowerFiles(options) {
  options = objectAssign({ext: 'js'}, options);
  return bowerFiles(options).filter(options).map(require);
};
