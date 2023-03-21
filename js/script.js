
// created variables with querySelector targeting both the generate and password id's shown in HTML syntax. Use document. to access elements in the HTML. 
var generateBtn = document.querySelector("#generate");
var generate = document.querySelector('#password');


function showPassword(password) {
    var passwordText = document.querySelector('#password');
// added .join to return array as a string
    passwordText.value = password.join('');
}
// created a function for the random password that is to be generated
function generatePassword (optionsObj) {
    var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var specChar = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '?', '/', '<', '>', '|', '{', '}', '[', ']', ':', ';', '.', ','];
// variables created for the password options the user has containing arrays for lowercase, uppercase, numbers and special characters/
// global variables created for password choices the user inputs and password list for the password to be generated
    var passwordChoices = [];
    var passwordList = [];
// created if statements so the user chosen criteria is being used in the random password.
// .concat used to combine strings into one
    if (optionsObj.lower) {
        passwordList = passwordList.concat(lower);
    }

    if (optionsObj.upper) {
        passwordList = passwordList.concat(upper);
    }

    if (optionsObj.nums) {
        passwordList = passwordList.concat(nums);
    }

    if (optionsObj.specChar) {
        passwordList = passwordList.concat(specChar);
    }
//  created for loop for the password length based on what the user entered
// created variable for a random password using the math object
    for (var i = 0; i < optionsObj.amount; i++) {
        var randomSelection = passwordList[Math.floor(Math.random() * passwordList.length)];

        passwordChoices.push(randomSelection);
    }
// called showPassword function
    showPassword(passwordChoices);
}



function getOptions(){
// obtained options from user via prompts at the top of page after clicking generate password button
    var wantsUppercase = confirm ('Would you like to include Uppercase letters?');
    var wantsLowercase = confirm ('Would you like to include lowercase letters?');
    var wantsNumbers = confirm ('Would you like to include numbers?');
    var wantsSpecChar = confirm ('Would you like to include special characters?');
    var passwordLength = prompt ('Choose the length of your password between 8-128 characters');
    var parsedAmount = parseInt (passwordLength);
// used parseInt to obtain a number from a string entered by the user
    console.log(parsedAmount);
// created variable with an object showing key value pairs based on user inputs regarding what they want to include in the password
    var options = {
        upper: wantsUppercase,
        lower: wantsLowercase,
        nums: wantsNumbers,
        specChar: wantsSpecChar,
        amount: parsedAmount,
};

// called generatePassword function
    generatePassword(options);

    console.log(options);
}
// used addEventListener to execute the getOptions function when the generate button is clicked
generateBtn.addEventListener('click', getOptions);


