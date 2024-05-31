let userScore=0;
let compScore=0;
const choices =document.querySelectorAll(".choice");

const genCompChoice =()=>{
    const option=["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return option[ranIdx];
}
const drawGame =()=>{
    console.log("Game was draw");
    msg.innerText="Game Draw. Play Again!";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
}

let msg=document.querySelector(".msg");
let userScoreN=document.querySelector("#userScore");
let compScoreN=document.querySelector("#compScore");

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        userScore++;
        console.log("You Win");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
        userScoreN.innerText=userScore;
    }
    else{
        compScore++;
        console.log("You Loose");
        msg.innerText=`You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
        compScoreN.innerText=compScore;
    }
}
const playgame=(userChoice)=>{
    console.log("User choice= ",userChoice);
    //Generate computer choice ->
    const compChoice= genCompChoice ();
    console.log("Computer choice= ",compChoice);
    
    if(userChoice===compChoice){
        drawGame();}
        else{
            userWin=true;
            if(userChoice==="rock"){
                //paper,scissors;
                userWin= compChoice==="paper"?false:true;
            }
            else if (userChoice==="paper") {
                // rock, scissors;
                userWin= compChoice=="scissors"?false:true;
                
            } else {
                //rock,paper;
                userWin=compChoice==="rock"?false:true;
                
            }
            showWinner(userWin,userChoice,compChoice);

        }
}

 choices. forEach(choice => {
    choice. addEventListener("click",()=> {
        const userChoice =choice.getAttribute ("id");
       
        playgame(userChoice);
    });
    
});
