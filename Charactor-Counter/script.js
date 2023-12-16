let inputTextAreaEle = document.querySelector("textarea");
let totalEle = document.querySelector(".total");
let remainingEle = document.querySelector(".remaining");

inputTextAreaEle.addEventListener("keyup", () => {
  updateCounter();
});
function updateCounter() {
  totalEle.textContent = inputTextAreaEle.value.length;
  remainingEle.textContent =
    inputTextAreaEle.getAttribute("maxlength") - inputTextAreaEle.value.length;
}
updateCounter();
