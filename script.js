// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let masterArray = [];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {

  let passwordLength = prompt("Please enter the number of characters you want for you new password. It may be between 8 and 128 characters.");
  if (!passwordLength || passwordLength <= 7 || passwordLength >= 129) {
    return alert("Invalid Response. Please try again.");
  }
  let useLowerCase = confirm("Do you want your new password to include lowercase letters?");
  if (useLowerCase === true) {
    masterArray += lowerCase;
    console.log(masterArray);
  }

  let useUpperCase = confirm("Do you want your new password to include uppercase letters?");
  if (useUpperCase === true) {
    masterArray += upperCase;
    console.log(masterArray);
  }

  let useNumbers = confirm("Do you want your new password to include numbers?");
  if (useNumbers === true) {
    masterArray += numbers;
    console.log(masterArray);
  }

  let useSpecialCharacters = confirm("Do you want your new password to include special characters?");
  if (useSpecialCharacters === true) {
    masterArray += specialCharacters;
    console.log(masterArray);
  }

    for (let i = 0; i < passwordLength; i++); {
      randomPassword += Math.floor(Math.random() * (max - min) + min);
    }
    
// make master array
// get random thing from master array
// put random thing into password variable

return masterArray;
}
let randomPassword = " ";
