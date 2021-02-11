// Assignment Code
var generateBtn = document.querySelector("#generate");
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 
}
 
 
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];
let lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
 
 
 
let passwordLength = prompt("Please enter the number of characters you want for you new password. It may be between 8 and 128 characters.");
    if (!passwordLength || passwordLength <= 7 || passwordLength >= 129) {
      return alert("Invalid Response. Please try again.");
    } else {}
  let lowerCase = confirm("Do you want your new password to include lowercase letters?");
    if (lowerCase === true) {
      const randomLowerCase = Math.floor(Math.random() * lowerCase.length);
    } else {}
 
  let upperCase = confirm("Do you want your new password to include uppercase letters?");
  if (upperCase === true) {
    const randomUpperCase = Math.floor(Math.random() * upperCase.length);
  } else {}
 
  let numbers = confirm("Do you want your new password to include numbers?");
  if (numbers === true) {
    const randomNumbers = Math.floor(Math.random() * numbers.length);
  }
 
  let specialCharacters = confirm("Do you want your new password to include special characters?");
  if (specialCharacters === true) {
    const randomSpecialCharacters = Math.floor(Math.random() * specialCharacters.length);}
  
  }
let randomPassword = " ";