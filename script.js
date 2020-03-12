// Assignment Code
var generateBtn = document.querySelector("#generate");

// asks user for password criteria and returns a char set based on that
function getPasswordCriteria() {
  var isLowercase = confirm("Do you want lowercase characters?");
  var isUppercase = confirm("Do you want uppercase characters?");
  var isNumeric = confirm("Do you want numbers?");
  var isSpecialChars = confirm("Do you want special characters?");

  // if the user doesn't pick anything, gets prompted to choose again
  if (!isLowercase && !isUppercase && !isNumeric && !isSpecialChars) {
    alert("Must select at least one criteria to create a password");
    getPasswordCriteria();
  }
  else {
    // selection of characters the password can consist of
    var alphabet = "abcdefghijklmonpqrstuvwxyz";
    var numbers = "1234567890";
    var specialChars = "!\"#$%&\'()*+,-./:\;<=>?@[\\]^_`{|}~";

    var charSet = "";
    // concatenates selection of characters from above to charSet based on user selection
    if (isLowercase) {
      charSet += alphabet;
    }
    if (isUppercase) {
      charSet += alphabet.toUpperCase();
    }
    if (isNumeric) {
      charSet += numbers;
    }
    if (isSpecialChars) {
      charSet += specialChars;
    }

    return charSet;
  }
}

// generates a password with the given char set
function generatePassword() {
  var isValidPasswordLength = false;
  var userInput = "";
  var passwordLength = 0;

  // Keeps asking for a length until the input given is valid. If the user clicks
  // cancel, stops asking and closes the prompt
  while (userInput !== null && !isValidPasswordLength) {
    userInput = prompt("Choose a length between 8 and 128 characters for your password");
    passwordLength = parseInt(userInput);
    if (passwordLength >= 8 && passwordLength <= 128 ) {
      console.log("inside");
      isValidPasswordLength = true;
    }
    else {
      // if the user didn't click cancel alerts input is invalid
      if (userInput !== null) {
        alert("Not a valid length!");
      }
    }
  }
  
  var password = "";
  // if user clicks cancel on the prompt, it doesn't display anything in the textbox
  if (userInput !== null) {
    var charSet = getPasswordCriteria();

    for (var i = 0; i < passwordLength; i++) {
      // gets a random integer from 0 to charSet.length - 1
      var random = Math.floor(Math.random() * charSet.length);
      // gets char at position given by random from charSet and concatenates to the end of password
      password += charSet.charAt(random);
    }
  }
 

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
