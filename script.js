const form = document.querySelector("form");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(e);
    const newToDo = document.querySelector("#todo");
    const newLi = document.createElement("li");
    newLi.innerText = newToDo.value;
    
    todoList.append(newLi);
    form.reset();

    newLi.addEventListener("click", function(e){
        console.log(e);
        e.target.style.textDecoration = "line-through";
    })

})

