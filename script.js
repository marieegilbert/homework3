// Generate password //
function generate(){

    //Set length of password characters//
    var characterNumber = document.getElementById("slider").value;

    //Setting the password character value options//
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&*+?@^~";

    //Generate the random password//
    var password = " ";

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

//copy password//
function copyPassword(){
    document.getElementById("display").select();

    document.executeCommand("Copy");

    alert("Password copied to clipboad");
}