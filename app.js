const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userScoreNode=document.querySelector("#user-score");
const compScoreNode=document.querySelector("#comp-score");

let userScore=0;
let CompScores=0;

const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const ranIndex=Math.floor(Math.random()*3);
    return options[ranIndex];
}

const drawGame=()=>{
    msg.innerText="Match Draw, Play again!"
    msg.style.backgroundColor="#081b31";
}

const showWinner = (userWin) =>{
    if(userWin){
        msg.style.backgroundColor="green"
        msg.innerText="You Win!"
        userScoreNode.innerText=++userScore;
    }else{
        msg.style.backgroundColor="red"
        msg.innerText="You Lose!"
        compScoreNode.innerText=++CompScores;
    }
}

const playGame=(userChoice)=>{
    console.log("user choice",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false:true;
        }else if(userChoice=="paper"){
            userWin = compChoice === "scissors" ? false:true;
        }else{
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})