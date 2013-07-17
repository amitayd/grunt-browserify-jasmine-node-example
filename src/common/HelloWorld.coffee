# Utils = require "./Utils"
# _ = Utils.requireOrGlobal "underscore", "_"
_ = require "underscore"

exports.hello = -> "hello"

exports.helloUnderscore = -> _.escape 'hello & hi'
