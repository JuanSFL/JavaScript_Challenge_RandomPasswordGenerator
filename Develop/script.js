// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  numbers='0123456789'
  lower="abcdefghijklmnopqrstuvwxyz"
  upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  symbols="!@#$%^&*()_+~`[]\{}|;:<>?"
}

numberOfCharacters = prompt("How many characters would you like in your password? Choose between 8-128.")
if (numberOfCharacters < 8 || numberOfCharacters > 128){
  alert ("Choose a valid number of characters.")
} else {
  alert ("Your password will be " + numberOfCharacters + " characters long.")
}

IncludeNumbers = confirm ("Do you want numbers in your password?");
if (!IncludeNumbers){
  alert("Your password will not include numbers.")
} else {
  alert ("Your password will include numbers.")
}

IncludeLowercase = confirm("Do you want lowercase letters in your password?");
if (!IncludeLowercase) {
  alert("Your password will NOT include lowercase letters.");
}
else {
  alert("Your password will include lowercase letters.");
}

IncludeUppercase = confirm ("Do you want uppercase letters in your password?")
if (!IncludeUppercase){
  alert ("Your password will NOT include uppercase letters!")
} else {
  alert ("Your password willl include uppercase letters!")
}

IncludeSymbols = confirm ("Do you want symbols in your password?")
if (!IncludeSymbols) {
  alert ("Your password will NOT contain symbols!")
} else {
  alert ("Your password will contain symbols!")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
alert(generateBtn)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

