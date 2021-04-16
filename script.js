const computerSelection = computerPlay(); //here the function is called as it is placed into the variable computerSelection

let draw = 0
let win = 0
let lose = 0

function computerPlay(){ // this function chooses a random move for the computer
    let possMoves = ["Rock", "Paper", "Scissors"];
    let randomPick = possMoves [Math.floor(Math.random() * possMoves.length)];
    console.log(randomPick);
    return(randomPick);

}

function playRound(playerSelection, computerSelection){
   
    
    if (playerSelection === "rock" && computerSelection === "Rock"){
        draw = (draw + 1);
        alert ("It's a draw!");   
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        lose = (lose + 1);
        alert ("You lose! Paper covers rock.");    
    } else if (playerSelection === "rock" && computerSelection === "Scissors"){
        win = (win + 1);
        alert ("You win! Rock breaks scissors.");
    }
      else if (playerSelection === "scissors" && computerSelection === "Rock"){
        lose = (lose + 1);
        alert ("You lose! Rock breaks scissors.");
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        win = (win + 1);
        alert ("You win! Scissors cut paper.");       
    } else if (playerSelection === "scissors" && computerSelection === "Scissors"){
        draw = (draw + 1);
        alert ("It's a draw!");
    }
    else if (playerSelection === "paper" && computerSelection === "Rock"){
        win = (win + 1);
        alert ("You win! Paper covers rock."); 
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        draw = (draw + 1);
        alert ("It's a draw!");
    } else if (playerSelection === "paper" && computerSelection === "Scissors"){
        lose = (lose + 1);
        alert ("You lose! Scissors cut paper.");
        
    }
}

const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
playRound(playerSelection, computerSelection);


