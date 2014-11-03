'use strict';

var requireBowerFiles = require('./');
var test = require('tape');

global.window = {};

test('requireBowerFiles()', function(t) {
  t.plan(4);

  t.strictEqual(
    requireBowerFiles({self: true}).length, 1,
    'should load bower modules specified in bower.json.'
  );

  t.ok(
    requireBowerFiles({dev: true})[2].isNaN(NaN),
    'should create an array of loaded modules.'
  );

  t.deepEqual(
    requireBowerFiles(), [],
    'should return an empty array when it doesn\'t load any modules.'
  );

  t.throws(
    function() {
      requireBowerFiles({json: 'foo'});
    }, /Cannot find module/,
    'should throw an error when it fails to load files.'
  );
});
