const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const listArea = document.getElementById('list-area');
let checkBoxImage = '<img src="./img/circle.svg">'
let count = 0;

function addTask() {
  let inputValue = input.value;

  if ((inputValue != "") && (inputValue != null) && (inputValue != undefined)) {
    ++count;
    console.log(count);
    let newItem = `<div class="item" id="${count}">
    <div class="item-icon" onclick="completeTask(${count})">${checkBoxImage}</div>
    <div class="item-name">${inputValue}</div>
    <div class="item-btn">
      <button class="delete-btn" onclick="deleteTask(${count})"><img src="./img/trash.svg"></button>
    </div>`;

    listArea.innerHTML += newItem;

    input.value = "";
    input.focus();
  }
}

function deleteTask(id) {
  var task = document.getElementById(id);
  task.remove();
}

function completeTask(id) {
  var item = document.getElementById(id);
  var itemClass = item.getAttribute("class");

  if (itemClass == "item") {
    item.classList.add("complete");
  } else {
    item.classList.remove("complete");
  }
}