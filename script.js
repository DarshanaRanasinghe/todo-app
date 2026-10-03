const addTodoButton = document.getElementById("addTodoButton");
const todoInput = document.getElementById("todoInput");

let todos = [];


// Get saved todos from localStorage
const savedTodos = localStorage.getItem("todos");

if (savedTodos) {

  // Convert the string from localStorage back into an array
  todos = JSON.parse(savedTodos);

}


// Display all saved todos when the page loads
todos.forEach(function (todo) {

  displayTodo(todo);

});


// Add new todo
addTodoButton.addEventListener("click", function () {

  // Get the text entered by the user
  const todo = {
    text: todoInput.value,
    completed: false
  };


  // Add the todo to the array
  todos.push(todo);


  // Save the updated array to localStorage
  localStorage.setItem("todos", JSON.stringify(todos));


  // Display the new todo in the HTML
  displayTodo(todo);


  // Clear the input box
  todoInput.value = "";

});


// Function to display a todo
function displayTodo(todo) {

  // Create the list item
  const li = document.createElement("li");


  // Create the span for todo text
  const span = document.createElement("span");


  // Create the checkbox
  const checkBox = document.createElement("input");


  // Create the delete button
  const deleteButton = document.createElement("button");


  // Put todo text inside the span
  span.textContent = todo.text;


  // Set checkbox type
  checkBox.type = "checkbox";


  // Set checkbox state
  checkBox.checked = todo.completed;


  // If todo is already completed
  if (todo.completed) {

    span.classList.add("completed");

  }


  // Add checkbox and text to the list item
  li.appendChild(checkBox);
  li.appendChild(span);


  // Set delete button text
  deleteButton.textContent = "Delete";


  // Add delete button to list item
  li.appendChild(deleteButton);


  // Add list item to the HTML
  document.getElementById("todoItems").appendChild(li);


  // Checkbox change event
  checkBox.addEventListener("change", function () {

    // Update the todo object's completed value
    todo.completed = checkBox.checked;


    if (checkBox.checked) {

      span.classList.add("completed");

    } else {

      span.classList.remove("completed");

    }


    // Save the updated todos to localStorage
    localStorage.setItem("todos", JSON.stringify(todos));

  });


  // Delete button event
  deleteButton.addEventListener("click", function () {

    // Remove the todo from the HTML
    li.remove();


    // Find the todo inside the array
    const todoIndex = todos.indexOf(todo);


    // Remove the todo from the array
    todos.splice(todoIndex, 1);


    // Save the updated array
    localStorage.setItem("todos", JSON.stringify(todos));

  });

}