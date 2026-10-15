const input = document.getElementById("input");
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");

btnAdd.addEventListener("click", function addItem() {
  const h2 = document.createElement("h2");
  h2.textContent = input.value;
  document.getElementById("listItems").appendChild(h2);
});
