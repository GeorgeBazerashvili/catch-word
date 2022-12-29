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

const stageOne = 1500;
const stageTwo = 1200;
const stageThree = 500;
const stageFour = 700;
const stageFive = 400;

let time = document.getElementById("time");
const input = document.getElementById("input");
const words = document.getElementById("words");

let startTime = 50;
let score = document.getElementById("score");
let stage = document.getElementById("stage");

var score1 = 0;
var stage1 = 1;

var interval = setInterval(minusTime, 1500);

words.innerText = randomWord;

function stopInterval() {
  clearInterval(interval);
}

function minusTime() {
  startTime--;
  time.innerText = `${startTime}s`;
  if (startTime == 0) {
    stopInterval();
  }
}

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    if (input.value == words.innerText) {
      clearInterval(interval);
      var interval1 = setInterval(() => {
        minusTime();
      }, stageOne);
      input.value = "";
      let randomNum = Math.floor(Math.random() * wordsArr.length);
      let randomWord = wordsArr[randomNum];
      words.innerText = randomWord;
      startTime++;
      time.innerText = `${startTime}s`;
      score1++;
      score.innerText = `Score: ${score1}`;
    } else if (score.innerText.includes(5)) {
      clearInterval(interval1);
      stage1++;
      stage.innerText = `Stage: ${stage1}`;
      var interval2 = setInterval(() => {
        minusTime();
      }, stageTwo);
    } else if (score.innerText.includes(10)) {
      clearInterval(interval2);
      stage1++;
      stage.innerText = `Stage: ${stage1}`;
      var interval3 = setInterval(() => {
        minusTime();
      }, stageThree);
    } else if (score.innerText.includes(15)) {
      clearInterval(interval3);
      stage1++;
      stage.innerText = `Stage: ${stage1}`;
      var interval4 = setInterval(() => {
        minusTime();
      }, stageFour);
    } else if (score.innerText.includes(5)) {
      clearInterval(interval4);
      stage1++;
      stage.innerText = `Stage: ${stage1}`;
      var interval5 = setInterval(() => {
        minusTime();
      }, stageFive);
    }
  }
});
