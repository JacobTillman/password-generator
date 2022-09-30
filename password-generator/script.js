// Global variables
var generateBtn = document.querySelector("#generate");
var wantLower;
var wantUpper;
var wantNum;
var wantSpecial;
var main;
var main2;
var arrayNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specCase = [":", "&&", "(", "{", "!", "~", ")", "}", "-", "?" , "*", "^", "+", "]", "["];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var result = "";

// Takes user input and confirms wanted items within password.

function generatePassword() {
    main = prompt("Choose between 8 to 126 characters for your password.");
  if (main < 8 || main > 128) {
    main2 = prompt("Your password must be 8 to 126 characters.");
  }
    else {
    main2 = main
  }

  if (main2 >= 8 && main2 <= 128) {
      wantUpper = confirm("Do you want uppercase letters? OK for Yes - Cancel for No.");
    wantLower = confirm("Do you want lowercase letters? OK for Yes - Cancel for No.");
    wantNum = confirm("Do you want numbers? OK for Yes - Cancel for No.");
    wantSpecial = confirm("Do you want special characters? OK for Yes - Cancel for No. (Examples are / $ or #)");

    // Verify user input has at least one option chosen. 

    if (wantLower == false && wantUpper == false && wantNum == false && wantSpecial == false) {
      alert('You must select at least one option');
    }

    // Password Generator 

    var characterSet = [];
    if (wantLower) {
      characterSet = characterSet.concat(lowerCase)

    }
    if (wantUpper) {
      characterSet = characterSet.concat(upperCase)
    } 
    if (wantNum) {
      characterSet = characterSet.concat(arrayNum)
    }
    if (wantSpecial) {
      characterSet = characterSet.concat(specCase)
    }
    for (var i = 0; i < main2; i++) {
      result = result + characterSet[Math.floor(Math.random() * characterSet.length)];
      console.log(result)
    }
    return result;

  }


}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;

}


// Event Listener for "Generate Password" Button
generateBtn.addEventListener("click", writePassword);