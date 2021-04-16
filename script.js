const computerSelection = computerPlay(); //here the function is called as it is placed into the variable computerSelection
const playerSelection = "rock";

function computerPlay(){ // this function chooses a random move for the computer
    let possMoves = ["Rock", "Paper", "Scissors"];
    let randomPick = possMoves [Math.floor(Math.random() * possMoves.length)];
    console.log(randomPick);
    return(randomPick);

}

/*function playRound(playerSelection, computerSelection){ //currently this function takes the return value of the computerPlay function as uses it as an argument to find out what the computer played
    if (computerSelection === "Scissors"){
        alert ("it's a scissors");
    } else if (computerSelection === "Paper"){
        alert ("it's a paper");
    } else {
        alert ("it's a rock");
    }

}*/

function playRound(playerSelection, computerSelection){ 
    if (playerSelection === "rock" && computerSelection === "Rock"){
        alert ("It's a draw!);
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        alert ("You lose!");
    } else if (playerSelection === "rock" && computerSelection === "Scissors"){
        alert ("You win!");
    }
}
playRound(playerSelection, computerSelection);


