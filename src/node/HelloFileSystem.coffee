fs = require "fs"

exports.hello = -> fs.readFileSync "./resources/hello.txt", {encoding: "ascii"}