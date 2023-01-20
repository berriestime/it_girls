window.onload = loadTasks;

function loadTasks() {
  displayTodo();
}

const txt = document.getElementById("newTask");
const btn = document.getElementById("btn");
const listBox = document.getElementById("listBox");

let todoArray = [];

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  if (txt.value === "") {
    alert("Пожалуйста, введите задачу!");
    return;
  }
  todoArray.push(txt.value);
  txt.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
});

function displayTodo() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  let htmlCode = "";
  todoArray.forEach((list) => {
    htmlCode += `<div><input type="checkbox" onchange="finishTask(this)"<span>${list}</span></div>`;
  });
  listBox.innerHTML = htmlCode;
}

function finishTask(sender) {
  sender.parentElement.classList.toggle("done");
}
