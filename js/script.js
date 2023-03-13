

var generateBtn = document.querySelector("#generate");
var generate = document.querySelector('#password');

function showPassword(pass) {
    password.innerText = pass;
}

function generatePassword (optionsObj) {
    var up = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    var low = ["abcdefghijklmnopqrstuvwxyz"];
    var numb = ["0123456789"];
    var spCh = [" !#$%&'()*+,-./:;<=>?@\^_`{|}~"];

    passOpt = [];
    passChoices = [];

    if (optionsObj.up) {
        passOpt = passOpt.concat(up);
    }

    if (optionsObj.low) {
        passOpt = passOpt.concat(low);
    }

    if (optionsObj.numb) {
        passOpt = passOpt.concat(numb);
    }

    if (optionsObj.spCh) {
        passOpt = passOpt.concat(spCh);
    }
   
    for (var p = 0; p < optionsObj.amount; p++) {
        var randomSelection = passOpt[Math.floor(Math.random() * passOpt.length)];

        passChoices.push(randomSelection);
    }

    showPassword(passChoices);
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