const titleInput = document.querySelector('#title-input');
const descriptionInput = document.querySelector('#description-input');
const errorMessage = document.querySelector(".error-message");
const createButton = document.querySelector('#create-button');
const taskList = document.querySelector('#task-list');
const modal = document.querySelector('#modal');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('#modal-description');
const modalStatus = document.querySelector('#modal-status');
const modalCloseButton = document.querySelector('#modal-close-button');

let idCounter = 1;

createButton.addEventListener("click", addTask);

function addTask (e) {
  e.preventDefault();

  const taskRow = document.createElement("tr");
  const taskID = document.createElement("td");
  taskID.innerText = idCounter;
  const taskTitle = document.createElement("td");
  taskTitle.innerText = titleInput.value;
  const taskDescription = document.createElement("td");
  taskDescription.innerText = descriptionInput.value;
  const taskStatus = document.createElement("td");
  const taskCheckbox = document.createElement("input");

  taskCheckbox.setAttribute("type", "checkbox");
  taskStatus.appendChild(taskCheckbox);
  taskRow.appendChild(taskID);
  taskRow.appendChild(taskTitle);
  taskRow.appendChild(taskDescription);
  taskRow.appendChild(taskStatus);
  taskList.appendChild(taskRow);

  idCounter++;
  titleInput.value = "";
  descriptionInput.value = "";

  if (!titleInput.value) {
    titleInput.style.border = "1px solid #f00";
    errorMessage.style.display = "block";
  }

  if (!descriptionInput.value) {
    descriptionInput.style.border = "1px solid #f00";
    errorMessage.style.display = "block";
  }
}