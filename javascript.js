let playerScore = 0;
let computerScore = 0;

function computerPlay(){ // Chooses a random move for the computer.
    let possMoves = ["Rock", "Paper", "Scissors"]; // Array containing the three possible moves
    let randomPick = possMoves [Math.floor(Math.random() * possMoves.length)]; // Radomly selects one of the three moves
    //console.log(randomPick); //Logs the choice to console to check if it's working
    return(randomPick); // Returns the random choice to be stored in a variable when the function is called

}
function userPlay(){ // Prompts the player to make a choice
   return prompt("Rock, Paper or Scissors?").toLowerCase();
}

let computerSelection  = computerPlay;
let playerSelection = userPlay;

function playRound(playerSelection, computerSelection){ // Takes the variables containing the player and computer moves and figures out a winner.


    if (playerSelection === "rock" && computerSelection === "Rock"){
        return "It's a draw!";   
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore = (computerScore + 1);
        return "You lose! Paper covers rock.";    
    } else if (playerSelection === "rock" && computerSelection === "Scissors"){
        playerScore = (playerScore + 1);
        return "You win! Rock breaks scissors.";
    }
      else if (playerSelection === "scissors" && computerSelection === "Rock"){
        computerScore = (computerScore + 1);
        return "You lose! Rock breaks scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore = (playerScore + 1);
        return "You win! Scissors cut paper.";       
    } else if (playerSelection === "scissors" && computerSelection === "Scissors"){
        return "It's a draw!";
    }
    else if (playerSelection === "paper" && computerSelection === "Rock"){
        playerScore = (playerScore + 1);
        return "You win! Paper covers rock."; 
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        return "It's a draw!";
    } else if (playerSelection === "paper" && computerSelection === "Scissors"){
        computerScore = (computerScore + 1);
        return "You lose! Scissors cut paper.";
        
    }

}

function whoWins(){
    if (playerScore > computerScore){
        console.log("You win! You got " + playerScore + " points and the computer got " + computerScore + " points.");
    } else if (playerScore < computerScore){
        console.log("You lose :( You got " + playerScore + " points and the computer got " + computerScore + " points.");
    } else {
        console.log("It's a draw... You got " + playerScore + " points and the computer got " + computerScore + " points.")
    }

}

function game(){
    //for(i = 0; i < 5; i++){
        computerSelection = computerPlay();
        playerSelection = userPlay()
        console.log(playRound(playerSelection, computerSelection));
    
    whoWins();
  
   
}

game();






