'use strict';

var HelloJquery = require('../../../src/browser/HelloJquery.coffee');

describe("HelloJQuery", function() {
    it("hello() should return a jquery element with hello innertext", function() {
        expect(HelloJquery.hello().text()).toEqual("hello");
    });
});

