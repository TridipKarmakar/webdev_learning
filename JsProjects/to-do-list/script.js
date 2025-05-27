document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let taskList = JSON.parse(localStorage.getItem("task")) || [];

  taskList.forEach((task) => {
    renderTask(task);
  });

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();

    if (taskText === "") return;
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    taskList.push(task);
    saveTask();
    todoInput.value = "";
    console.log(taskList);
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;

    todoList.appendChild();
  }

  function saveTask() {
    localStorage.setItem("task", JSON.stringify(taskList));
  }
});
