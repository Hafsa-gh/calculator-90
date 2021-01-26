
// Getting Buttons
function getBtn(number) {
     var input = document.getElementById("calc");
     input.value += number
}


// Getting the Result
function getResult(){
     var input = document.getElementById("calc");
     input.value = eval(input.value);
}


// Clear the Input Screen
function clearResult(){
     var input = document.getElementById("calc");
     input.value = " ";
}


// Backspace Function
function backSpace(){
     var input = document.getElementById("calc");
     input.value = 
     input.value.slice (0, -1);
}



