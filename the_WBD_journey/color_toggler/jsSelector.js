//alert("CONNECTED!");

//Select the button
var button = document.querySelector("button");
var isBlue = false;

//Listen & Change Background color when clicked
//button.addEventListener("click", function() {
	//if white
//	if (isBlue) {
//		body.style.background = "white";
//		cbody.style.color = "blue";
//		isBlue = false;
//	} else {
//		body.style.background = "blue";
//		body.style.color = "white";
//		isBlue = true;
//	}
//});

//A more cleaner way is to set
// isBlue = !isBlue
//instead of doing isBlue = false
//in the iteration i.e. the if statement
//button.addEventListener("click", function() {
	//if white
//	if (isBlue) {
//		document.body.style.background = "white";
//		document.body.style.color = "blue";
//	} else {
//		document.body.style.background = "blue";
//		document.body.style.color = "white";
//	}
//	isBlue = !isBlue
//});


//Another shorter solutions is to
//set a css class to style the element
//in this case the body and then use Javascript to .classList.toggle selector
//to check its present state and then toggle it
button.addEventListener("click", function() {
	document.body.classList.toggle("blue");
});





