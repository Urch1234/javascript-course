const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {

  let todoListHTML = ''; // creating an accumulator variable



  // looping through the array and generating HTML code
  for (i = 0; i < todoList.length; i++) {
    // getting each of the string in the list and save it in a variable todo.
    const todo = todoList[i];
    // Generating html code for each todo.
    const html = `<p>${todo}</p>`
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}