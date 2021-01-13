'use strict';
// RUCH KOMPA
console.log('yyyy');
function getMoveName(argMoveId){
    console.log('yyyy1');
    if(argMoveId == 1){ return 'kamien'; }
    else if (argMoveId == 2){ return 'papier'; }
    else if (argMoveId == 3){ return 'nozyce'; }
    console.log('yyyy2');
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
  
function displayResult(argComputerMove, argPlayerMove){
    console.log('yyyy8');
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

console.log('Wylosowana liczba to: ' + randomNumber);
console.log('yyyy3');
let argComputerMove = getMoveName(randomNumber);
console.log(argComputerMove)
console.log('yyyy4');
printMessage('Mój ruch to: ' + argComputerMove);

// RUCH GRACZA
console.log('yyyy5');
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);
console.log(argPlayerMove)
/*
if(playerInput == '1'){ playerMove = 'kamien'; }
else if(playerInput == '2'){ playerMove = 'papier'; }
else if(playerInput == '3'){ playerMove = 'nozyce'; }
*/
printMessage('Twój ruch to: ' + argPlayerMove);

// WYNIK GRY
console.log('yyyy6');
let result = displayResult(argComputerMove, argPlayerMove);
console.log('yyyy7');

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
console.log('yyyy9');

   printMessage('Wynik: ' + result);

   console.log('yyyy10');
