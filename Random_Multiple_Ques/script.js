const scoreEle = document.querySelector(".score");
const questionEle = document.querySelector(".question");
const answerEle = document.querySelector(".answer");
let answer = "";
let score = JSON.parse(localStorage.getItem("score"));

let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
questionEle.textContent = `What is ${num1} multiply by ${num2} ?`;
answer = num1 * num2;

if (!score) {
  score = 0;
}
scoreEle.textContent = `Score: ${score}`;

document.querySelector("#form").addEventListener("submit", () => {
  const userValue = +answerEle.value;
  if (userValue === answer) {
    score++;
    localStorageHandler();
  } else {
    score--;
    localStorageHandler();
  }
});

function localStorageHandler() {
  localStorage.setItem("score", JSON.stringify(score));
}
