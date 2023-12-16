const userNameEle = document.getElementById("userName");
const passwordEle = document.getElementById("password");

let score = JSON.parse(localStorage.getItem("user"));
console.log(score[1]);
let final = score.map((item) => item);
console.log(final);
