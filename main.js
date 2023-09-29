// Task list array to store tasks
let tasks = [];

// Function to render the task list
function renderTaskList() {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "py-2",
      "border-b",
      "border-gray-300"
    );

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = task;
    taskTextElement.classList.add("text-lg");

    const taskActionsElement = document.createElement("div");
    taskActionsElement.classList.add("flex", "items-center");

    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add(
      "px-2",
      "py-1",
      "mr-2",
      "text-green-500",
      "hover:text-green-600",
      "focus:outline-none"
    );
    completeButton.addEventListener("click", () => {
      completeTask(index);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add(
      "px-2",
      "py-1",
      "text-red-500",
      "hover:text-red-600",
      "focus:outline-none"
    );
    deleteButton.addEventListener("click", () => {
      deleteTask(index);
    });

    taskActionsElement.appendChild(completeButton);
    taskActionsElement.appendChild(deleteButton);

    taskElement.appendChild(taskTextElement);
    taskElement.appendChild(taskActionsElement);

    taskListElement.appendChild(taskElement);
  });
}

// Function to add a new task
function addTask(event) {
  event.preventDefault();
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task !== "") {
    tasks.push(task);
    taskInput.value = "";
    renderTaskList();
  }
}

// Function to mark a task as completed
function completeTask(index) {
  tasks.splice(index, 1);
  renderTaskList();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTaskList();
}

// Event listener for form submission
const addTaskForm = document.getElementById("addTaskForm");
addTaskForm.addEventListener("submit", addTask);

// Initial rendering of the task list
renderTaskList();
