/* global window: false */

var helloJquery = require('./HelloJquery');
var helloWorld = require('../common/HelloWorld.js');

exports.main = function() {
    var element = helloJquery.hello();
    element.html(helloWorld.helloUnderscore());
    window.document.body.appendChild(element.get(0));
};
