//Game State Variables
let highscore = 0;
let score = 0;
let currentCorrectAnswer;

//Pages
const startPageSection = document.querySelector(".start-page");
const gamePageSection = document.querySelector(".game-page");
const gameOverSection = document.querySelector(".game-over");
const aboutPageSection = document.querySelector(".about-and-credits");

//DOM Elements
const optionButtons = document.querySelectorAll(".option-btn");
const modal = document.querySelector(".modal");

//Buttons
const startGameBtn = document.querySelector(".start-game-btn");
const aboutGameBtn = document.querySelector(".about-game-btn");
const exitAboutBtn = document.querySelector(".exit-about-btn");
const playAgainBtn = document.querySelector(".play-again-btn");
const homescreenBtn = document.querySelector(".home-btn");
const nextBirdBtn = document.querySelector(".next-bird-btn");
const gameOverBtn = document.querySelector(".game-over-btn");

//Core Functions
optionButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    showAnswer(event.target, currentCorrectAnswer);
  });
});

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function displayBird(bird) {
  //Load bird image
  let birdImageElement = document.querySelector(".bird-img");
  birdImageElement.innerHTML = `<img src="${bird.image}" alt="${bird.alt}" id="${bird.name}" style="width:clamp(200px, 40vw, 320px); height:clamp(150px, 40vw, 240px)"/><figcaption class="bird-img-caption">${bird.imageCredit}</figcaption>`;

  //Populates the answer buttons
  let shuffledOptions = shuffleArray([...bird.options]);

  optionButtons.forEach((button, i) => {
    currentCorrectAnswer = bird.correctAnswer;
    button.style.color = "#4c4027";
    button.style.backgroundColor = "#e9dabd";
    button.innerHTML = shuffledOptions[i];
  });

  //Shuffle and populate tips
  const birdingTip = document.querySelector(".birding-tip");
  let shuffledTips = shuffleArray([...bird.tips]);
  birdingTip.innerHTML = shuffledTips[0];

  if (!modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
  }
}

function loadBird() {
  const randomNum = Math.floor(Math.random() * birdData.length);
  const currentBird = birdData[randomNum];
  currentCorrectAnswer = currentBird.correctAnswer;

  if (birdData.length === 1) {
    displayBird(currentBird);
    birdData.splice(randomNum, 1);
    return;
  }

  displayBird(currentBird);
  birdData.splice(randomNum, 1);
}

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
  const highscoreElement = document.querySelector(".highscore-element");
  const finalHighscoreElement = document.querySelector(
    ".final-highscore-element"
  );
  const mainHighscore = document.querySelector(".main-page-highscore-element");
  const scoreElement = document.querySelector(".score-counter-element");
  const finalScoreElement = document.querySelector(".final-score-element");

  optionButtons.forEach((button) => {
    button.style.backgroundColor = "#e9dabd";
    button.style.color = "#4c4027";
  });
  /////////
  const isCorrect = userChoice.innerHTML === correctChoice;

  if (isCorrect) {
    userChoice.style.backgroundColor = "green";
    userChoice.style.color = "#e9dabd";
    score += 1;
  } else {
    optionButtons.forEach(() => {
      if (optionButtons[num].innerHTML === correctChoice) {
        optionButtons[num].style.backgroundColor = "green";
        optionButtons[num].style.color = "#e9dabd";
      }
      num += 1;
    });
    userChoice.style.backgroundColor = "red";
    userChoice.style.color = "#e9dabd";
  }
  if (score > highscore) {
    highscore = score;
  }

  //Update scores
  highscoreElement.innerHTML = highscore;
  scoreElement.innerHTML = score;
  finalScoreElement.innerHTML = score;
  finalHighscoreElement.innerHTML = highscore;
  mainHighscore.innerHTML = highscore;

  //display modal
  if (birdData.length > 0) {
    showModal(isCorrect);
  } else {
    nextBirdBtn.classList.add("hidden");
    gameOverBtn.classList.remove("hidden");
    showModal(isCorrect);
  }
}

//Nav Functions
function startGame() {
  loadBird();
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

function resetGame() {
  const scoreElement = document.querySelector(".score-counter-element");
  score = 0;
  scoreElement.innerHTML = 0;
  nextBirdBtn.classList.remove("hidden");
  gameOverBtn.classList.add("hidden");
  birdData = structuredClone(resetBirdData);
}

function playAgain() {
  resetGame();
  startGame();
}

function endGame() {
  if (!modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
  }
  gameOverSection.classList.remove("hidden");
  gamePageSection.classList.add("hidden");
}

//Event Listeners
startGameBtn.addEventListener("click", startGame);
aboutGameBtn.addEventListener("click", showAboutSection);
exitAboutBtn.addEventListener("click", goHome);
playAgainBtn.addEventListener("click", playAgain);
homescreenBtn.addEventListener("click", goHome);
nextBirdBtn.addEventListener("click", loadBird);
gameOverBtn.addEventListener("click", endGame);
