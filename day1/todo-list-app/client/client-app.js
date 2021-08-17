// to-do: |
// 1. Get Todo List -  complete: |
// 2. Post to Todo List -  complete: \
// 3. Look at old todo list app - in-progress: |

function getFullList() {
  fetch('http://localhost:3000/todos')
    .then((response) => response.json())
    .then((items) => {
      const listItems = items.map((item) => {
        console.log(item.id);
        return `<li>${item.title} - ${item.priority} - ${item.dateCreated} <button onclick="deleteTask();">x</button></li>`;
      });
      todoList.innerHTML = listItems.join('');
    });
}

const showList = document.querySelector('#showList');
const todoList = document.querySelector('#todoList');
const taskTitleInput = document.querySelector('#taskTitleInput');
const taskPriorityInput = document.querySelector('#taskPriorityInput');
const taskDateInput = document.querySelector('#taskDateInput');
const addToList = document.querySelector('#addToList');

showList.addEventListener('click', () => {
  getFullList();
});

addToList.addEventListener('click', () => {
  const title = taskTitleInput.value;
  const priority = taskPriorityInput.value;
  const dateCreated = taskDateInput.value;

  fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      priority: priority,
      dateCreated: dateCreated
    })
  })
    .then((response) => response.json())
    .then((result) => {
      getFullList();
    });
});
