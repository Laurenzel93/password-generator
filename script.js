// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText.value);
  passwordText.value = password;
  console.log(passwordText.value);
}
// assigning variables and inputting options into arrays
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let masterArray = [];
let randomPassword = "";


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  randomPassword = ""; // This ensures that the generated password is cleared on every new button click

  let passwordLength = prompt("Please enter the number of characters you want for you new password. It may be between 8 and 128 characters.");
  if (!passwordLength || passwordLength <= 7 || passwordLength >= 129) {
    return alert("Invalid Response. Please try again."); // ensures if no response or incorrect responses are not accepted
  }
  let useLowerCase = confirm("Do you want your new password to include lowercase letters?");
  if (useLowerCase === true) {
    masterArray = masterArray.concat(lowerCase);
  }

  let useUpperCase = confirm("Do you want your new password to include uppercase letters?");
  if (useUpperCase === true) {
    masterArray = masterArray.concat(upperCase);
  }

  let useNumbers = confirm("Do you want your new password to include numbers?");
  if (useNumbers === true) {
    masterArray = masterArray.concat(numbers);
  }

  let useSpecialCharacters = confirm("Do you want your new password to include special characters?");
  if (useSpecialCharacters === true) {
    masterArray = masterArray.concat(specialCharacters);
  }

  for (let i = 0; i < passwordLength; i++) {
    randomPassword += masterArray[Math.floor(Math.random() * (masterArray.length))];
  }

  return randomPassword;

}
