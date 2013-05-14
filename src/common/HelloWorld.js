//var Utils = require("./Utils");
//var _ = Utils.requireOrGlobal("underscore", "_");
var _ = require("underscore");

exports.hello = function hello() {
    return "hello";
};

exports.helloUnderscore = function helloUnderscore() {
    return _.escape('hello & hi');
};
