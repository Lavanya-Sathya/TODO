let input = document.getElementById("input");
let addValue = document.getElementById("add");
let listTable = document.getElementById("listTable");

addValue.addEventListener("click",()=>{
    console.log(input.value);
    if(input.value==""){
        alert("Enter todo task")
    }
    else{
        let listElement = document.createElement("li");
        listElement.innerHTML= `${input.value} <button onclick="deleteItem(event)" id="btn">Delete</button>`;
        listTable.append(listElement);
        input.value ="";
    }
    
});

function deleteItem(event){
    event.target.parentElement.remove();
}
