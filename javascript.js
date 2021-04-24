let playerScore = 0;
let computerScore = 0;
let playerSelection;
let textBox = document.querySelector("#text");
let scoreCount = document.querySelector("#score");
let roundCount = 0;
let rockGone = document.getElementById("rock");
let paperGone = document.getElementById("paper");
let scissorsGone = document.getElementById("scissors");
let music = document.getElementById("song"); 


function playAudio() {
    music.play();
  }

  





function computerPlay(){
    let possMoves = ["Rock", "Paper", "Scissors"]; 
    let randomPick = possMoves [Math.floor(Math.random() * possMoves.length)]; 
    console.log(randomPick);
    playAudio();
    return(randomPick); 
}

function checkRound(){
    if (roundCount === 5 && playerScore > computerScore){
        textBox.textContent = "Game End";
        scoreCount.textContent = "You win";
        rockGone.remove();
        paperGone.remove();
        scissorsGone.remove();
    } else if (roundCount === 5 && playerScore < computerScore){
        textBox.textContent = "Game End";
        scoreCount.textContent = "You lose";
        rockGone.remove();
        paperGone.remove();
        scissorsGone.remove();
    } else if (roundCount === 5 && playerScore === computerScore){
        textBox.textContent = "Game End";
        scoreCount.textContent = "It's a draw";
        rockGone.remove();
        paperGone.remove();
        scissorsGone.remove();
    }
}
    
    


function playRound(playerSelection){ 

    computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "Rock"){
        roundCount++;
        textBox.textContent = "Round " + roundCount + " over. It's a draw: DOUBLE ROCK";
        scoreCount.textContent = "Your score: " + playerScore + " Opponent Score:" + computerScore;
        checkRound();
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore++;
        roundCount++;
        textBox.textContent = "Round " + roundCount + " over. You lose! PAPER COVERS ROCK";
        scoreCount.textContent = "Your score: " + playerScore + " Opponent Score:" + computerScore;
        checkRound();
    } else if (playerSelection === "rock" && computerSelection === "Scissors"){
        playerScore++;
        roundCount++;
        textBox.textContent = "Round " + roundCount + " over. You win! ROCK BREAKS SCISSORS";
        scoreCount.textContent = "Your score: " + playerScore + " Opponent Score:" + computerScore;
        checkRound();
    }
      else if (playerSelection === "scissors" && computerSelection === "Rock"){
        computerScore++;
        roundCount++;
        textBox.textContent = "Round " + roundCount + " over. You lose! ROCK BREAKS SCISSORS";
        scoreCount.textContent = "Your score: " + playerScore + " Opponent Score:" + computerScore;
        checkRound();
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++;
        roundCount++;
        textBox.textContent = "Round " + roundCount + " over. You win! SCISSORS CUT PAPER";
        scoreCount.textContent = "Your score: " + playerScore + " Opponent Score:" + computerScore;
        checkRound();
    } else if (playerSelection === "scissors" && computerSelection === "Scissors"){
        roundCount++;
        textBox.textContent = "Round " + roundCount + " over. It's a draw: DOUBLE SCISSORS";
        scoreCount.textContent = "Your score: " + playerScore + " Opponent Score:" + computerScore;
        checkRound();
    }
    else if (playerSelection === "paper" && computerSelection === "Rock"){
        playerScore++;
        roundCount++;
        textBox.textContent = "Round " + roundCount + " over. You win! PAPER COVERS ROCK";
        scoreCount.textContent = "Your score: " + playerScore + " Opponent Score:" + computerScore;
        checkRound();
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        roundCount++;
        textBox.textContent = "Round " + roundCount + " over. It's a draw: DOUBLE PAPER";
        scoreCount.textContent = "Your score: " + playerScore + " Opponent Score:" + computerScore;
        checkRound();
    } else if (playerSelection === "paper" && computerSelection === "Scissors"){
        computerScore++;
        roundCount++;
        textBox.textContent = "Round " + roundCount + " over. You lose! SCISSORS CUT PAPER";
        scoreCount.textContent = "Your score: " + playerScore + " Opponent Score:" + computerScore;
        checkRound();
        
    }

}

const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

rockButton.addEventListener("click", e => {
    playRound("rock");
})
paperButton.addEventListener("click", e => {
    playRound("paper");
})
scissorsButton.addEventListener("click", e => {
    playRound("scissors");
})






