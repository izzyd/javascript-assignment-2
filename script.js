// Do your work in this file.

function boxClicked() {
    console.log("box clicked");
}

var boxes = document.querySelectorAll(".box");
console.log(boxes.length); 

var i = 0; 

for (var i = 0; i < 100; i++) {
    console.log(i);
    if (i > 100)
    boxes.style.backgroundColor = "yellow";
}



// boxes[i].addEventListener("click", boxClicked);

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

