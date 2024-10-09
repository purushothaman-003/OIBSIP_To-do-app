document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const taskList = document.getElementById('task-list');
    
    // Create task item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.classList.add('task-text');
    
    const actionBtns = document.createElement('div');
    actionBtns.classList.add('action-btns');
    
    // Complete icon
    const completeBtn = document.createElement('i');
    completeBtn.classList.add('fas', 'fa-check');
    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    // Delete icon
    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fas', 'fa-trash');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
    
    actionBtns.appendChild(completeBtn);
    actionBtns.appendChild(deleteBtn);
    
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(actionBtns);
    
    taskList.appendChild(taskItem);
    
    // Clear the input
    taskInput.value = '';
}
