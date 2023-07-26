// When loading the page, load from localStorage.

const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2023-07-17'
}, {
    name: 'wash dishes',
    dueDate: '2023-07-17'
  }];

renderTodoList();

function renderTodoList() {
  let todoListHTML = ''; // creating an accumulator variable

  // looping through the array and generating HTML code
  for (i = 0; i < todoList.length; i++) {
    // getting each of the string in the list and save it in a variable todo.
    const todoObject = todoList[i];
    // Generating html code for each todo.
   // const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate }  = todoObject; // destructed notation of the two above lines of code
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick= "
      todoList.splice(${i}, 1);
      renderTodoList();

      // Whenever we update the todo list, save in localStorage.
      saveToStorage();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    //dueDate: dueDate

    // shorthand of the above two lines
      name,
      dueDate
  });
  

  inputElement.value = '';

  renderTodoList();

  // Whenever we update the todo list, save in localStorage.
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}