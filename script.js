const addTodoButton = document.getElementById("addTodoButton");
const todoInput = document.getElementById("todoInput");


addTodoButton.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = todoInput.value;
  document.getElementById("todoItems").appendChild(li);
  todoInput.value = "";
  const deleteButton = document.createElement("button");
  deleteButton.textContent="Delete";
  li.appendChild(deleteButton);
  
});

