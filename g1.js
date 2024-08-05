let us = 0;
let cs = 0;

const userp = document.querySelector("#user-score");
const compp = document.querySelector("#comp-score");
let msgpara = document.querySelector("#move");
const choices = document.querySelectorAll(".choice");
const gencompChoice = () => {
  const opt = ["rock", "paper", "scissor"];
  const randInd = Math.floor(Math.random() * 3);
  return opt[randInd];
};
const playGame = (userChoice) => {
  const compChoice = gencompChoice();
  console.log("User Choice ", userChoice);
  console.log("Computer Choice", compChoice);
  if (userChoice === compChoice) {
    console.log("Match is Draw");
    msgpara.innerText = "Match Draw";
    msgpara.style.backgroundColor = "rgb(9, 33, 53)";
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice === "scissor" ? true : false;
    } else if (userChoice == "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "paper" ? true : false;
    }

    if (userWin === true) {
      console.log("You have won");
      msgpara.innerText = `You won ${userChoice} beats ${compChoice}`;
      msgpara.style.backgroundColor = "green";
      us++;
      userp.innerText = us;
    } else {
      console.log("Computer has won");
      msgpara.innerText = `You lost ${compChoice} beats ${userChoice}`;
      msgpara.style.backgroundColor = "red";
      cs++;
      compp.innerText = cs;
    }
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
