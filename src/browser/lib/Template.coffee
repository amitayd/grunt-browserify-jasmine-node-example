###*
 * Holds the templates loaded from the system
 *
 * templates = {
 *   paragraph: require './templates/paragraph.hbs'
 *   box: require './templates/box.hbs'
 * }
 *
 * @type {Object}
###

@templates = {}

module.exports = (name, data)=> @templates[name]? data