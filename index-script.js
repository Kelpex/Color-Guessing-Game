var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1Bg = document.querySelector("#h1Bg");
var resetButtom = document.getElementById("reset");
var hardButtom = document.querySelector("#hardBtn");
var easyButtom = document.querySelector("#easyBtn");

easyButtom.addEventListener("click",function(){
    hardButtom.classList.remove("selected")
    easyButtom.classList.add("selected")
    h1Bg.style.backgroundColor = "steelblue";
    // solving the easy buttom problem
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    resetButtom.textContent = "New Colors";
    messageDisplay.textContent = "";
});

hardButtom.addEventListener("click",function(){
    easyButtom.classList.remove("selected");
    hardButtom.classList.add("selected");
    h1Bg.style.backgroundColor = "steelblue";
    // solving the hard buttom
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    resetButtom.textContent = "New Colors";
    messageDisplay.textContent = "";
})

colorDisplay.textContent = pickedColor;

resetButtom.addEventListener("click", function(){
    // generate new colors
    colors = generateRandomColors(numSquares);
    // pick a new random array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors os squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    // go back h1Bg to original color
    h1Bg.style.backgroundColor = "steelblue"
    resetButtom.textContent = "New Colors";
    messageDisplay.textContent = "";
});

for(var i = 0; i < squares.length; i++) {
    // add the colors
    squares[i].style.backgroundColor = colors[i];
    // add event click
    squares[i].addEventListener("click", function(){
        // call the color
        var clickedColor = this.style.backgroundColor
        // compare the colors
        if (pickedColor === clickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColor(clickedColor);
            h1Bg.style.backgroundColor = clickedColor;
            resetButtom.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // create an array
    var arr = [];
    // generate random colors into num array
    for(var i = 0; i < num; i++){
        arr.push(randomColors())        
    }
    // return array
    return arr;
}

function randomColors(){
    // create red random colors
    var r = Math.floor(Math.random() * 256);
    // create green random colors
    var g = Math.floor(Math.random() * 256);
    // create blue random colors
    var b = Math.floor(Math.random() * 256);
    // return rgb
    return "rgb(" + r + ", " + g + ", " + b + ")"
}