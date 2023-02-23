const loginForm = document.querySelector('#login-form')
const loginInput = loginForm.querySelector('input')
// const loginInput = document.querySelector('#login-form input') 랑 같은 뜻
// const loginbutton = loginForm.querySelector('button')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault(); //form이 기본동작으로 submit되는걸 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME) // input태그 가리기
  const username = loginInput.value; 
  localStorage.setItem(USERNAME_KEY, username)
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerHTML = `Hello ${username}`; // input태그로 받은 username 붙이기
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
} else {
  paintGreetings(savedUsername)
}