//Gameplay
let currentBird = 0;

//birds array
let birdData = [
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
    tips: ["fake tip"],
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
    tips: ["fake tip"],
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
    tips: ["fake tip"],
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
    tips: ["fake tip"],
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
    tips: ["fake tip"],
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
    tips: ["fake tip"],
    alt: "Norther flicker",
  },
  {
    name: "osprey",
    image: "assets/bird-pics/osprey.jfif",
    correctAnswer: "OSPREY",
    options: ["OSPREY", "RED-TAILED HAWK", "BALD EAGLE", "GOLDEN EAGLE"],
    tips: ["fake tip"],
    alt: "Osprey soaring over body of water",
  },
  {
    name: "sandwich-tern",
    image: "assets/bird-pics/sandwich-tern.jfif",
    correctAnswer: "SANDWICH TERN",
    options: ["COMMON TERN", "ROYAL TERN", "ELEGANT TERN", "SANDWICH TERN"],
    tips: ["fake tip"],
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
    tips: ["fake tip"],
    alt: "Scissor tailed flycatcher perched on a fence",
  },
];
function loadBird() {
  const gamePageSection = document.querySelector(".game-page");
  const gameOverSection = document.querySelector(".game-over");
  //Keeps track of which bird you’re on
  let randomNum = Math.floor(Math.random() * birdData.length);
  let correctAnswer = birdData[randomNum].correctAnswer;
  //Load bird image
  let birdImageElement = document.querySelector(".bird-img");
  birdImageElement.innerHTML = `<img src="${birdData[randomNum].image}" alt="${birdData[randomNum].alt}" id="${birdData[randomNum].name}" style="width:320px; height:240px"/>`;

  //Populates the answer buttons
  let optionButtonsElements = document.querySelectorAll(".option-btn");
  let optionsCounter = 0;
  optionButtonsElements.forEach((button) => {
    button.style.color = "#4c4027";
    button.style.backgroundColor = "#e9dabd";
    button.innerHTML = birdData[randomNum].options[optionsCounter];
    optionsCounter += 1;

    button.addEventListener("click", (event) => {
      showAnswer(button, correctAnswer);
    });
  });
  //Update the birding tip
  let birdingTip = document.querySelector(".birding-tip");
  birdingTip.innerHTML = birdData[randomNum].tips[0];

  let modal = document.querySelector(".modal");
  if (!modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
  }

  //Remove bird from array and end game
  birdData.splice(randomNum, 1);
  if (birdData.length === 0) {
    gameOverSection.classList.remove("hidden");
    gamePageSection.classList.add("hidden");
  }
}
//  Choice selection
//Buttons
const optionButtons = document.querySelectorAll(".option-btn");

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
let score = 0;
function showAnswer(userChoice, correctChoice) {
  let num = 0;
  const scoreElement = document.querySelector(".score-counter-element");
  optionButtons.forEach((button) => {
    button.style.backgroundColor = "#e9dabd";
    button.style.color = "#4c4027";
  });
  if (userChoice.innerHTML === correctChoice) {
    userChoice.style.backgroundColor = "green";
    userChoice.style.color = "#e9dabd";
    score += 1;
    scoreElement.innerHTML = score;
    showModal(true);
  } else {
    optionButtons.forEach(() => {
      if (optionButtons[num].innerHTML === correctChoice) {
        optionButtons[num].style.backgroundColor = "green";
        optionButtons[num].style.color = "#e9dabd";
      }
      showModal(false);
      num += 1;
    });
    userChoice.style.backgroundColor = "red";
    userChoice.style.color = "#e9dabd";
  }
}

//      Optional:
//          - add bird sounds
//          - add bird facts to the pop up
//              - random fact about pictured bird if API can provide
//          -
//  Add event listeners
/*
optionButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    showAnswer(button, "steller's jay");
  });
});
*/
//Changing Pages
{
  //Buttons
  const startGameBtn = document.querySelector(".start-game-btn");
  const aboutGameBtn = document.querySelector(".about-game-btn");
  const exitAboutBtn = document.querySelector(".exit-about-btn");
  const playAgainBtn = document.querySelector(".play-again-btn");
  const homescreenBtn = document.querySelector(".home-btn");
  const nextBirdBtn = document.querySelector(".next-bird-btn");
  //Sections
  const startPageSection = document.querySelector(".start-page");
  const gamePageSection = document.querySelector(".game-page");
  const gameOverSection = document.querySelector(".game-over");
  const aboutPageSection = document.querySelector(".about-and-credits");
  //Functions
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
  //Event Listeners
  startGameBtn.addEventListener("click", startGame);
  aboutGameBtn.addEventListener("click", showAboutSection);
  exitAboutBtn.addEventListener("click", goHome);
  playAgainBtn.addEventListener("click", startGame);
  homescreenBtn.addEventListener("click", goHome);
  nextBirdBtn.addEventListener("click", loadBird);
}
