document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  taskList.innerHTML = "";
  tasks.forEach(renderTask);

  addTaskBtn.addEventListener("click", addTask);

  taskList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    const taskId = Number(li.dataset.id);

    if (e.target.classList.contains("delete-btn")) {
      deleteTask(taskId);
    }

    if (e.target.classList.contains("toggle-btn")) {
      toggleTask(taskId);
    }

    if (e.target.classList.contains("edit-btn")) {
      editTask(taskId);
    }
  });

  function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    taskInput.value = "";
  }

  function renderTask(task) {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.className =
      "flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg";

    li.innerHTML = `
      <span class="${task.completed ? "line-through text-gray-400" : ""}">
        ${task.text}
      </span>
      <div class="flex gap-2">
        <button class="toggle-btn text-green-600">✓</button>
        <button class="edit-btn text-blue-600">✎</button>
        <button class="delete-btn text-red-500">X</button>
      </div>
    `;

    taskList.appendChild(li);
  }

  function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    refreshUI();
  }

  function toggleTask(id) {
    tasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    refreshUI();
  }

  function editTask(id) {
    const task = tasks.find(t => t.id === id);
    const newText = prompt("Edit task", task.text);
    if (!newText || newText.trim() === "") return;

    task.text = newText.trim();
    saveTasks();
    refreshUI();
  }

  function refreshUI() {
    taskList.innerHTML = "";
    tasks.forEach(renderTask);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
