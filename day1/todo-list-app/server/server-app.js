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

// app.delete('/todos/delete-item/:id', (req, res) => {
//   const itemId = req.params.id;
//   const removeId = todos.filter(id => {
//     if(itemId = id) {
//       return id;
//     }
//   })
// });

app.listen(3000, () => {
  console.log('Server is running...');
});
