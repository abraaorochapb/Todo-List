const todoList = [];

window.addEventListener('DOMContentLoaded', () => {
  const savedTodoList = localStorage.getItem('todoList');
  if (savedTodoList) {
    todoList.push(...JSON.parse(savedTodoList));
    renderTodoList();
  }
});

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <p class="paragraph-style">
        ${name} <span>${dueDate}</span>
        <button class="delete-button" 
          onclick="deleteTodoItem(${i})">Delete</button>
      </p>`;
    todoListHTML += html;
  }
  document.querySelector('.js-alguma-coisa').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-todo-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate });

  save();

  inputElement.value = '';

  renderTodoList();
}

function deleteTodoItem(index) {
  todoList.splice(index, 1);

  save();

  renderTodoList();
}

function save() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
