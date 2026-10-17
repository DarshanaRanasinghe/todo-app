const input = document.getElementById("input");
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");

btnAdd.addEventListener("click", function addItem() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const checkBox = document.createElement("input");
  const editButton = document.createElement("button");
  checkBox.type = "checkbox";
  editButton.textContent = "Edit";
  span.textContent = input.value;
  document.getElementById("listItems").appendChild(li);
  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(editButton);
  input.value = "";

  editButton.addEventListener("click", function () {
    
  });

});



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