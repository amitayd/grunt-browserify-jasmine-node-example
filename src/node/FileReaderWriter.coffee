fs = require "fs"

getFileName = (key)-> "./resources/#{key}.txt"

exports.read = (key)-> fs.readFileSync getFileName(key), {encoding: "ascii"}

exports.write = (key, value)-> fs.writeFileSync getFileName(key), value, {encoding: "ascii"}