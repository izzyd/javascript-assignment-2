// Do your work in this file.

function boxClicked() {
    console.log("box clicked");
}

var boxes = document.querySelectorAll(".box");
console.log(boxes.number); 

var i = 201-300; 
var j = 301-400; 
var k = 401-500;
var l = 501-600; 
var m = 601-700; 
var n = 701-800; 
var o = 801-900; 

for (; i < boxes.number; i++) {
    console.log(i);
}
    if (i > 300) {
    boxes.style.backgroundColor = "yellow";
}


// boxes[i].addEventListener("click", boxClicked);


// inputVal.style.backgroundColor = "yellow";


// boxes[200-299].style.backgroundColor = "yellow";


// if (boxes.number >= 300) {
//     boxes.style.backgroundColor = "yellow";
// } else if (boxes.number <= 200) {
//     boxes.style.backgroundColor = "blue";
// } 


// for (var i = 0; i < boxes.number; i++) {
//     boxes[i].addEventListener("click", boxClicked);
// }



// if (boxes.number == 201-300) {
//     boxColor = "yellow"
// }

