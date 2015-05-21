// Creating the 16 card layout on the screen
// Make nine boxes
// Make an array that is your 16 squares, and then you can shuffle
// them to figure out the order. 
// so when the user clicks, i can just read what's in the DOM

// make an array of hard coded images
// make the squares, look at your squares to see what to make

// div class = javascript

// listener will show it from hidden to shown
// if it matches the old one, it has a pair. 

// create a div, shown and hidden

// for loop, giving a class of "shown" or "hidden"

var imageGallery = [];
var color = "green";
var colorTwo = "red";

for(var l =0 ; l <9; l++){
	var square = document.createElement("div");
	square.style.width = "30%";
	square.style.float = "left";
	square.style.backgroundColor = color;
	square.style.border = "1px solid gray";
	square.style.padding = "0 0 18% 0";
	square.classList.add("cell");
	document.body.appendChild(square);
}

// setting the variable firstClick to grab all of the cells
var firstClick = document.querySelectorAll(".cell");


// setting the variable Random to include all of the pictures classes from HTML/CSS
var random = document.querySelectorAll(".cell");



// Adding the event listener to the grid
for(var m = 0 ; m <= 10; m++){
	random[m].addEventListener("click", function() {
		this.className = "js";
	});

}


// Armand's Advice on adding shuffle statement

// if conditional statement
// keep track of clicks, see if they are a match
// then reset to zero if they are not a match
// make sure the user doesn't click on the same one
// make sure the objects being compared are different objects
// check to see if its already clicked, to see if its already




// Code that works!

// var imageGallery = [];
// var color = "green";
// var colorTwo = "red";

// for(var l =0 ; l <9; l++){
// 	var square = document.createElement("div");
// 	square.style.width = "30%";
// 	square.style.float = "left";
// 	square.style.backgroundColor = color;
// 	square.style.border = "1px solid gray";
// 	square.style.padding = "0 0 18% 0";
// 	square.classList.add("cell");
// 	document.body.appendChild(square);
// }


// // setting the variable firstClick to grab all of the cells
// var firstClick = document.querySelectorAll(".cell");

// // Adding the event listener to the grid
// for(var m = 0 ; m <= 10; m++){
// 	firstClick[m].addEventListener("click", function() {
// 		this.className = "js";
// 	});

// }

// Ended Code that works!




// 16 card layout ended


// firstClick[m].removeEventListener("click", once); 
// }


// square.style.height = "100px";
// square.style.height = "100px";