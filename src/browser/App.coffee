Config      = require './lib/config.coffee'
Template    = require './lib/Template.coffee'
helloJquery = require './HelloJquery.coffee';
helloWorld  = require '../common/HelloWorld.coffee';

# console.log Config.env # Check environment
# console.log Template 'post', {title:'some title', body: 'hot one'}

exports.main = ->
    element = helloJquery.hello()
    element.html helloWorld.helloUnderscore()
    window.document.body.appendChild element.get(0)