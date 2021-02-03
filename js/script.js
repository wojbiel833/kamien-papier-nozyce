"use strict";
{
  const points = document.querySelector(".points");

  //PORÓWNANIE WYNIKÓW
  let playerPoints = 0;
  let computerPoints = 0;

  function compareResults() {
    if (playerPoints === 3) printMessage("Wygrałeś!");
    else if (computerPoints === 3) printMessage("Przegrałeś!");
  }

  // RUCH KOMPA
  function playGame(playerInput) {
    function getMoveName(argMoveId) {
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
        return "Ty wygrywasz!";
      } else if (argComputerMove == "kamien" && argPlayerMove == "nozyce") {
        return "Ja wygrywam!";
      } else if (argComputerMove == "papier" && argPlayerMove == "nozyce") {
        return "Ty wygrywasz!";
      } else if (argComputerMove == "papier" && argPlayerMove == "kamien") {
        return "Ja wygrywam!";
      } else if (argComputerMove == "nozyce" && argPlayerMove == "kamien") {
        return "Ty wygrywasz!";
      } else if (argComputerMove == "nozyce" && argPlayerMove == "papier") {
        return "Ja wygrywam!";
      } else if (argComputerMove == argPlayerMove) {
        return "Remis!";
      } else if (argPlayerMove == "nieznany ruch") {
        return "nieznany ruch";
      }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    const argComputerMove = getMoveName(randomNumber);

    printMessage("Mój ruch to: " + argComputerMove);

    // RUCH GRACZA
    const argPlayerMove = getMoveName(playerInput);
    printMessage("Zagrałeś: " + argPlayerMove);

    // WYNIK GRY
    const result = displayResult(argComputerMove, argPlayerMove);

    function displayResult(argComputerMove, argPlayerMove) {
      if (
        (argComputerMove == "kamien" && argPlayerMove == "papier") ||
        (argComputerMove == "papier" && argPlayerMove == "nozyce") ||
        (argComputerMove == "nozyce" && argPlayerMove == "kamien")
      ) {
        playerPoints = playerPoints + 1;
        if (playerPoints < 3) {
          document.getElementById("player1").textContent = playerPoints;
        } else if ((playerPoints = 3)) {
          document.getElementById("player1").textContent = "Wygrałeś";
        }
        return "Ty wygrywasz!";
      } else if (argComputerMove == argPlayerMove) return "Remis!";
      else {
        computerPoints = computerPoints + 1;
        document.getElementById("player2").textContent = computerPoints;
        if (computerPoints < 3) {
          document.getElementById("player2").textContent = computerPoints;
        } else if ((computerPoints = 3)) {
          document.getElementById("player2").textContent = "Wygrałeś";
        }
        return "Ja wygrywam!";
      }
    }

    // ustalamy wynik i wypisujemy go w html-u
    printMessage(result);

    // sprawdz, czy gra powinna sie skonczyc
    compareResults();
  }

  //USUWANIE KOMUNIKATÓW
  clearMessages();

  // BUTTONY
  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });
  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });
  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });
}
