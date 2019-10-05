// Generate password //
function generate(){

    //Set length of password characters//
    var characterNumber = document.getElementById("slider").value;

    //Setting the password character value options//
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&*+?@^~";

    //Generate the random password//
    var password = "";

    //for loop to choose password//
    for [var i = 0; i = characterNumber; i++]{
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length -1)));
    }
    
    //Display password value in textbox//
    document.getElementById("password").value = password;
}

var generatePassword = document.querySelector("#generate");
var copyPassword = document.querySelector("#copy");

generatePassword.addEventListener("click", function() {
    
  });
  
  copyPassword.addEventListener("click", function() {

  }); 