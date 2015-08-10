'use strong';

const requireBowerFiles = require('./');
const test = require('tape');

global.window = {};

test('requireBowerFiles()', t => {
  t.plan(5);

  t.strictEqual(requireBowerFiles.name, 'requireBowerFiles', 'should have a function name.');

  const option = {self: true};

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
});
