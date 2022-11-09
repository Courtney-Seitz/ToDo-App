const form = document.querySelector("form");
const todoList = document.querySelector("#todo-list");

const savedToDos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedToDos.length; i++) {
    let newToDo = document.querySelector("#todo");
    let newLi = document.createElement("li");
    newLi.innerText = savedToDos[i].newToDo;
    newLi.isCompleted - savedToDos[i].isCompleted ? true : false;
    if (newLi.isCompleted) {
        newLi.style.textDecoration = "line-through";
    } 
    const newBtn = document.createElement("button");
    newBtn.innerText = "Delete";
    newLi.append(newBtn);
    todoList.append(newLi);
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const newToDo = document.querySelector("#todo");
    const newLi = document.createElement("li");
    newLi.innerText = newToDo.value;
    const newBtn = document.createElement("button");
    newBtn.innerText = "Delete";
    newLi.append(newBtn);
    todoList.append(newLi);
    form.reset();

    savedToDos.push({ newToDo: newLi.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedToDos));

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

    todoList.addEventListener("click", function(e) {      
        if (e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
        }
    });
});

