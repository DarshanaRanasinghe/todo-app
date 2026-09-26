const addTodoButton = document.getElementById("addTodoButton");
const todoInput = document.getElementById("todoInput");

addTodoButton.addEventListener("click", function () {
  const li = document.createElement("li"); // create list item element in the html
  const span = document.createElement("span"); // create span element to store the valur of todoInput
  const checkBox = document.createElement("input"); // create input field, type is checkbox,
  const deleteButton = document.createElement("button"); // cretate the delete button

  span.textContent = todoInput.value; // add the value of todoInput to the span
  document.getElementById("todoItems").appendChild(li); // insert list item into the unOrded list in the HTML

  checkBox.type = "checkbox"; // change the input field type to checkbox
  li.appendChild(checkBox); // make the checkbox inside the list item
  li.appendChild(span);
  todoInput.value = ""; //resetting values of the todoInput field in HTML

  deleteButton.textContent = "Delete"; // name the button as 'delete'
  li.appendChild(deleteButton); // assing the delete button inside the list item

  deleteButton.addEventListener("click", function () {
    li.remove(); // when user click the deleteButton list item will remove
  });

  checkBox.addEventListener("change", function () {

    if (checkBox.checked) {
      span.classList.add("completed");
    } else {
      span.classList.remove("completed");
    }

  });


  localStorage.setItem("todos", document.getElementById("todoItems").innerHTML);

});
