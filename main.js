/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */


// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!


var gridWidth = 50;
var count = 0;
while (count <= gridWidth * gridWidth) {
  var canvas = document.querySelector('.canvas');
  var div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

/***********
 * QUERIES *
***********/
let mouseDown = false;

function getColor(element) {
    return element.classList[1];
}

// const clear = document.getElementById("button")

// function clearMe(element) {
//   console.log("hahah")
//   return element.classList[1];
// }

// clear.addEventListener("click",getColor )




function handleClickSquare (event) {
    const square = event.target;
    const brush = document.querySelector('.current-brush');
    square.classList.replace(getColor(square), getColor(brush));
    mouseDown = false;
}

function clicky (event) {
  if(mouseDown) {
    const square = event.target;
    const brush = document.querySelector('.current-brush');
    square.classList.replace(getColor(square), getColor(brush));
  }
}

const squares = document.querySelectorAll('.square')

for (const square of squares) {
  square.addEventListener('mouseenter', clicky)
  square.addEventListener('click', handleClickSquare)
};

function clickMyColor (event) {
  const brush = document.querySelector('.current-brush');
  brush.classList.replace(getColor(brush), getColor(event.target));
}

const paletteColors = document.querySelectorAll('.palette-color');

for (const paletteColor of paletteColors) {
  paletteColor.addEventListener('click', clickMyColor);
};

document.body.addEventListener('mousedown', () => {
  console.log('mouse')
  mouseDown = true;
})

document.body.addEventListener('mouseup', () => {
  console.log('mouse')
  mouseDown = false;
})


// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)



/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
