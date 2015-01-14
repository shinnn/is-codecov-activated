'use strict';

var requireBowerFiles = require('./');
var test = require('tape');

global.window = {};

test('requireBowerFiles()', function(t) {
  t.plan(6);

  t.strictEqual(requireBowerFiles.name, 'requireBowerFiles', 'should have a function name.');

  var option = {self: true};

  t.strictEqual(
    requireBowerFiles(option).length,
    1,
    'should load bower modules specified in bower.json.'
  );

  t.deepEqual(option, {self: true}, 'should not modify option object.');

  t.ok(
    requireBowerFiles({dev: true})[2].isNaN(NaN),
    'should create an array of loaded modules.'
  );

  t.deepEqual(
    requireBowerFiles(),
    [],
    'should return an empty array when it doesn\'t load any modules.'
  );

  t.throws(
    requireBowerFiles.bind(null, {json: 'foo'}),
    /ENOENT.*foo/,
    'should throw an error when it fails to load files.'
  );
});
