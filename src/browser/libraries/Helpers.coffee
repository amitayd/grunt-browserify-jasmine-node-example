_      = require 'underscore'
Config = require './Config.coffee'

class Helpers

    constructor: ->
        global = @

        ###*
         * Capitalize words
         * @return {String}
        ###
        String::capitalizeWords = -> @replace /^.|\s./g, (char)-> char.toUpperCase()

        ###*
         * Bound to the global object but used only with
         * jQuery ($) objects. Temporarily till jQuery 2.0 is available through npm
         *
         * @param  {Function} callback
         * @return {Object}
        ###
        Object::onEnter = (callback)-> global.bind_enter_keypress @, callback

    ###*
     * Verify whether a text is in the arabic langauge
     *
     * @param  {String}  str
     * @return {Boolean}
    ###
    is_arabic: (str)->
            arabic = /[\u0600-\u06FF]/
            arabic.test str

    ###*
     * Open a new browser window
     * @param  {String} url
     * @param  {String} name  window name
     * @param  {Object} props window properties
     * @return {Window}
    ###
    open_window: (url, name, props)-> window.open url, name, _.map(props, (value, key)-> "#{key}=#{value}").join(',')

    url:
        ###*
         * Parse and return a query string (location.search) as an object
         *
         * @param  {String} query_string location.search
         * @param  {String} key          (Optional) a parameter to return out of the query
         * @return {Object}
        ###
        query: (query_string, key)->
                    query_string = query_string.substr(1).split '&'
                    parsed_query_string = {}
                    _.map(query_string, (value)-> parsed_query_string[value.split('=')[0]] = decodeURIComponent value.split('=')[1] )
                    if key? then parsed_query_string[key] else parsed_query_string

        ###*
         * Build a query string out of an object
         *
         * @param  {Object} params
         * @return {String}
        ###
        build_query: (params)-> _.map(params, (value, key)-> "#{key}=#{encodeURIComponent value}").join '&'

    ###*
     * Bind the enter key press event to an array of DOM Elements
     * @param  {Object}   elements jQuery object
     * @param  {Function} callback
     * @return {void}
    ###
    bind_enter_keypress: (elements, callback)->

        if elements? and callback?
            for element in elements
                element.onkeypress = (e)=> @on_enter e, callback

    ###*
     * Call a method when the enter event occurs
     * @param  {Object}   event
     * @param  {Function} callback
     * @return {void}
    ###
    on_enter: (event, callback)->
        if @is_enter event
            callback(event) if typeof callback is 'function'

    ###*
     * Detect an Enter key press
     * @param  {Object}  event
     * @return {Boolean}
    ###
    is_enter: (event)->
        keycode = event?.which ? event.keyCode
        keycode is 13

module.exports = new Helpers