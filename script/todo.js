let input = document.getElementById("input");
let addValue = document.getElementById("add");
let listTable = document.getElementById("listTable");
let errorMessage = document.getElementById("error");

let todos = [];
window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => add(todo));
}
addValue.addEventListener("click", () => {
    if (input.value == "") {
        errorMessage.innerHTML = "Enter todo task before adding in list";
        errorMessage.style.display ="block";
        setTimeout(()=>{errorMessage.style.display ="none";},2000);
    }
    else {
        let todo = input.value;
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log("insert: " + todos)
        add(todo)
        input.value = "";
    }

});
function add(todo) {
    // let listElement = document.createElement("li");
    // listElement.innerHTML = `${todo} <button onclick="deleteItem(event)" id="btn" value="${todo}">Delete</button>`;
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let Fulldate = `${day} - ${month} - ${year}  ${hour}:${min}:${sec}`;
    let listElement = document.createElement("tr");
    listElement.innerHTML = `<td>${todo}</td><td> <button onclick="deleteItem(event)" id="btn" value="${todo}">Delete</button></td>`;
    listTable.append(listElement);
    listElement.addEventListener("click", () => {
        listElement.style.textDecoration = "line-through";
        remove(todo);
    })
}
// Remove Array value
function remove(todo) {
    let index = todos.indexOf(todo);
    if (index >= 0) {
        todos.splice(index, 1);
    }
    localStorage.setItem("todos", JSON.stringify(todos));
}
// Remove list element
function deleteItem(event) {
    const todo = event.target.value;
    remove(todo);
    event.target.parentElement.parentElement.remove();
}
