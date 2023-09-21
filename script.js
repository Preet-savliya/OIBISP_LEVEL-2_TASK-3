function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("task-list");
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-button" onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(listItem);

    taskInput.value = "";
}

function removeTask(button) {
    const listItem = button.parentElement;
    const taskList = listItem.parentElement;
    taskList.removeChild(listItem);
}
