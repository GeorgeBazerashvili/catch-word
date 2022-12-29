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

let randomNum = Math.floor(Math.random() * wordsArr.length);
let randomWord = wordsArr[randomNum];

let stageOne = 1500;
let stageTwo = 900;
let stageThree = 100;
let stageFour = 700;
let stageFive = 400;

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
    if (input.value == words.innerText) {
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
      }
    }
  }
});
