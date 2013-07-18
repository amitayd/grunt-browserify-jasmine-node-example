fs     = require 'fs'
yamljs = require 'yamljs'
_      = require 'underscore'

settings = yamljs.parse fs.readFileSync "#{__dirname}/../config/#{process.env.NODE_ENV}.yml"
defaults = yamljs.parse fs.readFileSync "#{__dirname}/../config/default.yml"

module.exports = _.extend defaults ? {}, settings ? {}