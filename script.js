const form = document.querySelector("form");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const newToDo = document.querySelector("#todo");
    const newLi = document.createElement("li");
    newLi.innerText = newToDo.value;



todoList.append(newLi);
form.reset();

})
