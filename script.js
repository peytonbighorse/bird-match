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
let currentBird = 0;
function loadBird() {
  //Loads the next bird’s image
  //Populates the answer buttons
  //Updates the fact (store it for modal use)
  //Keeps track of which bird you’re on
}
//birds array
let birdData = [
  {
    name: "Steller's Jay",
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
  },
  {
    name: "Brown-headed Cowbird",
    image: "assets/bird-pics/brown-headed-cowbird.jfif",
    correctAnswer: "BROWN-HEADED COWBIRD",
    options: ["BROWN-HEADED COWBIRD"],
    tips: [],
  },
  {
    name: "Cooper's Hawk",
    image: "assets/bird-pics/coopers-hawk.jfif",
    correctAnswer: "COOPER'S HAWK",
    options: ["COOPER'S HAWK"],
    tips: [],
  },
  {
    name: "Dark-eyed Junco",
    image: "assets/bird-pics/dark-eyed-junco",
    correctAnswer: "DARK-EYED JUNCO",
    options: ["DARK-EYED JUNCO"],
    tips: [],
  },
  {
    name: "Great Blue Heron",
    image: "assets/bird-pics/great-blue-heron.jfif",
    correctAnswer: "GREAT BLUE HERON",
    options: ["GREAT BLUE HERON"],
    tips: [],
  },
  {
    name: "Northern Cardinal",
    image: "assets/bird-pics/northern-cardinal.jfif",
    correctAnswer: "NORTHERN CARDINAL",
    options: ["NORTHERN CARDINAL"],
    tips: [],
  },
  {
    name: "Northern Flicker",
    image: "assets/bird-pics/northern-flicker.jfif",
    correctAnswer: "NORTHERN FLICKER",
    options: ["NORTHERN FLICKER"],
    tips: [],
  },
  {
    name: "Osprey",
    image: "assets/bird-pics/osprey.jfif",
    correctAnswer: "OSPREY",
    options: ["OSPREY"],
    tips: [],
  },
  {
    name: "Sandwich Tern",
    image: "assets/bird-pics/sandwich-tern.jfif",
    correctAnswer: "SANDWICH TERN",
    options: ["SANDWICH TERN"],
    tips: [],
  },
  {
    name: "Scissor Tailed Flycatcher",
    image: "assets/bird-pics/",
    correctAnswer: "SCISSOR TAILED FLYCATCHER",
    options: ["SCISSOR TAILED FLYCATCHER"],
    tips: [],
  },
];

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
  optionButtons.forEach((button) => {
    button.style.backgroundColor = "#e9dabd";
    button.style.color = "#4c4027";
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
