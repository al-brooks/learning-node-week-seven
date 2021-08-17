// importing express into app
// run npm install express in terminal
const express = require('express');
const app = express();

// run npm install cors
const cors = require('cors');

// Enable CORS - for client side
app.use(cors());

// node app.js runs this server file
// ctrl c to quit

let todos = [];

// Middleware
app.use(express.json());

// root page message
app.get('/', (req, res) => {
  res.send('Hello Guest');
});

// passes |
app.get('/todos', (req, res) => {
  res.json(todos);
});

// passes |
app.post('/todos', (req, res) => {
  const title = req.body.title;
  const priority = req.body.priority;
  const dateCreated = req.body.dateCreated;
  const id = todos.length + 1;

  const todo = {
    id: id,
    title: title,
    priority: priority,
    dateCreated: dateCreated
  };

  todos.push(todo);

  res.json({ success: true, message: 'To-Do item has been added to list' });
});

// passes  Logic for Delete works
app.delete('/todos/:id', (req, res) => {
  const delId = parseInt(req.params.id);

  todos = todos.filter((todo) => {
    return todo.id != delId;
  });

  res.send({ success: true, msg: 'item has successfully been deleted' });

  // note:  This works if the IDs are unique...
  // ...However since the IDs are based on array length, that can cause...
  // ...Ids to overlap between tasks (This specific example)
  // ...And you'll accidentally delete multiple tasks
});

app.listen(3000, () => {
  console.log('Server is running...');
});
