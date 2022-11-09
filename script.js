document.addEventListener("DOMContentLoaded", function() {
const form = document.querySelector("form");
const todoList = document.querySelector("#todo-list");

const savedToDos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedToDos.length; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = savedToDos[i].todo;
    newLi.isCompleted = savedToDos[i].isCompleted ? true : false;
    if (newLi.isCompleted) {
        newLi.style.textDecoration = "line-through";
    } 
    todoList.append(newLi);
console.log(newLi);
    let newBtn = document.createElement("button");
    newBtn.innerText = "Delete";
    newLi.append(newBtn);
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let newLi = document.createElement("li");
    let newToDo = document.getElementById("todo").value;
    newLi.innerText = newToDo;
    newLi.isCompleted = false;
    form.reset();
    todoList.append(newLi);
    let newBtn = document.createElement("button");
    newBtn.innerText = "Delete";
    newLi.append(newBtn);

    savedToDos.push({ todo: newToDo, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedToDos));
    console.log(savedToDos);

    newLi.addEventListener("click", function(e){
        let clickedListItem = e.target;

        if (!clickedListItem.isCompleted) {
            clickedListItem.style.textDecoration = "line-through";
            clickedListItem.isCompleted = true;
        } else {
            clickedListItem.style.textDecoration = "none";
            clickedListItem.isCompleted = false;
        }
    });

});

todoList.addEventListener("click", function(e) {      
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
});

});