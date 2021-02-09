"use strict";

const results = document.getElementById("results");
const pointsPlayer1 = document.getElementById("player-1");
const pointsPlayer2 = document.getElementById("player-2");
const computerImg = document.querySelector(".move-2");
const playerImg = document.querySelector(".move-1");
const rock = document.getElementById("play-rock");
const paper = document.getElementById("play-paper");
const scissors = document.getElementById("play-scissors");
const reset = document.getElementById("reset");

//PORÓWNANIE WYNIKÓW
let playerPoints = 0;
let computerPoints = 0;

function compareResults() {
  if (playerPoints === 3) printMessage("Wygrałeś!");
  else if (computerPoints === 3) printMessage("Przegrałeś!");
}

// RUCH KOMPA
function playGame(playerInput) {
  function getCompMove(argMoveId) {
    if (argMoveId == 1) {
      computerImg.src = `images/reka-kamien-p.jpg`;
      return "kamien";
    } else if (argMoveId == 2) {
      computerImg.src = `images/reka-papier-p.jpg`;
      return "papier";
    } else if (argMoveId == 3) {
      computerImg.src = `images/reka-nozyce-p.jpg`;
      return "nozyce";
    }
    //OSZUKANIE
    // if (argMoveId == 1 || argMoveId == 2 || argMoveId == 3) {
    //   computerImg.src = `images/reka-nozyce-p.jpg`;
    //   return "nozyce";
    // }
  }
  function getPlayerMove(argMoveId) {
    if (argMoveId == 1) {
      return "kamien";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nozyce";
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
    if (argComputerMove == "kamien" && argPlayerMove == "papier") {
    } else if (argComputerMove == "kamien" && argPlayerMove == "nozyce") {
    } else if (argComputerMove == "papier" && argPlayerMove == "nozyce") {
    } else if (argComputerMove == "papier" && argPlayerMove == "kamien") {
    } else if (argComputerMove == "nozyce" && argPlayerMove == "kamien") {
    } else if (argComputerMove == "nozyce" && argPlayerMove == "papier") {
    } else if (argComputerMove == argPlayerMove) {
    } else if (argPlayerMove == "nieznany ruch") {
    }
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const argComputerMove = getCompMove(randomNumber);

  console.log("Mój ruch to: " + argComputerMove);

  const argPlayerMove = getPlayerMove(playerInput);
  //  LOSOWY RUCH GRACZA DO OSZUSTWA
  // const randomNumber2 = Math.floor(Math.random() * 3 + 1);
  // const argPlayerMove = getPlayerMove(randomNumber2);

  console.log("Twój ruch to: " + argPlayerMove);

  // WYNIK GRY
  function displayResult(argComputerMove, argPlayerMove) {
    if (
      (argComputerMove == "kamien" && argPlayerMove == "papier") ||
      (argComputerMove == "papier" && argPlayerMove == "nozyce") ||
      (argComputerMove == "nozyce" && argPlayerMove == "kamien")
    ) {
      playerPoints = playerPoints + 1;
      results.textContent = "Ty wygrywasz!";
      if (playerPoints < 3) {
        document.getElementById("player-1").textContent = playerPoints;
      } else if ((playerPoints = 3)) {
        document.getElementById("player-1").textContent = "Wygrałeś";
        rock.classList.add("none");
        paper.classList.add("none");
        scissors.classList.add("none");
      }
    } else if (argComputerMove == argPlayerMove) {
      results.textContent = "Remis!";
    } else {
      computerPoints = computerPoints + 1;
      results.textContent = "Ja wygrywam!";
      pointsPlayer2.textContent = computerPoints;
      if (computerPoints < 3) {
        pointsPlayer2.textContent = computerPoints;
      } else if ((computerPoints = 3)) {
        pointsPlayer2.textContent = "Wygrałem";
        rock.classList.add("none");
        paper.classList.add("none");
        scissors.classList.add("none");
      }
    }
  }
  displayResult(argComputerMove, argPlayerMove);

  // sprawdz, czy gra powinna sie skonczyc
  compareResults();
}

function resetGame() {
  playerPoints = 0;
  computerPoints = 0;
  document.getElementById("player-1").textContent = 0;
  document.getElementById("player-2").textContent = 0;
  rock.classList.remove("none");
  paper.classList.remove("none");
  scissors.classList.remove("none");
  computerImg.src = `images/reka-kamien-p.jpg`;
  playerImg.src = `images/reka-kamien-l.jpg`;
}

//USUWANIE KOMUNIKATÓW
clearMessages();

// BUTTONY
rock.addEventListener("click", function () {
  playGame(1);
  playerImg.src = `images/reka-kamien-l.jpg`;
});
paper.addEventListener("click", function () {
  playGame(2);
  playerImg.src = `images/reka-papier-l.jpg`;
});
scissors.addEventListener("click", function () {
  playGame(3);
  playerImg.src = `images/reka-nozyce-l.jpg`;
});
reset.addEventListener("click", resetGame);

//  PĘTLA DO OSZUSTWA
// for (let i = 1; i < 101; i++) {
//   playGame();
// }
