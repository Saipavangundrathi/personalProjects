let toDoList = () =>{
    let tasks =[];
    tasks = document.getElementById("task").value;
   if(tasks.trim() === "") {
    alert('Please enter a task');
    removeChild(deleteButton);
}
    let taskResult = document.getElementById("tasksList");
    let newTask = document.createElement("li")
    newTask.textContent= tasks;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className="deleteBtn";
    deleteButton.onclick = function() {
        taskResult.removeChild(newTask);
    };

    newTask.appendChild(deleteButton);
    taskResult.appendChild(newTask);
    document.getElementById("task").value = "";
}