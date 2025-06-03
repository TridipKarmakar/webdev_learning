const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let taskList = [];

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
  console.log(taskList);
  renderTask(task);
});

function renderTask(task) {
  const li = document.createElement("li");
  //   li.setAttribute("data-id", task.id);
  //   if (task.completed) li.classList.add("line-through opacity-70 text-gray-700");
  li.innerHTML = `<span class="bg-[#333333] p-2.5 mb-2.5 flex justify-between items-center rounded-sm">${task.text}</span>`;
  todoList.appendChild(li);
}
