const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveTodos() {
  localStorage.setItem("toDos", JSON.stringify(toDos))
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id)) // DB에서 지우기
  saveTodos() // 지운뒤 한번더 불러주기
}

function paintToDo(newTodo) {
  const li = document.createElement("li")
  li.id = newTodo.id
  const span = document.createElement("span");
  span.innerHTML = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ""
  const newTodoObj = {
    text:newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj)
  paintToDo(newTodoObj);
  saveTodos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const saveToDos = localStorage.getItem(toDos)

if (saveToDos !== null) {
  const parsedToDos = JSON.parse(saveToDos)
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}