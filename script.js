const form = document.querySelector("form");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const newToDo = document.querySelector("#todo");
    const newLi = document.createElement("li");
    const newBtn = document.createElement("button");
    newLi.innerText = newToDo.value;
    newBtn.innerText = "Delete";
    
    newLi.append(newBtn);
    todoList.append(newLi);
    form.reset();
    console.log(e);

    newLi.addEventListener("click", function(e){
        e.target.style.textDecoration = "line-through";
    });

    todoList.addEventListener("click", function(e) {      
        if (e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
        }
    });

    // const list = document.querySelector("ol#todo-list");

    // localStorage.setItem("list", JSON.stringify(list));
    // JSON.parse(localStorage.getItem("list"));
});

