/**
 * The result of running a selector is a jQuery object. 
 * However, the library makes it appear as if you are working with an array 
 * by defining index elements and a length.
 * If performance is what you are after, using a simple for (or a while) loop instead of $.each(), 
 * can make your code several times faster.
 */

// Selecting all the navigation buttons:
var buttons = $('#navigation a.button');

// We can loop though the collection:
for(var i=0;i<buttons.length;i++){
    console.log(buttons[i]);    // A DOM element, not a jQuery object
}

// We can even slice it:
var firstFour = buttons.slice(0,4);