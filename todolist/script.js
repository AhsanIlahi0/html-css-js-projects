let inputA = document.getElementById('input');
function add() {
    let input = document.getElementById('input').value;
    if (input.trim() === "") {
        inputA.focus();
        return;
    }

    let tasks = document.querySelectorAll('.task');
    for (let task of tasks) {
        if (!task.classList.contains('task-visible')) {
            task.querySelector('.task-content').textContent = input;
            task.classList.add('task-visible');
            document.getElementById('input').value = "";
            inputA.focus(); 
            break;
        }   
    }

    updateFooterVisibility();
}

function remove(id) {
    let task = document.getElementById(id).parentElement;
    task.classList.remove('task-visible');
    setTimeout(() => {
        task.querySelector('.task-content').textContent = "";
    }, 500);
    inputA.focus();
    updateFooterVisibility();
}

function clearall() {
    let tasks = document.querySelectorAll('.task');
    for (let task of tasks) {
        task.classList.remove('task-visible');
        setTimeout(() => {
            task.querySelector('.task-content').textContent = "";
        }, 5000);
    }
    inputA.focus();
    updateFooterVisibility();
}

function updateFooterVisibility() {
    let tasks = document.querySelectorAll('.task');
    let footer = document.getElementById('footer');
    if (Array.from(tasks).some(task => task.classList.contains('task-visible'))) {
        footer.style.visibility = 'visible';
    } else {
        footer.style.visibility = 'hidden';
    }
}
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        add();
    }
});