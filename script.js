
let draw = 0
let win = 0
let lose = 0

function computerPlay(){ // this function chooses a random move for the computer
    let possMoves = ["Rock", "Paper", "Scissors"];
    let randomPick = possMoves [Math.floor(Math.random() * possMoves.length)];
    console.log(randomPick);
    return(randomPick);

}

function playRound(playerSelection, computerSelection){ //the variables playerSelection and computerSelection are used as arguments for the function. based on the outcome, the win/lose/draw variables are changed to get the current score
    
    if (playerSelection === "rock" && computerSelection === "Rock"){
        draw = (draw + 1);
        alert ("It's a draw! You currently have " + win + " win " + draw + " draw, and " + lose + " loss") ;   
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        lose = (lose + 1);
        alert ("You lose! Paper covers rock. You currently have " + win + " win " + draw + " draw, and " + lose + " loss");    
    } else if (playerSelection === "rock" && computerSelection === "Scissors"){
        win = (win + 1);
        alert ("You win! Rock breaks scissors. You currently have " + win + " win " + draw + " draw, and " + lose + " loss");
    }
      else if (playerSelection === "scissors" && computerSelection === "Rock"){
        lose = (lose + 1);
        alert ("You lose! Rock breaks scissors. You currently have " + win + " win " + draw + " draw, and " + lose + " loss");
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        win = (win + 1);
        alert ("You win! Scissors cut paper. You currently have " + win + " win " + draw + " draw, and " + lose + " loss");       
    } else if (playerSelection === "scissors" && computerSelection === "Scissors"){
        draw = (draw + 1);
        alert ("It's a draw! You currently have " + win + " win " + draw + " draw, and " + lose + " loss");
    }
    else if (playerSelection === "paper" && computerSelection === "Rock"){
        win = (win + 1);
        alert ("You win! Paper covers rock. You currently have " + win + " win " + draw + " draw, and " + lose + " loss"); 
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        draw = (draw + 1);
        alert ("It's a draw! You currently have " + win + " win " + draw + " draw, and " + lose + " loss");
    } else if (playerSelection === "paper" && computerSelection === "Scissors"){
        lose = (lose + 1);
        alert ("You lose! Scissors cut paper. You currently have " + win + " win " + draw + " draw, and " + lose + " loss");
        
    }
}

const computerSelection = computerPlay();  // the function computerPlay is called and its return value is placed into the variable computerSelection
const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase(); // the player is prompted to type either r/p/s and their input is made lowercase and put into the variable playerselection
playRound(playerSelection, computerSelection);

function game(){
    
}


