//rock paper scissors game
//Brando Keenan
// 6/24/2021

/* 

Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection 
- and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
Important note: you want to return the results of this function call, not console.log() them. To test this function console.log the results:

function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
You have not officially learned how to “loop” over code to repeat function calls… 
if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. 
If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.*/

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
        switch (result) {
            case 3:
                comment = "Paper Covers Rock!";
                break;
            case 2:
                comment = "Rock Smashes Scissors!";
                break;
            default:
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
      let playerScore = 0;
      let computerScore = 0;
    
function updateScore(playerChoice){
    console.log(playerChoice)

}


let btns = Array.from(document.getElementsByTagName('button'));

btns.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      updateScore(button.id);
    });
  });