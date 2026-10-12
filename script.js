const addTodoButton = document.getElementById("addTodoButton");
const todoInput = document.getElementById("todoInput");

let todos = [];

const savedTodos = localStorage.getItem("todos"); // Get saved todos from localStorage

if (savedTodos) {
  todos = JSON.parse(savedTodos); // Convert the string from localStorage back into an array
}

todos.forEach(function (todo) {
  // Display all saved todos when the page loads
  displayTodo(todo);
});

addTodoButton.addEventListener("click", addTodo); // Add new todo

function displayTodo(todo) {
  // Function to display a todo
  const li = document.createElement("li"); // Create the list item
  const span = document.createElement("span"); // Create the span for todo text
  const checkBox = document.createElement("input"); // Create the checkbox
  const deleteButton = document.createElement("button"); // Create the delete button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";

  editButton.addEventListener("click", function () {
    editTodo(todo, span);
  });

  span.textContent = todo.text; // Put todo text inside the span
  checkBox.type = "checkbox"; // Set checkbox type
  checkBox.checked = todo.completed; // Set checkbox state
  if (todo.completed) {
    // If todo is already completed
    span.classList.add("completed");
  }
  li.appendChild(checkBox); // Add checkbox and text to the list item
  li.appendChild(span);
  deleteButton.textContent = "Delete"; // Set delete button text
  li.appendChild(deleteButton); // Add delete button to list item
  li.appendChild(editButton);
  document.getElementById("todoItems").appendChild(li); // Add list item to the HTML
  checkBox.addEventListener("change", function () {
    // Checkbox change event
    todo.completed = checkBox.checked; // Update the todo object's completed value
    if (checkBox.checked) {
      span.classList.add("completed");
    } else {
      span.classList.remove("completed");
    }
    saveTodos(); // Save the updated todos to localStorage
  });

  deleteButton.addEventListener("click", function () {
    // Delete button event

    deleteTodo(todo, li);
  });
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
  const text = todoInput.value.trim();

  if (text === "") {
    alert("Please enter a todo!");
    return;
  }

  const todo = {
    text: text, // Get the text entered by the user
    completed: false,
  };

  todos.push(todo); // Add the todo to the array
  saveTodos(); // Save the updated array to localStorage
  displayTodo(todo); // Display the new todo in the HTML
  todoInput.value = ""; // Clear the input box
}

function deleteTodo(todo, li) {
  li.remove();
  const todoIndex = todos.indexOf(todo); // Find the todo inside the array
  todos.splice(todoIndex, 1); // Remove the todo from the array
  saveTodos(); // Save the updated array
}

function editTodo(todo, span) {
  const newText = prompt("Edit your todo:", todo.text);

  if (newText === null) {
    return;
  }

  if (newText.trim() === "") {
    alert("Todo cannot be empty!");
    return;
  }

  todo.text = newText.trim();

  span.textContent = todo.text;

  saveTodos();
}
