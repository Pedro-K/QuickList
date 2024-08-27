const inputItem = document.getElementById("inputItem");
const addButton = document.getElementById("addButton");
const form = document.getElementById("form-addItem");
const list = document.querySelector("ul");
const removeButtonList = document.querySelectorAll("li button");
const closeAlert = document.getElementById("close-alert-message");

let counter = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  createNewItem(inputItem.value);
  inputItem.value = "";
  counter = counter + 1;
})

removeButtonList.forEach(element => {
  element.addEventListener("click", removeItem);
})

closeAlert.addEventListener("click",(event)=>{
  event.target.parentNode.classList.add("hidden")
})

function createNewItem(description) {
  const newLi = document.createElement("li");
  
  newLi.appendChild(createNewInput());
  newLi.appendChild(createNewLabel(description));
  newLi.appendChild(createNewButton());

  list.prepend(newLi);
}

function createNewInput() {
  const newInput = document.createElement("input");

  newInput.type = "checkbox";
  newInput.id = `item-${counter}`;

  return newInput;
}

function createNewLabel(description) {
  const newLabel = document.createElement("label");

  newLabel.htmlFor = `item-${counter}`;
  newLabel.textContent = description;

  return newLabel;
}

function createNewButton() {
  const newButton = document.createElement("button");

  newButton.classList.add("remove-item");
  newButton.addEventListener("click", removeItem);

  return newButton;
}

function removeItem(event) {
  const listItem = event.target.parentNode;
  listItem.remove();

  removeMessage();
}

function removeMessage() {
  const alertMessage = document.getElementById("alert-message");

  alertMessage.classList.remove("hidden");
  setTimeout(() => {
    alertMessage.classList.add("hidden");
  }, 7000);
}