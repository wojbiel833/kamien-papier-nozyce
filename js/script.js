
// RUCH KOMPA
function getMoveName(argMoveId){
    if(argMoveId == 1){ return 'kamień'; }
    else if (argMoveId == 2){ return 'papier'; }
    else if (argMoveId == 3){ return 'nożyce'; }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + argComputerMove);

// RUCH GRACZA

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
/*
function displayResult(argComputerMove, argPlayerMove){
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


let result = displayResult(argComputerMove, argPlayerMove);
   printMessage('Wynik: ' + result);


