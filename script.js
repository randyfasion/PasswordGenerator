// Assignment Code

//declare global variables 
var generateBtn = document.querySelector("#generate");
var char = "abcdefghijklmnopqrstuvwxyz";
var specchar = "!@#$%^&*()_+{}|:>?<-=[/;]',./`";
var uppercharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numb = "0123456789"; 
var result = "";
var password = "";
characters=char +numb;
lowchar= char+numb;
upper = uppercharacters + numb;

// Write password to the #password input
function writePassword() {
  //create a promt to ask how many characters
  var passlen = parseInt(prompt("how many characters would you like your password to contain"));
  if (!passlen) {
    return;
  }
  //create an alert for minimum of 8 characters
  if(passlen <8){
    window.alert("Must be more than 8 characters!");
    return;
  }
  //create an alert for maximum 128 characters
  if(passlen >128){
    window.alert("Must be less than 128 characters!");
    return;
  }

 var special= window.confirm("Click OK to confirm using special characters");

  var upper = window.confirm("Click OK to confirm using Upper Case");

if(special){
  characters = characters + specchar;
}
if(!upper){
 lowchar = lowchar;
}
else{
upper;
}

  console.log("hello", special, upper);
  var password = generatePassword(passlen);
  
  
}
//create function to generate random password
function generatePassword(length){

  var newpassword = "";
for( var i=0; i< length; i++){
  // console.log("loop", i);
  newpassword = newpassword +  characters.charAt(Math.floor(Math.random() * characters.length));
  newpassword = newpassword + lowchar.charAt(Math.floor(Math.random() * lowchar.length));
  
// console.log("hi", newpassword);
}



  var passwordText = document.querySelector("#password");

  passwordText.value = newpassword;
characters = "";

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

