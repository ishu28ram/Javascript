const ripple = document.querySelector("a");
ripple.addEventListener("mouseover", (e) => {
  const x = e.pageX - ripple.offsetLeft;
  const y = e.pageY - ripple.offsetTop;
  console.log(x, y);
  ripple.style.setProperty("--x", x + "px");
  ripple.style.setProperty("--y", y + "px");
});
