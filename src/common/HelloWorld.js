var Utils = require("./Utils");

var _ = Utils.requireOrGlobal("underscore", "_");

exports.hello = function hello() {
    return "hello";
};

exports.helloUnderscore = function helloUnderscore() {
    return _.escape('hello & hi')
};
