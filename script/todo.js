let input = document.getElementById("input");
let addValue = document.getElementById("add");
let listTable = document.getElementById("listTable");
let errorMessage = document.getElementById("error");
let todoEditData = null;

let todos = JSON.parse(localStorage.getItem("todos")) || [];

addValue.addEventListener("click", () => {
  if (addValue.innerHTML === "ADD") {
    if (input.value == "") {
      errorMessage.innerHTML = "Enter todo task before adding in list";
      errorMessage.style.display = "block";
      setTimeout(() => {
        errorMessage.style.display = "none";
      }, 2000);
    } else {
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      let hour = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();

      let Fulldate = `${day}-${month}-${year}  ${hour}:${min}:${sec}`;

      const randomNumber = Math.floor(Math.random() * 10000);
      const uniqueId = `${date.getTime()}-${randomNumber}`;
      // console.log("Unique ID:", uniqueId);

      let todo = {
        id: uniqueId,
        task: input.value,
        dateTime: Fulldate,
      };
      todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      // console.log("insert: " + todos);
      add();
      input.value = "";
    }
  } else if (addValue.innerHTML === "Edit") {
    todoEditData.task = input.value;
    localStorage.setItem("todos", JSON.stringify(todos));
    add();
    addValue.innerText = "ADD";
    input.value = "";
    alert("Task updated Successfully");
  }
});
function add() {
  if (todos.length === 0) {
    listTable.innerHTML = `<h3>Your Todo list is empty</h3>`;
  } else {
    listTable.innerHTML = `<tr id="tableRowBorder">
                        <th>Task</th>
                        <th>Date</th>
                        <th>Action</th>
                        </tr>`;
    listTable.innerHTML += todos
      .map((x) => {
        return `<tr><td>${x.task}</td>
                  <td>${x.dateTime}</td>
                  <td> <button onclick="editItem(event)" id="btnEdit" value="${x.id}">Edit<i class="bi bi-pencil-square" style="font-size:0.7rem"></i></button>
                  <button onclick="deleteItem(event)" id="btn" value="${x.id}">Delete<i class="bi bi-trash-fill" style="font-size:0.7rem"></i></button></td>
              </tr>`;
      })
      .join("");
  }
}
// Remove list element
function deleteItem(event) {
  const todoId = event.target.value;
  const confirmDelete = confirm("Are you Sure, you want to delete the task?");
  if (confirmDelete) {
    const index = todos.findIndex((x) => x.id === todoId);
    if (index !== -1) {
      const removeTask = todos.filter((x) => x.id !== todoId);
      localStorage.setItem("todos", JSON.stringify(removeTask));
      todos = removeTask;
      errorMessage.innerHTML = "Task Deleted Successfully";
      errorMessage.style.display = "block";
      setTimeout(() => {
        errorMessage.style.display = "none";
      }, 4000);
      add();
    }
  }
}

// Edit Task

function editItem(event) {
  const todoEditId = event.target.value;
  // console.log(todoEditId);
  const index = todos.findIndex((x) => x.id === todoEditId);
  if (index !== -1) {
    todoEditData = todos[index];
    input.value = todoEditData.task;
    addValue.innerText = "Edit";
  }
}

add();
