var result = document.getElementById("result");
function show(number){
result.value += number;
} 
function showOperators(operator){
result.value += operator;
}
function clearResult(){
  result.value = result.value.slice(0, -1);
}
function error(){
alert("sorry, you can't place phone calls at the moment.");
}

// creating functions for the button 

var bot = document.getElementById("fit");
bot.addEventListener('click', backgroundLight);
bot.addEventListener('click', textColors);
bot.addEventListener('click', valueColors);// adding the function to the button

//changing the background color 

var z = document.getElementById("hed"); 
function backgroundLight(){
	if (z.style.backgroundColor === "white") {
	  z.style.backgroundColor = ""; // Set the background color to the default value
	}else {
	  z.style.backgroundColor = "white";
	}
}
//functions for the texts, anytime the background color changes

var x = document.querySelectorAll(".texts");
function textColors(){
  for(let i = 0; i < x.length; i++){
	if(z.style.backgroundColor === "white"){
  x[i].style.color = "black";
	x[i].style.backgroundColor = "#E5E4E2";
	} else{
x[i].style.color = "";
	  x[i].style.backgroundColor = "";
}
} 
}

// this function below is specificaly for the color of the values on the input field; anytime the background color changes

let cancel = document.getElementById("cancel");
function valueColors(){
if(z.style.backgroundColor === "white"){
result.style.color = "black";
  cancel.style.color = "black";
} else{
result.style.color = "";
  cancel.style.color = "";
}
}

// function to display the contact 

var contactOverlay = document.getElementById("overlay");
function showContact() {
if(contactOverlay.style.display == "none"){
  contactOverlay.style.display = "block";
} else{
	contactOverlay.style.display = "block";
}
}


//funnction for tbe back button

function goBack(){
	let previous = document.getElementById("prev");
if(contactOverlay.style.display == "block"){
	contactOverlay.style.display = "none";
}
}
