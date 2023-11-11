let input = document.getElementById("input");
let addValue = document.getElementById("add");
let listTable = document.getElementById("listTable");
let errorMessage = document.getElementById("error");

// let todos = [];
// window.onload = () => {
let todos = JSON.parse(localStorage.getItem("todos")) || [];
// todos.forEach((todo) => add(todo));
// };
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
      console.log("Unique ID:", uniqueId);

      let todo = {
        id: uniqueId,
        task: input.value,
        dateTime: Fulldate,
      };
      todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log("insert: " + todos);
      add();
      input.value = "";
    }
  }
});
function add() {
  //   let listElement = document.createElement("tr");
  //   listElement.innerHTML = `<td>${todo.task}</td>
  //   <td>${todo.dateTime}</td>
  //   <td> <button onclick="editItem(event)" id="btnEdit" value="${todo.id}">Edit</button></td>
  //   <td> <button onclick="deleteItem(event)" id="btn" value="${todo.task}">Delete</button></td>`;
  //   listTable.append(listElement);

  //   listElement.addEventListener("click", () => {
  //     listElement.style.textDecoration = "line-through";
  //     remove(todo);
  //   });
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
  console.log(todoEditId);
  const index = todos.findIndex((x) => x.id === todoEditId);
  if (index !== -1) {
    const todoEditData = todos[index];
    input.value = todoEditData.task;
    addValue.innerText = "Edit";
    if (addValue.innerHTML === "Edit") {
      addValue.addEventListener("click", () => {
        console.log("input :" + input.value);
        todoEditData.task = input.value;
        console.log(`todoAfterEdit:${todoEditData.task}`);
        localStorage.setItem("todos", JSON.stringify(todos));
        add();
        addValue.innerText = "ADD";
        input.value = "";
        alert("Task updated Successfully");
      });
    }
  }
}

add();
