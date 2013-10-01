# cross-js-template [![Build Status](https://travis-ci.org/Mulkave/cross-js-template.png?branch=master)](https://travis-ci.org/Mulkave/cross-js-template)
An example of how to set up a project for cross-developing for the browser and node.js.

Forked from [amitayd](https://github.com/amitayd/grunt-browserify-jasmine-node-example) and modified with the following:

- CoffeeScript instead of vanilla JS (coffeeify)
- Environment based configuration (envify)
- HTML templates with Handlebars (hbsfy)

The example is using jasmine on the browser and jasmine-node for unit testing, but similiar concepts apply for any testing framework which works both on the browser and node.

See further discussion at my [blog post](http://www.doboism.com/blog/2013/05/17/cross-developing-for-node-js-and-browsers-using-browserify/).

## Getting Started

Install node.js, and grunt-cli globally.

```
npm install -g grunt-cli
```

Clone/Download the repository, and from its directory, install the dependencies:
```
npm install
```

Set environment variable to run
```bash
export NODE_ENV=development
```

You are now ready to run the build and the tests:
```
# build one time
grunt
# continously watch for changes and build when they occur
grunt watch
```

## Documentation

### Project structure
```
- src           : application code
  - browser     : browser only code
    - config    : configuration files
    - libraries : custom libraries/utils
    - templates : Handelbars templates
  - common      : both for node.js and browser
  - node        : node.js only code
- test
  - specs       : jasmine test specs
    - browser   : run with jasmine browser only
    - common    : run with jasmine + jasmine-node
    - node      : ruh with jasmine-node only
- resources     : resource files
- vendor        : external libraries
- dist          : build output
GruntFile.js    : buld configuration


```

### Running tests

Tests can be run in 3 modes:

1. Jasmine-node:

    The only tests that are using the source code directly (i.e. pre build). They are run as part of the main build, or you can run `jasmine_node`
  
2. Jasmine through automated PhantomJS browser

    Runs with the browserified code, using a headless PhantomJS server, as part of the build, or by `grunt jasmine`
    To run:

3. Jasmine in the browser

    Runs with the browserified code. Build the project and open the test bootstrap page with any browser, i.e. `firefox test/SpecRunner.html`

### Running the "Application"

One of the browserify targets creates a bundle just for the "src/browser/App" module (and its dependencies).

The module is aliased as "SampleApp", so it can be loaded and run by an external html file.
A client could load it in javascript using:
```
        var sampleApp = require('SampleApp');
        sampleApp.main();
```

You can see the application running at [test/AppRunner.html](test/AppRunner.html)

### Notes
 * underscore.js is packaged from the npm package to the built app_bundle. Alternatives would be packaging it in a different bundle, but as a browserified file, or loading it as an external script file, and using its global variable. This is currently (AFAIK) not supported in browserify, but can be achieved through a hack to the code. This is currently commented out in HelloWorld.js
 * Jquery is loaded as a window global and not as a module for require(). An alternative would be to use a jquery version which supports being exposed as a commonJS module, or using browserify-shim to wrap it so it could be used with a require().



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via Grunt._

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Amitay Dobo
Licensed under the MIT license.
