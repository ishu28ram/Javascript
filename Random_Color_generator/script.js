const colorContainer = document.querySelector(".color-container");

for (let i = 0; i < 50; i++) {
  const colorCard = document.createElement("div");
  colorCard.classList.add("color-card");
  colorContainer.appendChild(colorCard);
}

updateColor();
function updateColor() {
  document.querySelectorAll(".color-card").forEach((card, i) => {
    const newRandomColor = generateColor();
    console.log(newRandomColor);
    card.style.backgroundColor = `#${newRandomColor}`;
    card.textContent = `#${newRandomColor}`;
  });
}
function generateColor() {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * str.length);
    color += str.substring(random, random + 1);
  }
  return color;
}
generateColor();
