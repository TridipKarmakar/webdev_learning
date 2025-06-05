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
    if (task.completed) li.classList.add("completed"); // this is a situation 1 assigned the completed css style
    li.innerHTML = `        
    <span>${task.text}</span>
    <button>delete</button>
    `; // this is a situation 2, add the li class

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return; // here we simple ignore the delete button
      task.completed = !task.completed; // this part basically flip the task status from true to false
      li.classList.toggle("completed"); //
      saveTask();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); //prevent toggle from firing
      task = taskList.filter((t) => t.id !== task.id);
      li.remove();
      saveTask();
    });

    todoList.appendChild(li);
  }

  function saveTask() {
    localStorage.setItem("task", JSON.stringify(taskList));
  }
}saveTask);
