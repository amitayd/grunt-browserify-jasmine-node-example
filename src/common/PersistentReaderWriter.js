var Utils = require('./Utils');


/* Offer a concrete implementation according to the environment */
if (Utils.isBrowser) {
    module.exports = require("../browser/CookieReaderWriter");
}
else {
    module.exports = require("../node/FileReaderWriter");
}

