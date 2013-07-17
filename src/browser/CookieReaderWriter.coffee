# global document: false, escape: false, unescape: false

#\
#|*|
#|*|  :: cookies.js ::
#|*|
#|*|  A complete cookies reader/writer framework with full unicode support.
#|*|
#|*|  https://developer.mozilla.org/en-US/docs/DOM/document.cookie
#|*|
#|*|  This framework is released under the GNU Public License, version 3 or later.
#|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
#|*|
#|*|  Syntaxes:
#|*|
#|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
#|*|  * docCookies.getItem(name)
#|*|  * docCookies.removeItem(name[, path])
#|*|  * docCookies.hasItem(name)
#|*|  * docCookies.keys()
#|*|
#\
docCookies =
  getItem: (sKey) ->
    unescape(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) or null

  setItem: (sKey, sValue, vEnd, sPath, sDomain, bSecure) ->
    return false  if not sKey or /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)
    sExpires = ""
    if vEnd
      switch vEnd.constructor
        when Number
          sExpires = (if vEnd is Infinity then "; expires=Fri, 31 Dec 9999 23:59:59 GMT" else "; max-age=" + vEnd)
        when String
          sExpires = "; expires=" + vEnd
        when Date
          sExpires = "; expires=" + vEnd.toGMTString()
    document.cookie = escape(sKey) + "=" + escape(sValue) + sExpires + ((if sDomain then "; domain=" + sDomain else "")) + ((if sPath then "; path=" + sPath else "")) + ((if bSecure then "; secure" else ""))
    true

  removeItem: (sKey, sPath) ->
    return false  if not sKey or not @hasItem(sKey)
    document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ((if sPath then "; path=" + sPath else ""))
    true

  hasItem: (sKey) ->
    (new RegExp("(?:^|;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test document.cookie

  keys: -> # optional method: you can safely remove it!
    aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/)
    nIdx = 0

    while nIdx < aKeys.length
      aKeys[nIdx] = unescape(aKeys[nIdx])
      nIdx++
    aKeys

exports.read = (key) ->
  docCookies.getItem key

exports.write = (key, value) ->
  docCookies.setItem key, value