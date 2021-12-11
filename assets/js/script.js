// Assignment code here
let special = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ":", ":", "'", ",", "<", ".", ">", "/", "?", "`", "~"];
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
  //character length prompt
  let length = window.prompt("Please enter desired character length. Enter a number from 8 to 128.");
  //while loop for password length validation
  while (length <= 7 || length >= 129) {
    window.alert("Invalid entry!");
    length = window.prompt("Please enter desired character length. Enter a number from 8 to 128.");
  }
  //password criteria prompts
  let numberCheck = window.confirm("Click the 'OK' button to include numbers in your password.");
  let specialCheck = window.confirm("Click the 'OK' button to include special characters (!, @, #, $, etc.) in your password.");
  let upperCheck = window.confirm("Click the 'OK' button to include uppercase characters in your password.");
  let lowerCheck = window.confirm("Click the 'OK' button to include lowercase characters in your password.");

  //password criteria validation
  while (numberCheck === false && specialCheck === false && upperCheck === false && lowerCheck === false) {
    window.alert("Invalid entry. At least one password complexity criterion must be selected.");
    numberCheck = window.confirm("Click the 'OK' button to include numbers in your password.");
    specialCheck = window.confirm("Click the 'OK' button to include special characters (!, @, #, $, etc.) in your password.");
    upperCheck = window.confirm("Click the 'OK' button to include uppercase characters in your password.");
    lowerCheck = window.confirm("Click the 'OK' button to include lowercase characters in your password.");

  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
