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
  birdImageElement.innerHTML = `<img src="${bird.image}" alt="${bird.alt}" id="${bird.name}" style="width:clamp(200px, 40vw, 320px); height:auto"/>`;

  //Populates the answer buttons
  let shuffledOptions = shuffleArray([...bird.options]);
  optionButtons.forEach((button, i) => {
    currentCorrectAnswer = bird.correctAnswer;
    button.style.color = "#4c4027";
    button.style.backgroundColor = "#e9dabd";
    button.innerHTML = shuffledOptions[i];
  });
  //Update the birding tip
  const birdingTip = document.querySelector(".birding-tip");
  birdingTip.innerHTML = bird.tips[0];

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
  birdData = [
    {
      name: "stellers-jay",
      image: "assets/bird-pics/stellers-jay.jfif",
      correctAnswer: "STELLER'S JAY",
      options: [
        "BLUE JAY",
        "STELLER'S JAY",
        "NORTHERN CARDINAL",
        "EURASIAN MAGPIE",
      ],
      tips: [
        "Dark blue and black plumge with a crest",
        "Small spots on forehead and near eyes",
        "Broad, rounded wings",
        "A harsh 'shack, shack, shack' sound",
      ],
      alt: "Steller's jay perched on a tree branch",
    },
    {
      name: "brown-headed-cowbird",
      image: "assets/bird-pics/brown-headed-cowbird.jfif",
      correctAnswer: "BROWN-HEADED COWBIRD",
      options: [
        "BROWN-HEADED COWBIRD",
        "BREWER'S BLACKBIRD",
        "COMMON GRACKLE",
        "BRONZED COWBIRD",
      ],
      tips: ["Males have a glossy brown head contrasting with a black body"],
      alt: "Brown-headed cowbird",
    },
    {
      name: "coopers-hawk",
      image: "assets/bird-pics/coopers-hawk.jfif",
      correctAnswer: "COOPER'S HAWK",
      options: [
        "COOPER'S HAWK",
        "SHARP-SHINNED HAWK",
        "PEREGRINE FALCOLN",
        "AMERICAN GOSHAWK",
      ],
      tips: [
        "Look for the rounded tail and orange eyes—larger than a Sharp-shinned Hawk",
      ],

      alt: "Cooper's Hawk",
    },
    {
      name: "dark-eyed-junco",
      image: "assets/bird-pics/dark-eyed-junco",
      correctAnswer: "DARK-EYED JUNCO",
      options: [
        "BLACK-CAPPED CHICKADEE",
        "DARK-EYED JUNCO",
        "BLACK PHOEBE",
        "SPOTTED TOWHEE",
      ],
      tips: ["Flashes of white outer tail feathers when it flies"],
      alt: "Dark-eyed junco",
    },
    {
      name: "great-blue-heron",
      image: "assets/bird-pics/great-blue-heron.jfif",
      correctAnswer: "GREAT BLUE HERON",
      options: [
        "GREAT BLUE HERON",
        "LITTLE BLUE HERON",
        "TRICOLORED HERON",
        "NIGHT HERON",
      ],
      tips: [
        "Huge wading bird with a long neck and dagger-like bill; often seen still as a statue",
      ],
      alt: "Great blue heron",
    },
    {
      name: "northern-cardinal",
      image: "assets/bird-pics/northern-cardinal.jfif",
      correctAnswer: "NORTHERN CARDINAL",
      options: [
        "NORTHERN CARDINAL",
        "SUMMER TANAGER",
        "SCARLET TANAGER",
        "VERMILION CARDINAL",
      ],
      tips: [
        "Often seen on the ground, with a spotted belly and a black crescent on the chest",
      ],
      alt: "Northern cardinal",
    },
    {
      name: "northern-flicker",
      image: "assets/bird-pics/northern-flicker.jfif",
      correctAnswer: "NORTHERN FLICKER",
      options: [
        "PILEATED WOODPECKER",
        "GILDED FLICKER",
        "NORTHERN FLICKER",
        "GILA WOODPECKER",
      ],
      tips: [
        "Black bars on the back and a white rump that flashes as it flies",
      ],
      alt: "Norther flicker",
    },
    {
      name: "osprey",
      image: "assets/bird-pics/osprey.jfif",
      correctAnswer: "OSPREY",
      options: ["OSPREY", "RED-TAILED HAWK", "BALD EAGLE", "GOLDEN EAGLE"],
      tips: [
        "Dark brown back with white underparts and a distinctive black eye stripe",
      ],
      alt: "Osprey soaring over body of water",
    },
    {
      name: "sandwich-tern",
      image: "assets/bird-pics/sandwich-tern.jfif",
      correctAnswer: "SANDWICH TERN",
      options: ["COMMON TERN", "ROYAL TERN", "ELEGANT TERN", "SANDWICH TERN"],
      tips: [
        "Black cap and a long black bill with a yellow tip; often seen in coastal areas",
      ],
      alt: "Sandwich tern",
    },
    {
      name: "scissor-tailed-flycatcher",
      image: "assets/bird-pics/scissor-tailed-flycatcher.jfif",
      correctAnswer: "SCISSOR-TAILED FLYCATCHER",
      options: [
        "SCISSOR-TAILED FLYCATCHER",
        "WESTERN KINGBIRD",
        "FORK-TAILED FLYCATCHER",
        "EASTERN KINGBIRD",
      ],
      tips: [
        "Exceptionally long tail feathers that open and close like scissors during flight",
      ],
      alt: "Scissor tailed flycatcher perched on a fence",
    },
  ];
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
playAgainBtn.addEventListener("click", startGame);
homescreenBtn.addEventListener("click", goHome);
nextBirdBtn.addEventListener("click", loadBird);
gameOverBtn.addEventListener("click", endGame);
