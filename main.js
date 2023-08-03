const addButton = document.getElementById('submit');
const listContainer = document.querySelector('.list');
const allButton = document.getElementById('all');
const completionButton = document.getElementById('completion');
const incompleteButton = document.getElementById('incomplete');

addButton.addEventListener('click', function () {
    const taskInput = document.getElementById('list');
    const priorityInput = document.getElementById('priority');

    const task = taskInput.value;
    const priority = priorityInput.value;

    if (task.trim() === '') {
        alert('할 일을 작성해주세요.');
        return;
    }

    const listItem = document.createElement('div');
    listItem.classList.add('list-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    listItem.appendChild(checkbox);

    const taskText = document.createElement('input');
    taskText.type = 'text';
    taskText.value = task;
    taskText.disabled = true;
    listItem.appendChild(taskText);

    const priorityText = document.createElement('span');
    switch (priority) {
        case '1':
            priorityText.textContent = '낮음';
            break;
        case '2':
            priorityText.textContent = '보통';
            break;
        case '3':
            priorityText.textContent = '높음';
            break;
        case '4':
            priorityText.textContent = '아주 높음';
            break;
    }
    listItem.appendChild(priorityText);

    listContainer.appendChild(listItem);

    taskInput.value = '';
});

allButton.addEventListener('click', function () {
    const items = document.querySelectorAll('.list-item');
    items.forEach(item => item.style.display = 'flex');
});

completionButton.addEventListener('click', function () {
    const items = document.querySelectorAll('.list-item');
    items.forEach(item => {
        if (item.querySelector('input[type="checkbox"]').checked) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

incompleteButton.addEventListener('click', function () {
    const items = document.querySelectorAll('.list-item');
    items.forEach(item => {
        if (!item.querySelector('input[type="checkbox"]').checked) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});