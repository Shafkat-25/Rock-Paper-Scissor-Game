let useScore=0;
let computerScore=0; 


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usermsg = document.querySelector("#YourChoice");
const compmsg = document.querySelector("#ComputerChoice");
// const body = document.querySelector("body");

const genCompChoice = () => {
    const options=["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); //genertaes random number between (0-3)
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.textContent="Draw. Play Again!";
    msg.style.backgroundColor = "#081b30";
}

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        useScore++;
        userScorePara.innerText = useScore;
        console.log("You Won!");
        msg.textContent=`You Won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        compScorePara.innerText = computerScore;
        console.log("You Lost!");
        msg.textContent=`You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    usermsg.innerText=`Your Choice:  ${userChoice}`;

    //generate computer choice  --> modular
    const compChoice = genCompChoice();
    compmsg.innerText=`Computer Choice: ${compChoice}`;
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        //
        drawGame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userwin = compChoice ==="paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userwin = compChoice ==="scissors" ? false : true;

        }else {
            //rock, paper
            userwin = compChoice === "rock"? false: true;

        }
        showWinner(userwin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});