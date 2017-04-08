//
// DO NOT TOUCH THIS FILE.
//
// But you can take a look to see how I did what I did!

/**
 * Returns a random number between "min" and "max".
 * @param {Integer} min
 * @param {Integer} max
 */
function randomNumber(min, max) {
    if (max == null) {
        max = min;
        min = 0;
    }

    max = parseInt(max, 10);
    min = parseInt(min, 10);

    return min + Math.floor(Math.random() * (max - min + 1));
}

// Get a random number between 100 and 1000.
var random = randomNumber(1e2, 1e3);

// Create random number of divs and add it to the body.
for (var x = 0; x < random; x++) {

    // Create a 'div'.
    var div = document.createElement('div');

    // Add a class to new div.
    div.className = 'box';

    // Append it to the document body.
    document.body.appendChild(div);
}
