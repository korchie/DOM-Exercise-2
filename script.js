"use strict";



// use html to make the menu
// use css to make it hidden by default

// click letters in the menu
document.querySelector("#lettersMenu").addEventListener("click", function(event){
    console.log("you clicked the letters!");
    console.log(event);
    event.preventDefault();
    // show letters
    document.querySelector("#letters").style.display="block";

    // hide numbers
    document.querySelector("#numbers").style.display="none";

    // hide the menu
    document.querySelector("#menu").style.display="none";

});

// click numbers in the menu
document.querySelector("#numbersMenu").addEventListener("click", function(event){
    console.log("you clicked the numbers!");
    console.log(event);
    event.preventDefault();
    // show numbers
    document.querySelector("#numbers").style.display="block";

    // hide letters
    document.querySelector("#letters").style.display="none";

    // hide the menu
    document.querySelector("#menu").style.display="none";

});

// the menu
document.querySelector("#bars").addEventListener("click", function(){
    document.querySelector("#menu").style.display="block";
    document.getElementById("#bars").classList.toggle("show");
});