let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const genComScore = document.querySelector("#comp-score");
const genUserScore = document.querySelector("#user-score");

const genCompChoice = ()=>{
    const option = ["scissors","rock","paper"];
    const randomIdx = Math.floor(Math.random()*3);
    return option[randomIdx];
}

const drawGame=()=>{
    console.log("Game was draw..");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor="#091540";

}

const showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin){
        userScore++;
        console.log("You Win !");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        genUserScore.innerText=userScore;
    }else{
        compScore++;
        console.log("You lose..");
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        genComScore.innerText=compScore;
    }

}

const playGame=(userChoice)=>{
    console.log("user Choice: "+userChoice);
    const compChoice=genCompChoice()
    console.log("comp choice: "+compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice)
    })
})