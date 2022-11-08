const form = document.querySelector("form");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(e);
    const newToDo = document.querySelector("#todo");
    const newLi = document.createElement("li");
    const newBtn = document.createElement("button");
    newLi.innerText = newToDo.value;
    newBtn.innerText = "Delete";
    
    newLi.append(newBtn);
    todoList.append(newLi);
    form.reset();

    newLi.addEventListener("click", function(e){
        console.log(e);
        e.target.style.textDecoration = "line-through";
    });

    todoList.addEventListener("click", function(e) {
        console.log(e);        
        if (e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
        }
    });
});

