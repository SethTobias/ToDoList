// Use querySelector for class selectors (prepend with "."), and use querySelector for element selector (no ".")
const todoList = document.querySelector(".todoList");
const todoItem = document.querySelector(".todoIn");
const todoButton = document.querySelector(".todoAdd");
const sortButton = document.querySelector(".sorting");

let arrayToLocal = [];

function todoButtonClick() {
  let todoText = todoItem.value.trim();

  x = 0;
  if (todoText !== "" && todoText.length > 3) {
    // const todoObject = {
    //   id: (x += 1),
    //   task: todoText,
    //   createdDate: new Date().toLocaleDateString(),
    //   completed: false,
    // };

    let li = document.createElement("li");
    li.style.listStyle = "none";
    li.textContent =
      todoText.slice(0, 1).toUpperCase() + todoText.slice(1, Infinity);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = `X`;
    deleteButton.addEventListener("click", function () {
      todoList.removeChild(li);
    });
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function () {
      if (checkbox.checked === true) {
        document.querySelector("li").style.textDecoration = "line-through";
        document.querySelector("li").style.color = "rgba(0, 0, 0,.5)";
      } else {
        document.querySelector("li").style.textDecoration = "none";
        document.querySelector("li").style.color = "rgba(0,0,0,1)";
      }
    });

    li.appendChild(checkbox);

    todoList.appendChild(li);

    li.appendChild(deleteButton);

    todoItem.value = "";
    document.querySelector(".todoIn").style.backgroundColor =
      "rgb(255,255,255)";
  }
  todoItem.value = "";
  document.querySelector(".todoIn").style.backgroundColor = "rgb(255,0,0)";
}

todoButton.addEventListener("click", todoButtonClick);

function sort() {
  console.log("Did it Work?");
}
sortButton.addEventListener("click", sort());

const selectColor = document.querySelector(".colorIn");
function colorChange() {
  color = "#" + selectColor.value;
  document.querySelectorAll("button")[0].style.backgroundColor = color;
  document.querySelectorAll("button")[1].style.backgroundColor = color;
  document.querySelectorAll("button")[2].style.backgroundColor = color;
  document.querySelectorAll("button")[3].style.backgroundColor = color;
}
selectColor.addEventListener("change", () => colorChange());

const darkMode = document.querySelector(".dark");
function darkModeClick() {
  document.querySelector("body").style.backgroundColor = "rgb(0,0,0)";
  document.querySelector("body").style.color = "rgb(255,255,255)";
}
darkMode.addEventListener("click", () => darkModeClick());
const lightMode = document.querySelector(".light");
function lightModeClick() {
  document.querySelector("body").style.backgroundColor = "rgb(255,255,255)";
  document.querySelector("body").style.color = "rgb(0,0,0)";
}
lightMode.addEventListener("click", () => lightModeClick());
