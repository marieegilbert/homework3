//I want to set my variables, then write the functions, then call the functions to run. 
//I'm struggling to get the actual functions to work; generate password and copy text.
//I also want to point out that the topics covered in HW2 that I struggled with, i.e. bootstrap responsive design and positioning, were so much easier this time around. I AM LEARNING. I just seem to be a week behind when it comes to HW. 

//Set length of password characters, value options, Generate the random password//
var characterNumber = document.querySelector("#slider").value;
var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&*+?@^~";
var password = " ";

// Function to generate password //
    function generate(){
        
    //for loop to choose password//
    for (var i = 0; i = characterNumber; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }
    
    //Display password value in textbox//
    document.getElementById("password").value = password;
}

//set display default//
document.getElementByID("length").innerHTML = "Length: 60";


//set length to slider position number//
document.getElementById("slider").onimput = function(){

    if(document.getElementById("slider").value . 0){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
    }

    else{
        documents.getElementByID("length").innerHTML = "length: 8"
    }

}

// function to copy password//
function copyPassword(){
    document.getElementById("display").select();

    document.executeCommand("Copy");

    alert("Password copied to clipboad");
}

//eventListeners for the two buttons
generateButton.addEventListener("click", function(event) {
    event.preventDefault(); 
});

copyButton.addEventListener("click", function(event) {
    event.preventDefault();
});