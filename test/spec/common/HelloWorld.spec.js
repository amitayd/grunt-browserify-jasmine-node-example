'use strict';

var HelloWorld = require('../../../src/common/HelloWorld.coffee');

describe("HelloWorld", function() {
    it("hello() should say hello when called", function() {
        expect(HelloWorld.hello()).toEqual("hello");
    });
});

describe("HelloUnderscore", function() {
    it("hello() should escape 'hello & hi' when called", function() {
        expect(HelloWorld.helloUnderscore()).toEqual("hello &amp; hi");
    });
});
