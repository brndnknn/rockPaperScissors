//rock paper scissors game
//Brando Keenan
// 6/24/2021



// random selector for computer
function computerPlay(){
    let randHand = Math.random() * 3;
    if (randHand > 2){
        return 2;
    }
    else if( randHand > 1){
        return 1;
    }
    else {
        return 0;
    }
}



function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    let winner;
    if(playerSelection == computerSelection){
        winner = 0;
        console.log('tie try again')
        return winner;
    }
    else{
        
        //first part decides comment
        let result = playerSelection + computerSelection;
        let comment;
        console.log(result);
        switch (result) {
            case 3:
                comment = "Paper Covers Rock!";
                break;
            case 2:
                comment = "Rock Smashes Scissors!";
                break;
            case 1:
                comment = "Scissors cuts Paper!";
                break;
        }
        //second part decides winner
        result = playerSelection - computerSelection;
        let winner;
        if (result == 2 || result == -1){
            winner = 1;
            comment = 'You win! ' + comment;
        }
        else{
            winner = -1;
            comment = "You lose! " + comment;
        }
        console.log(comment);
        return winner;
    }
  }

  // Score keeping and displaying variables

let playerScore = 0;
let computerScore = 0;
let compLastMove = document.getElementById('compLastMove');
let playerLastMove = document.getElementById('playerLastMove');
let scoreBoard = document.getElementById('scoreBoard');
let playerPoints = document.getElementById('playerPoints');
let computerPoints = document.getElementById('computerPoints');



// function to translate code for rock paper scissors to text
function numToText(number){
    let text = '';
    switch (number) {
        case 2:
            text = "rock";
            break;
        case 1:
            text = "paper";
            break;
        case 0:
            text = "scissors";
        default:
            break;
    }
    return text;
}

    
function updateScore(playerChoice){
    console.log(playerChoice);
    let computerChoice = computerPlay();
      
    let roundWinner = playRound(playerChoice, computerChoice);
    switch (roundWinner) {
        case 0:
            console.log("tie");
            break;
        case 1:
            console.log("Player wins");
            playerScore++;
            break;
        case -1:
            console.log("Computer Wins");
            computerScore++;
            break;
        default:
            break;
    }
    compLastMove.textContent = "Computer's Last Move: " + numToText(computerChoice);
    playerLastMove.textContent = "Player's Last Move: " + numToText(playerChoice);
    playerPoints.textContent = "Player: " + playerScore;
    computerPoints.textContent = "Computer: " + computerScore;
    
    if (playerScore >= 5){
        console.log("player Wins!");
        main.hidden = true;
        resetBtn.textContent = 'You Win! Play Again?'

    } else if (computerScore >= 5){
        console.log("computer wins!");
        main.hidden = true;
        resetBtn.textContent = 'You Lose! Play Again?'

    }
    
}

let resetBtn = document.getElementById('resetGame');
resetBtn.addEventListener('click', resetGame);

function resetGame(){
    console.log('reset pressed');
    compLastMove.textContent = '';
    playerLastMove.textContent = '';
    playerPoints.textContent = ''; 
    computerPoints.textContent = '';
    resetBtn.textContent = "Play Again!"
    playerScore = 0;
    computerScore = 0;
    main.hidden = false;
}

let btns = Array.from(document.getElementsByTagName('button'));

btns.forEach((button) => {
    button.addEventListener('click', () => {
      updateScore(Number(button.id));
    });
  });