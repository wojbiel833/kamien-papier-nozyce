"use strict";
{
  const results = document.getElementById("results");
  const pointsPlayer1 = document.getElementById("player-1");
  const pointsPlayer2 = document.getElementById("player-2");
  const computerImg = document.querySelector(".move-2");
  const playerImg = document.querySelector(".move-1");

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

    console.log("Twój ruch to: " + argPlayerMove);

    // WYNIK GRY

    const result = displayResult(argComputerMove, argPlayerMove);

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
        }
      } else if (argComputerMove == argPlayerMove) {
        results.textContent = "Remis!";
      } else {
        computerPoints = computerPoints + 1;
        results.textContent = "Ja wygrywam!";
        document.getElementById("player-2").textContent = computerPoints;
        if (computerPoints < 3) {
          document.getElementById("player-2").textContent = computerPoints;
        } else if ((computerPoints = 3)) {
          document.getElementById("player-2").textContent = "Wygrałeś";
        }
      }
    }
    // sprawdz, czy gra powinna sie skonczyc
    compareResults();
  }

  //USUWANIE KOMUNIKATÓW

  clearMessages();

  // BUTTONY

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
    playerImg.src = `images/reka-kamien-l.jpg`;
  });
  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
    playerImg.src = `images/reka-papier-l.jpg`;
  });
  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
      playerImg.src = `images/reka-nozyce-l.jpg`;
    });
}
