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

        for (var i = 0 ; i < emailList.length; i++) {

            if (userEmail.value == emailList[i]) {

            userEmailInput.innerHTML = ('You are good to go');
            console.log(userEmailInput);

            }
        }
    }
)


// /EMAIL GAME



// DICE GAME



// /DICE GAME