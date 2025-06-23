function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");
  const loginContainer = document.querySelector(".login-container");
  const secretRoom = document.getElementById("secretRoom");

  if (username === "Laurete" && password === "0303") {
    loginContainer.classList.add("hidden");
    secretRoom.classList.remove("hidden");
  } else {
    error.textContent = "Se nao der coloca a senha 0303 e o usuario a priemira letra é maiuscula";
  }
}