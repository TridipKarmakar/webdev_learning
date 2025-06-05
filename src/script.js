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
    if (taskText == "") return;
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    taskList.push(task);
    todoInput.value = "";
    console.log(taskList);
    saveTask();
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.className =
      "bg-[#333333] p-2.5 mb-2.5 flex justify-between items-center rounded-sm";
    const span = document.createElement("span");
    span.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className =
      "text-sm bg-red-600 text-white px-3 py-2 rounded-sm cursor-pointer";

    li.appendChild(span);
    li.appendChild(deleteBtn);

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      span.classList.toggle("line-through");
      span.classList.toggle("opacity-70");
      span.classList.toggle("text-gray-400");
      saveTask();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      taskList = taskList.filter((t) => t.id !== task.id);
      li.remove();
      saveTask();
    });
    todoList.appendChild(li);
  }

  function saveTask() {
    localStorage.setItem("task", JSON.stringify(taskList));
  }
});
