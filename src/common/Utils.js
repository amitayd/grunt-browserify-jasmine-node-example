/* global window: false */ 

exports.requireOrGlobal = function (module, global) {

   if (typeof(window) !== 'undefined' && window[global]) {
        return window[global];
    }
    else {
        return require(module);
    }
};
