Utils = require './Utils.coffee'

# Offer a concrete implementation according to the environment

module.exports =
    if Utils.isBrowser
    then require "../browser/CookieReaderWriter.coffee"
    else require "../node/FileReaderWriter.coffee"