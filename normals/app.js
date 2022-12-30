let wordsArr = [
  "refund",
  "double",
  "list",
  "doubt",
  "insist",
  "outline",
  "pie",
  "fraction",
  "illusion",
  "mosquito",
  "beneficiary",
  "outlet",
  "population",
  "sale",
  "related",
  "duck",
  "digital",
  "scheme",
  "enemy",
  "defendant",
  "chart",
  "favor",
  "future",
  "affair",
  "fame",
  "walk",
  "flesh",
  "staircase",
  "bind",
  "acid",
  "charter",
  "portion",
  "trade",
  "illustrate",
  "cross",
  "house",
  "beginning",
  "instruction",
  "litigation",
  "commerce",
  "foster",
  "remain",
  "discount",
  "sermon",
  "baby",
  "ranch",
  "facility",
  "pleasure",
  "faithful",
  "depend",
  "week",
  "admit",
  "beat",
  "beast",
  "feast",
  "feed",
  "thief",
  "tryna",
  "bleed",
  "take",
  "develop",
  "benefit",
];

let finalScore = document.getElementById("finalscore");

let randomNum = Math.floor(Math.random() * wordsArr.length);
let randomWord = wordsArr[randomNum];

let gameOverMenu = document.getElementById("gameover");

let stageOne = 2000;
let stageTwo = 1500;
let stageThree = 1300;
let stageFour = 1000;
let stageFive = 700;
let finalStage = 400;

let home = document.getElementById("home");
let time = document.getElementById("time");
const input = document.getElementById("input");
const words = document.getElementById("words");

let startTime = 50;
let score = document.getElementById("score");
let stage = document.getElementById("stage");

var score1 = 0;
var stage1 = 1;

words.innerText = randomWord;

function stopInterval() {
  clearInterval(interval1);
  gameOver();
}

function minusTime() {
  startTime--;
  time.innerText = `${startTime}s`;
  if (startTime == 0) {
    stopInterval();
  }
}

var interval1 = setInterval(minusTime, stageOne);

let stageCounter = 0;

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    if (input.value !== words.innerText) {
      time.style.color = "red";
      time.style.transition = ".3s";
      setTimeout(() => {
        time.style.color = "";
      }, 300);
    } else if (input.value == words.innerText) {
      let p = document.createElement("p");
      time.append(p);
      p.innerText = +1;
      setTimeout(() => {
        p.style.display = "none";
      }, 700);
      time.style.color = "lime";
      time.style.transition = ".3s";
      setTimeout(() => {
        time.style.color = "";
      }, 300);
      input.value = "";
      let randomNum = Math.floor(Math.random() * wordsArr.length);
      let randomWord = wordsArr[randomNum];
      words.innerText = randomWord;
      startTime++;
      time.innerText = `${startTime}s`;
      score1++;
      score.innerText = `Score: ${score1}`;

      // Increment the stage every 5 score points
      if (score1 % 5 == 0) {
        stageCounter++;
        stage1++;
        stage.innerText = `Stage: ${stage1}`;
      }
    }

    if (stageCounter == 1) {
      stopInterval();
      interval1 = setInterval(minusTime, stageTwo);
    } else if (stageCounter == 2) {
      stopInterval();
      interval1 = setInterval(minusTime, stageThree);
    } else if (stageCounter == 3) {
      stopInterval();
      interval1 = setInterval(minusTime, stageFour);
    } else if (stageCounter == 4) {
      stopInterval();
      interval1 = setInterval(minusTime, stageFive);
    } else if (stageCounter == 5) {
      stopInterval();
      stage.innerText = "Final Stage";
      interval1 = setInterval(minusTime, finalStage);
    }
  }
});

function gameOver() {
  if (startTime == 0) {
    gameOverMenu.style.visibility = "visible";
    document.body.style.background = "#0093E9";
    stage.style.visibility = "hidden";
    score.style.visibility = "hidden";
    input.style.visibility = "hidden";
    home.style.visibility = "hidden";
    finalScore.innerText = `You Collected ${score1} Score`;
  }
}
