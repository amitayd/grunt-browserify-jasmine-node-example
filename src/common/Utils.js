/* global window: false */ 

function isBrowser() {
    return typeof(window) !== 'undefined';
}

exports.isBrowser = isBrowser();

exports.requireOrGlobal = function (module, global) {
   if (isBrowser()) {
        return window[global];
    }
    else {
        return require(module);
    }
};




