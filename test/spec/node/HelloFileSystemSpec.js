'use strict';

var HelloFileSystem = require('../../../src/node/HelloFileSystem.coffee');

describe("HelloWorld", function() {
    it("hello() should say hello from file when called", function() {
        expect(HelloFileSystem.hello()).toEqual("hello\n");
    });
});
