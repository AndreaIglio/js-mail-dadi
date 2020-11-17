// EMAIL GAME


// Variabili con valore

var btnSearch = document.getElementById('btnsearch');

var userEmail = document.getElementById('useremail');
console.log(userEmail);


// Variabili con id associato all input
var userEmailInput = document.getElementById('userEmailInput');
console.log(userEmailInput);


// Array

var emailList = ["boolean@gmail.com", "birillo@gmail.com","storto@gmail.com"]

// Event Listener

btnSearch.addEventListener('click', 

    function () {

        var result = false;

        for (var i = 0 ; i < emailList.length; i++) {

            if (userEmail.value == emailList[i]) {

            result = true;


            }
        }

        if (result == true) {
            userEmailInput.innerHTML = ('You are good to go');
            console.log(userEmailInput);
        }
        else {
            userEmailInput.innerHTML = ('You cannot access');
        }

    }
)


// /EMAIL GAME



// DICE GAME

var playerDice = document.getElementById('player_dice');
var iaDice = document.getElementById('ia_dice');
var whoWin = document.getElementById('whowin');

var generateNumberPlayer = Math.floor(Math.random() * 6) + 1;
var generateNumberIa = Math.floor(Math.random() * 6) + 1;

playerDice.innerHTML = generateNumberPlayer;
iaDice.innerHTML = generateNumberIa;





if (generateNumberPlayer > generateNumberIa) {

    
    whoWin.innerHTML = ('Player won');

}

else if (generateNumberPlayer == generateNumberIa) {
    
    whoWin.innerHTML = ('Draw match');
}

else {
    whoWin.innerHTML = ('IA won');
}


// /DICE GAME