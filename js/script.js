'use strict';
// RUCH KOMPA
function playGame(playerInput) {

    function getMoveName(argMoveId){
        if(argMoveId == 1){ return 'kamien'; }
        else if (argMoveId == 2){ return 'papier'; }
        else if (argMoveId == 3){ return 'nozyce'; }

        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    function displayResult(argComputerMove, argPlayerMove){
        if(argComputerMove == 'kamien' && argPlayerMove == 'papier'){ return 'Ty wygrywasz!'; }
        else if(argComputerMove == 'kamien' && argPlayerMove == 'nozyce'){ return 'Ja wygrywam!'; }
        else if(argComputerMove == 'papier' && argPlayerMove == 'nozyce'){ return 'Ty wygrywasz!'; }
        else if(argComputerMove == 'papier' && argPlayerMove == 'kamien'){ return 'Ja wygrywam!';}
        else if(argComputerMove =='nozyce' && argPlayerMove == 'kamien'){ return 'Ty wygrywasz!'; }
        else if(argComputerMove == 'nozyce' && argPlayerMove == 'papier'){ return 'Ja wygrywam!'; }
        else if(argComputerMove == argPlayerMove){ return 'Remis!'; }
        else if(argPlayerMove == 'nieznany ruch'){ return 'nieznany ruch'; }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let argComputerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + argComputerMove);

    // RUCH GRACZA

    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    let argPlayerMove = getMoveName(playerInput);

    /*
    if(playerInput == '1'){ playerMove = 'kamien'; }
    else if(playerInput == '2'){ playerMove = 'papier'; }
    else if(playerInput == '3'){ playerMove = 'nozyce'; }
    */
    printMessage('Twój ruch to: ' + argPlayerMove);

    // WYNIK GRY

    let result = displayResult(argComputerMove, argPlayerMove);

    /*
    function displayResult(argComputerMove, argPlayerMove){
        console.log(displayResult)
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        if(
            (argComputerMove == 'kamien' && argPlayerMove == 'papier') ||
            (argComputerMove == 'papier' && argPlayerMove == 'nozyce') ||
            (argComputerMove == 'nozyce' && argPlayerMove == 'kamien')) {

            return 'Ty wygrywasz!';
            }
            else if(argComputerMove == argPlayerMove) return 'Remis!';
            else {

            return 'Ja wygrywam!';
        }
    }
    */

    printMessage('Wynik: ' + result);
}

//USUWANIE KOMUNIKATÓW

clearMessages();

// BUTTONY

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
});