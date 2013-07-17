# global window: false

isBrowser = -> window?

exports.isBrowser = isBrowser()

exports.requireOrGlobal = (module, global)-> if isBrowser then window[global] else require(module)