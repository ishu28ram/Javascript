const submitBtn = document.getElementById("submit");
const userNameEle = document.getElementById("userName");
const emailEle = document.getElementById("email");
const passwordEle = document.getElementById("password");
const confirmPasswordEle = document.getElementById("confirmPassword");
const phNumberEle = document.getElementById("phNumber");
const inputs = document.querySelectorAll("input");
let arr = [];

function onError(input, message) {
  const parent = input.parentElement;
  const msg = parent.querySelector("span");
  parent.classList.add("error");
  msg.innerHTML = message;
}
function onSuccess(input, message) {
  const parent = input.parentElement;
  const msg = parent.querySelector("span");
  parent.classList.remove("error");
  msg.innerHTML = message;
}

function userNameHandler() {
  if (userNameEle.value.trim() === "") {
    onError(userNameEle, "username is required");
  } else {
    // if (userNameEle.value.length >= 6) {
    //   onError(userNameEle, "username is not valid");
    // } else {
    //   onSuccess(userNameEle, "✅");
    // }
    onSuccess(userNameEle, "✅");
    return userNameEle.value.trim();
  }
}
function emailHandler() {
  if (emailEle.value.trim() === "") {
    onError(emailEle, "Email field is required");
  } else {
    if (!isValidEmail(emailEle.value.trim())) {
      onError(emailEle, "Email field is not valid");
    } else {
      onSuccess(emailEle, "✅");
      return emailEle.value.trim();
    }
  }
}

function passwordHandler() {
  if (
    passwordEle.value.trim() === "" &&
    confirmPasswordEle.value.trim() === ""
  ) {
    onError(passwordEle, "Password field is required");
    onError(confirmPasswordEle, "Confirm Password field is required");
  } else {
    if (passwordEle.value.trim() !== confirmPasswordEle.value.trim()) {
      onError(passwordEle, "password is not same");
      onError(confirmPasswordEle, "password is not same");
    } else {
      onSuccess(passwordEle, "✅");
      onSuccess(confirmPasswordEle, "✅");
      return passwordEle.value.trim();
    }
  }
}

function phnumberHandler() {
  if (phNumberEle.value.trim() === "") {
    onError(phNumberEle, "Phone number is required");
  } else {
    if (!isValidatePhnumber(phNumberEle.value.trim())) {
      onError(phNumberEle, "Phone number is not valid");
    } else {
      onSuccess(phNumberEle, "✅");
      return phNumberEle.value.trim();
    }
  }
}
function validateForm() {
  let username = userNameHandler();
  let email = emailHandler();
  let password = passwordHandler();
  let phnumber = phnumberHandler();
  if (username && email && password && phnumber) {
    return { username, email, password, phnumber };
  }
}

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const final = validateForm();

  arr.push(final);
  // // const filterArray = arr.filter((item, index, array) => {
  // //   return array.indexOf(item.mail) !== index;
  // // });
  // const filter = arr.map((item) => item.email)
  localStorageHandler();
});
function isValidatePhnumber(phno) {
  return /^[0-9]{3}$/.test(phno);
}
function isValidEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
function localStorageHandler() {
  localStorage.setItem("user", JSON.stringify(arr));
  console.log(arr);
  inputs.value = "";
  window.location.href = "login.html";
}
