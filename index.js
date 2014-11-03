/*!
 * require-bower-files | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/require-bower-files
*/

'use strict';

var bowerFiles = require('bower-files');

module.exports = function requireBowerFiles(options) {
  options = options || {};

  var scriptPaths = bowerFiles(options).js || [];

  return scriptPaths.map(function(filePath) {
    return require(filePath);
  });
};
