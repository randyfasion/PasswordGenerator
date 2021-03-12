// Assignment Code
var generateBtn = document.querySelector("#generate");
var char = "abcdefghijklmnopqrstuvwxyz";
var specchar = "!@#$%^&*()_+{}|:>?<-=[/;]',./`";
var uppercharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numb = "0123456789"; 
var result = "";
var password = "";
characters=uppercharacters +numb;


// Write password to the #password input
function writePassword() {
  var passlen = parseInt(prompt("how many characters would you like your password to contain"));
  if (!passlen) {
    return;
  }

 var special= window.confirm("Click OK to confirm using special characters");

  var upper = window.confirm("Click OK to confirm using Upper Case");

if(special){
  characters = characters + specchar;
}

  console.log("hello", special, upper);
  var password = generatePassword(passlen);
  
  
}
function generatePassword(length){

  var newpassword = "";
for( var i=0; i< length; i++){
  // console.log("loop", i);
  newpassword = newpassword +  characters.charAt(Math.floor(Math.random() * characters.length));
// console.log("hi", newpassword);
}


  var passwordText = document.querySelector("#password");

  passwordText.value = newpassword;
characters = "";

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

