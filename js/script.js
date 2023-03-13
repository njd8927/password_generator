

var generateBtn = document.querySelector("#generate");
var generate = document.querySelector('#password');


function showPassword(password) {
    var passwordText = document.querySelector('#password');

    passwordText.value = password.join('');
}

function generatePassword (optionsObj) {
    var low = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var up = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var specChar = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '?', '/', '<', '>', '|', '{', '}', '[', ']', ':', ';', '.', ','];

    var passwordChoices = [];
    var passwordList = [];

    if (optionsObj.low) {
        passwordList = passwordList.concat(low);
    }

    if (optionsObj.up) {
        passwordList = passwordList.concat(up);
    }

    if (optionsObj.numb) {
        passwordList = passwordList.concat(numb);
    }

    if (optionsObj.specChar) {
        passwordList = passwordList.concat(specChar);
    }
   
    for (var i = 0; i < optionsObj.amount; i++) {
        var randomSelection = passwordList[Math.floor(Math.random() * passwordList.length)];

        passwordChoices.push(randomSelection);
    }

    showPassword(passwordChoices);
}



function getOptions(){
    var wantsUppercase = confirm ('Would you like to include Uppercase letters?');
    var wantsLowercase = confirm ('Would you like to include lowercase letters?');
    var wantsNumbers = confirm ('Would you like to include numbers?');
    var wantsSpecChar = confirm ('Would you like to include special characters?');
    var passwordLength = prompt ('Choose the length of your password between 8-128 characters');
    var parsedAmount = parseInt (passwordLength);

    console.log(parsedAmount);

    var options = {
        upper: wantsUppercase,
        lower: wantsLowercase,
        nums: wantsNumbers,
        specChar: wantsSpecChar,
        amount: parsedAmount,
};


    generatePassword(options);

    console.log(options);
}

generateBtn.addEventListener('click', getOptions);


