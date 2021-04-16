const computerSelection = computerPlay(); //here the function is called as it is placed into the variable computerSelection


function computerPlay(){ // this function chooses a random move for the computer
    let possMoves = ["Rock", "Paper", "Scissors"];
    let randomPick = possMoves [Math.floor(Math.random() * possMoves.length)];
    console.log(randomPick);
    return(randomPick);

}

function playRound(playerSelection, computerSelection){ 
    if (playerSelection === "rock" && computerSelection === "Rock"){
        alert ("It's a draw!");
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        alert ("You lose!");
    } else if (playerSelection === "rock" && computerSelection === "Scissors"){
        alert ("You win!");
    }
}

const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
playRound(playerSelection, computerSelection);


