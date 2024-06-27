let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";
let computerSrc = "";

const hmnScore = document.querySelector("#hmnScore");
  hmnScore.textContent = `${humanScore}`;


const cpuScore = document.querySelector("#cpuScore");
  cpuScore.textContent = `${computerScore}`;

  const announcer = document.querySelector("#announcer")
    announcer.textContent = "FIGHT";


  function getComputerChoice(computerChoice) {
    computerChoice = Math.floor(Math.random() * 3 +1);
    if (computerChoice < 2) {
      computerChoice = "rock";
      computerSrc = "img/rock_cpu.png";
    } else if (computerChoice > 2) {
      computerChoice = "paper";
      computerSrc = "img/paper_cpu.png";
    }else {
      computerChoice = "scissors";
      computerSrc = "img/scissors_cpu.png";
    };
    return computerChoice;
  }



  const rockButton = document.querySelector("#rock").addEventListener("click", rock);
  function rock(){
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    document.getElementById("humanPick").src = "img/rock_human.png";
    playRound(humanChoice, computerChoice);
    document.getElementById("computerPick").src = `${computerSrc}`;
    hmnScore.textContent = `${humanScore}`;
    cpuScore.textContent = `${computerScore}`

  }

const paperButton = document.querySelector("#paper").addEventListener("click", paper);
  function paper(){
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    document.getElementById("humanPick").src = "img/paper_human.png";
    playRound(humanChoice, computerChoice);
    document.getElementById("computerPick").src = `${computerSrc}`;
    hmnScore.textContent = `${humanScore}`;
    cpuScore.textContent = `${computerScore}`
  }
  

const scissorsButton = document.querySelector("#scissors").addEventListener("click", scissors);
  function scissors(){
    humanChoice = "scissors";
    computerChoice = getComputerChoice();
    document.getElementById("humanPick").src = "img/scissors_human.png";
    playRound(humanChoice, computerChoice);
    document.getElementById("computerPick").src = `${computerSrc}`;
    hmnScore.textContent = `${humanScore}`;
    cpuScore.textContent = `${computerScore}`
  }

  function playRound(humanChoice, computerChoice) {
    // computerChoice = getComputerChoice(computerChoice);

    if (humanChoice == "rock" && computerChoice == "scissors"
      || humanChoice == "paper" && computerChoice == "rock"
      || humanChoice == "scissors" && computerChoice == "paper"){
        announcer.textContent = "WINNER";
        humanScore += 1;
      } else if (humanChoice === computerChoice){
        announcer.textContent = "DRAW";
      } else {
        announcer.textContent = "LOSER";
        computerScore += 1;
      }
  }

