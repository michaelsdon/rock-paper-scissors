
// Create List of Choices
const CHOICES = ["rock", "paper", "scissors"];
let score = {
  comp: 0,
  user: 0
};


let buttons = document.querySelectorAll('.choice');
buttons.forEach(element => element.addEventListener('click', playRound));

function getComputerChoice () {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function userChoice(e) {
  return e.target.id;
}

function playRound(event) {

  let computerChoice = getComputerChoice();
  let userChoice = event.target.id;

  const gameStatus = document.querySelector('#game-status');

  if (computerChoice === userChoice) {
    gameStatus.textContent = "Draw";
    return 0;
  } else if (computerChoice === "rock") {
    if (userChoice === 'scissors') {
      gameStatus.textContent = `You Lose! ${computerChoice} beats ${userChoice}`
      score.comp += 1;
    } else {
      gameStatus.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
      score.user += 1;
    }
  } else if (computerChoice === 'scissors') {
    if (userChoice === 'paper') {
      gameStatus.textContent = `You Lose! ${computerChoice} beats ${userChoice}`
      score.comp += 1;
    } else {
      gameStatus.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
      score.user += 1;
    }
  } else {
    if (userChoice === 'rock') {
      gameStatus.textContent = `You Lose! ${computerChoice} beats ${userChoice}`
      score.comp += 1;
    } else {
      gameStatus.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
      score.user += 1;
    };
  };

  renderGame();
};

function renderGame() {

  const headerDiv = document.querySelector('#game-score');
  const gameStatus = document.querySelector('#game-status');

  if (score.user < 5 && score.comp < 5) {
    headerDiv.textContent = `Current Score: Computer: ${score.comp} User: ${score.user}`;
  } else {
    if (score.user > score.comp) {
      gameStatus.textContent = `Game Over: User wins!`
      headerDiv.textContent = `Final Score: ${score.user}-${score.comp}`;
    } else {
      gameStatus.textContent = `Game Over: Computer wins!`
      headerDiv.textContent = `Computer won - Final Score: ${score.comp}-${score.user}`;
    };

    // Reset the score if match is complete
    score.user = 0;
    score.comp = 0;
  };
  
};

renderGame();










// // Create List of Choices
// const CHOICES = ["rock", "paper", "scissors"]

// // Computer Selects Random Choice
// function getComputerChoice () {
//   return CHOICES[Math.floor(Math.random() * CHOICES.length)];
// }

// // User inputs their choice
// function getUserChoice () {
  
//   while (true) {
//     let userChoice = prompt("Select either: Rock, Paper, or Scissors");
    
//     if (CHOICES.indexOf(userChoice.toLowerCase()) > -1) {
//       return userChoice;
//     };
//     console.log("Incorrect input was recieved, please try again.")
//   };
// };

// function playRound(computerChoice, userChoice) {

//   if (computerChoice === userChoice) {
//     console.log("Draw");
//     return 0;
//   } else if (computerChoice === "rock") {
//     if (userChoice === 'scissors') {
//       console.log(`You Lose! ${computerChoice} beats ${userChoice}`);
//       return -1;
//     } else {
//       console.log(`You Win! ${userChoice} beats ${computerChoice}`);
//       return 1;
//     }
//   } else if (computerChoice === 'scissors') {
//     if (userChoice === 'paper') {
//       console.log(`You Lose! ${computerChoice} beats ${userChoice}`);
//       return -1;
//     } else {
//       console.log(`You Win! ${userChoice} beats ${computerChoice}`);
//       return 1;
//     }
//   } else {
//     if (userChoice === 'rock') {
//       console.log(`You Lose! ${computerChoice} beats ${userChoice}`);
//       return -1;
//     } else {
//       console.log(`You Win! ${userChoice} beats ${computerChoice}`);
//       return 1;
//     };
//   };
// };

// function game() {
//   let score = {
//     user: 0,
//     comp: 0
//   };

//   while (score.user < 3 && score.comp < 3) {
//     let computerChoice = getComputerChoice();
//     let userChoice = getUserChoice();

//     result = playRound(computerChoice, userChoice);

//     if (result === 1) {
//       score.user++;
//     } else if (result === -1) {
//       score.comp++;
//     };
//   };

//   if (score.user > score.comp) {
//     console.log(`User won - Final Score: ${score.user}-${score.comp}`);
//   } else {
//     console.log(`Computer won - Final Score: ${score.comp}-${score.user}`);
//   };
// };


// game();