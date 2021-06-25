var login = document.querySelector(".box .inBox.login"),
  urlLogin = "Login",
  signup = document.querySelector(".box .inBox.signup"),
  urlSup = "Signup";

function toSignup() {
  login.style = "transform:rotateX(180deg)";
  signup.style = "transform:rotateX(360deg)";
  location.hash = urlSup;
  console.log(location.href);
}

function toLogin() {
  signup.style = "transform:rotateX(180deg)";
  login.style = "transform:rotateX(360deg)";
  location.hash = urlLogin;
  console.log(location.href);
}
