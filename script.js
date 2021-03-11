// Assignment Code
var generateBtn = document.querySelector("#generate");
var char = "abcdefghijklmnopqrstuvwxyz";
var specchar = "!@#$%^&*()_+{}|:>?<-=[]\;',./`";
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numb = "0123456789"; 
var result = " ";
var password = " ";


// Write password to the #password input
function writePassword() {
  var passlen = parseInt(prompt("how many characters would you like your password to contain"));
  if (!passlen) {
    return;
  }

  window.confirm("Click OK to confirm using special characters");

  
  var password = generatePassword();
  function generatePassword(){

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
   
  }
  

}


function makeid(length) {

  
    for ( var i = 0; i < char.length; i++ ) 
    {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    for ( var i = 0; i< specchar.length; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    for ( var i = 0; i< characters.length; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
 }
 
 //console.log(makeid(5));


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

