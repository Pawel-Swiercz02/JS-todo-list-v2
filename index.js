let todos = [];

const todosList = document.getElementById('todos');
const todoInput = document.getElementById('text-input');
const inputButton = document.getElementById('add-button');
const showEnterTodo = document.getElementById('show-enter-todo');
const enterTodo = document.getElementById('enter-todo');


function showTodoInput() {
    enterTodo.style.display = 'block';
};

showEnterTodo.addEventListener('click', showTodoInput);


function addTodo(e) {
    e.preventDefault(); /*prevents the button default event (refreshing page)*/
    let textValue = todoInput.value;
    todos.push(textValue);
    todosList.innerHTML = '';
    renderTodos();
    todoInput.value = '';
    enterTodo.style.display = 'none';
};
inputButton.addEventListener('click', addTodo);


function removeTodo(index) {
    todos = todos.filter((todo, i) => {
        return i === index ? false : true;
    });
    todosList.innerHTML = '';
    renderTodos();
};


function editTodo(index) {
    const currElementText = document.querySelector(`#todos div:nth-child(${index + 1}) p`).innerText;
    const splicedText = currElementText.slice(3);
    removeTodo(index);
    showTodoInput();
    todoInput.value = splicedText;
};


function renderTodos() {
    todos.forEach((todo, i) => {
        let currentHTML = todosList.innerHTML;
        let newHTML = (
        `<div class="todo-item">
            <p>${i + 1}. ${todo}</p>
            <div class="actions">
                <i onclick="editTodo(${i})" class="fa-solid fa-pen"></i>
                <i onclick="removeTodo(${i})" class="fa-regular fa-trash-can"></i>
            </div>
        </div>`
        );

        let amendedHTML = currentHTML + newHTML;
        todosList.innerHTML = amendedHTML;
    });
};

renderTodos();