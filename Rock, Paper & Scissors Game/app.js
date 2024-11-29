let userScore = 0;
let compScore = 0;


let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    let option = ["rock", "paper", "scissors"];
     const randomIdx = Math.floor(Math.random ()*3);
     return option[randomIdx];
}

const drawGame = () =>{
    console.log("the game was draw and try again");
      msg.innerText = " the game was draw, try again";
      msg.style.backgroundColor = "black";
}

let showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin) {
        
        msg.innerText = `you win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
        
    } else {
        console.log("you lost the game")
          msg.innerText = `you lost ${compChoice} beats ${userChoice}`;
          msg.style.backgroundColor = "red";
          compScore++;
          compScorePara.innerText = compScore;
        
    }

}

const playGame =(userChoice) =>{
    console.log("user choice is :", userChoice);
    const compChoice = genCompChoice();
    console.log("the comp choice is :", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    }

     else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors"?false :true;
        } else{
            userWin = compChoice ==="rock"? false :true;

        }
        showWinner(userWin, userChoice, compChoice);
    }

}


rock.addEventListener("click" , () =>{
    let userChoice = rock.getAttribute("id");
    console.log("the rock was clicked",userChoice);
    playGame(userChoice);
});

paper.addEventListener("click" , () =>{
    let userChoice = paper.getAttribute("id");
    console.log("the paper was clicked",userChoice);
    playGame(userChoice);
});

scissors.addEventListener("click" , () =>{
    let userChoice = scissors.getAttribute("id");
    console.log("the scissors was clicked",userChoice);
    playGame(userChoice);
});