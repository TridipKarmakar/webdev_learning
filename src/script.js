const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");

let taskList = [];

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
});
