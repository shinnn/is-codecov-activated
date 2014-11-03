# require-bower-files

[![Build Status](https://travis-ci.org/shinnn/require-bower-files.svg?branch=master)](https://travis-ci.org/shinnn/require-bower-files)
[![Build status](https://ci.appveyor.com/api/projects/status/p4agdotoyrks5qov?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/require-bower-files)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/require-bower-files.svg)](https://coveralls.io/r/shinnn/require-bower-files)
[![Dependency Status](https://david-dm.org/shinnn/require-bower-files.svg)](https://david-dm.org/shinnn/require-bower-files)
[![devDependency Status](https://david-dm.org/shinnn/require-bower-files/dev-status.svg)](https://david-dm.org/shinnn/require-bower-files#info=devDependencies)

A [Node](http://nodejs.org/) module to `require` [bower](http://bower.io/) components all at once

```json
{
  "dependencies": {
    "jquery": "~2.1.1",
    "lodash": "~2.4.1"
  }
}
```

```javascript
var requireBowerFiles = require('require-bower-files');

requireBowerFiles();
//=> [Function: jQuery, Function: Lodash]
```

## Installation

[![NPM version](https://badge.fury.io/js/require-bower-files.svg)](https://www.npmjs.org/package/require-bower-files)

[Use npm](https://www.npmjs.org/doc/cli/npm-install.html).

```sh
npm install require-bower-files
```

## API

```javascript
var requireBowerFiles = require('require-bower-files');
```

### requireBowerFiles([*options*])

*options*: `Object` (Directly passed to [bower-files](https://github.com/ksmithut/bower-files) option)  
Return: `Array`

It gets JavaScript file paths of bower components using [bower-files](https://github.com/ksmithut/bower-files#options), [`require`](http://nodejs.org/api/globals.html#globals_require)s them and returns an array of the loaded modules.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
