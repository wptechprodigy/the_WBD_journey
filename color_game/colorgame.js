  var numSquares = 9;
  var colors = [];
  var pickedColor; //change this from been hard-coded (colors[3]) to random
  var squares = document.querySelectorAll(".square");
  var colorCodeDisplay = document.getElementById("colorCodeDisplay");
  var messageDisplay = document.querySelector("#message");
  var h1 = document.querySelector("h1");
  var resetButton = document.querySelector("#reset");
  var modeButton = document.querySelectorAll(".mode");
  
  
  init();
  
  function init() {
    //mode event listener
    setUpModeButtons();
    setUpSquares();
    reset();
  }
  
  
  function reset() {
    //generate new random colors
    colors = generateRandomColors(numSquares);
    //pick correct color to display
    pickedColor = pickColor();
    //change display color to pickedColor
    colorCodeDisplay.textContent = pickedColor;
    //change the colors on the square
    for (var i = 0; i < squares.length; i++) {
      if (colors[i]) {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i]; 
      } else {
        squares[i].style.display = "none";
      }
    }
    //Remove the Try Again/Correct display
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    //Reset the h1 backgroundColor
    h1.style.backgroundColor = "steelblue";
  }
  
  
  //Reset both the square colors and displayed rgb code
  resetButton.addEventListener("click",function() {
    reset();
  });
  
  function setUpModeButtons() {
    for (var i = 0; i < modeButton.length; i++) {
      modeButton[i].addEventListener("click", function() {

	// Used forEach() method to refactor the code and was able to save more
        // lines
        modeButton.forEach(button => {
          button.classList.remove("selected");
        });
        // modeButton[0].classList.remove("selected");
        // modeButton[1].classList.remove("selected");
        // modeButton[2].classList.remove("selected");
        this.classList.add("selected");
        
        if (this.textContent === "Easy") {
          numSquares = 3;
        } else if (this.textContent === "Hard") {
          numSquares = 6;
        } else {
          numSquares = 9;
        }
	// The logic above replaces the commented logic below
	// that's because of the added complex mode
        // this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
      });
    }
  }
  
  function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
      //Add event listener
      squares[i].addEventListener("click",function() {
        //Grab clicked color
        var clickedColor = this.style.backgroundColor;
        //compare the clicked color to pickedColor 
        if (clickedColor === pickedColor) {
          //When correct color is clicked
          messageDisplay.textContent = "Correct!";
          //Change "New Colors" to "Play Again?" after winning
          resetButton.textContent = "Play Again?";
          //change h1 backgorund color to the winning color
          h1.style.backgroundColor = clickedColor;
          //change all squares to correct color
          changeColors(clickedColor);
          // easyBtn.style.backgroundColor = pickedColor;
          // hardBtn.style.backgroundColor = pickedColor;
        } else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again!";
        }
      });
    }
  }
  
  function changeColors(color) {
    //loop through colors
    for (var i = 0; i < squares.length; i++) {
      //change each color to match given colors
      squares[i].style.backgroundColor = color;
    }
  }
  
  function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }
  
  function generateRandomColors(num) {
    //define an array of colors
    var arr = [];
    //make a num (in this case 6) amount of colors into the array
    for (var i = 0; i < num; i++) {
      //push the generated random colors into arr
      arr.push(randomColors());
    }
    //return the array
    return arr;
  }
  
  function randomColors() {
    //generate random values for rgb(r, g, b) from 0 - 255
    //r part 
    var r = Math.floor(Math.random() * 256);
    //g part
    var g = Math.floor(Math.random() * 256);
    //b part 
    var b = Math.floor(Math.random() * 256);
    //return the generated rgb values in the correct form
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  
  
