/**
 * MicroLib-Utils is the utility library for other MicroLib libraries. It provides
 * helper methods for common tasks such as adding, checking and removing classes.
 * @version 1.0.0
 * @author Thomas Erbe <vizuaalog@gmail.com>
 * @license MIT
 */

/**
 * Loop over an array, executing the callback passing the item and index.
 * @method forEach
 * @param  {array}    array
 * @param  {Function} callback
 */
function forEach(array, callback) {
    "use strict";

    for(var i = 0; i < array.length; i++) {
        callback(i, array[i]);
    }
}

/**
 * Generate a random UID.
 * @method makeUID
 * @return {string}
 */
function makeUID() {
    "use strict";

    return ('0000' + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4);
}

/**
 * Check to see if the element has a class
 * @method hasClass
 * @param  {object}  element
 * @param  {string}  className
 * @return {Boolean}
 */
function hasClass(element, className) {
    "use strict";

    var classes = element.className.split(' ');
    return classes.indexOf(className) !== -1;
}

/**
 * Add a class to an element
 * @method addClass
 * @param  {object} element
 * @param  {string} className
 */
function addClass(element, className) {
    "use strict";

    var classes = element.className.split(' ');
    if(!hasClass(element, className)) {
        classes.push(className);
    }
    element.className = classes.join(' ');
}

/**
 * Remove a class from an element
 * @method removeClass
 * @param  {object}    element
 * @param  {string}    className
 */
function removeClass(element, className) {
    "use strict";

    var classes = element.className.split(' ');
    if(hasClass(element, className)) {
        classes.splice(classes.indexOf(className), 1);
    }
    element.className = classes.join(' ');
}

/**
 * Search through an elements children, finding the search string in either
 * the class or id.
 * @method findFromElement
 * @param  {object}        element
 * @param  {string}        searchItem
 * @return {array}
 */
function findFromElement(element, searchItem) {
    "use strict";

    var children = element.children;
    var results = [];

    forEach(children, function (index, item) {
        if(hasClass(item, searchItem) || item.id === searchItem) {
            results.push(item);
        }
    });

    return results;
}
