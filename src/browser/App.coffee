Config      = require './lib/Config.coffee'
helloJquery = require './HelloJquery.coffee';
helloWorld  = require '../common/HelloWorld.coffee';

exports.main = ->
    element = helloJquery.hello()
    element.html helloWorld.helloUnderscore()
    window.document.body.appendChild element.get(0)