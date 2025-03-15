function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="removeTask(this)">❌</button>`;

    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(taskElement) {
    let taskList = document.getElementById("taskList");
    taskList.removeChild(taskElement.parentElement);
}
