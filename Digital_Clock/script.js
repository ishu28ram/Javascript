const hourELe = document.querySelector(".hour");
const minuteELe = document.querySelector(".minute");
const secondELe = document.querySelector(".second");
const AMPMELe = document.querySelector(".part");

function generateDate() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let AMPM = "PM";
  if (h > 12) {
    h = h - 12;
    AMPM = "AM";
  }
  h = h < 10 ? `0${h}` : `${h}`;
  m = m < 10 ? `0${m}` : `${m}`;
  s = s < 10 ? `0${s}` : `${s}`;
  hourELe.textContent = h;
  minuteELe.textContent = m;
  secondELe.textContent = s;
  AMPMELe.textContent = AMPM;
  setTimeout(generateDate, 1000);
}

generateDate();
