//Changing Pages
{
  //Buttons
  const startGameBtn = document.querySelector(".start-game-btn");
  const aboutGameBtn = document.querySelector(".about-game-btn");
  const exitAboutBtn = document.querySelector(".exit-about-btn");
  const playAgainBtn = document.querySelector(".play-again-btn");
  const homescreenBtn = document.querySelector(".home-btn");
  //Sections
  const startPageSection = document.querySelector(".start-page");
  const gamePageSection = document.querySelector(".game-page");
  const gameOverSection = document.querySelector(".game-over");
  const aboutPageSection = document.querySelector(".about-and-credits");
  //Functions
  function startGame() {
    !startPageSection.classList.contains("hidden")
      ? startPageSection.classList.add("hidden")
      : null;
    !gameOverSection.classList.contains("hidden")
      ? gameOverSection.classList.add("hidden")
      : null;
    gamePageSection.classList.remove("hidden");
  }
  function showAboutSection() {
    startPageSection.classList.add("hidden");
    aboutPageSection.classList.remove("hidden");
  }
  function goHome() {
    !aboutPageSection.classList.contains("hidden")
      ? aboutPageSection.classList.add("hidden")
      : null;
    !gameOverSection.classList.contains("hidden")
      ? gameOverSection.classList.add("hidden")
      : null;
    startPageSection.classList.remove("hidden");
  }
  //Event Listeners
  startGameBtn.addEventListener("click", startGame);
  aboutGameBtn.addEventListener("click", showAboutSection);
  exitAboutBtn.addEventListener("click", goHome);
  playAgainBtn.addEventListener("click", startGame);
  homescreenBtn.addEventListener("click", goHome);
}

//Gameplay
//  Choice selection
//Buttons
const optionButtons = document.querySelectorAll(".option-btn");
console.log(optionButtons[0]);
console.log("space");
//Functions

function showModal(result) {
  let modal = document.querySelector(".modal");
  let userResult = document.querySelector(".result");
  if (result) {
    userResult.innerHTML = "Correct!";
    userResult.style.color = "green";
  } else {
    userResult.innerHTML = "Wrong!";
    userResult.style.color = "red";
  }
  modal.classList.remove("hidden");
}

function showAnswer(userChoice, correctChoice) {
  let num = 0;
  console.log(userChoice.innerHTML.toLowerCase());
  console.log(correctChoice);
  optionButtons.forEach((userChoice) => {
    userChoice.style.backgroundColor = "#e9dabd";
    userChoice.style.color = "#4c4027";
  });
  if (userChoice.innerHTML.toLowerCase() === correctChoice.toLowerCase()) {
    userChoice.style.backgroundColor = "green";
    userChoice.style.color = "#e9dabd";
    showModal(true);
  } else {
    optionButtons.forEach(() => {
      if (
        optionButtons[num].innerHTML.toLowerCase() ===
        correctChoice.toLowerCase()
      ) {
        optionButtons[num].style.backgroundColor = "green";
        optionButtons[num].style.color = "#e9dabd";
      }
      showModal(false);
      num += 1;
    });
    userChoice.style.backgroundColor = "red";
    userChoice.style.color = "#e9dabd";
  }
  //Each time:
  //    - after a moment the next bird appears
}

//      Optional:
//          - add bird sounds
//          - add bird facts to the pop up
//              - random fact about pictured bird if API can provide
//          -
//  Add event listeners
optionButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    showAnswer(button, "steller's jay");
  });
});
