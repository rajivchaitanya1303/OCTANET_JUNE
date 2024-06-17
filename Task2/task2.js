document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskPriority = document.getElementById('task-priority');
    const taskCategory = document.getElementById('task-category');

    if (taskInput.value.trim() !== "") {
        const taskList = document.getElementById('task-ul');
        const newTask = document.createElement('li');

        newTask.innerHTML = `
            <span class="task-text">
                ${taskInput.value} - ${taskCategory.value} - ${taskPriority.value} - ${taskDate.value}
            </span>
            <div class="task-actions">
                <button onclick="deleteTask(this)">Delete</button>
                <button onclick="completeTask(this)">Complete</button>
            </div>
        `;

        taskList.appendChild(newTask);

        taskInput.value = "";
        taskDate.value = "";
        taskPriority.value = "low";
        taskCategory.value = "work";
    }
});

function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}

function completeTask(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle('complete');
}
