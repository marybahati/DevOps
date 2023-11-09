const express = require('express')
const app = express();
const port = 3000;
const host = '0.0.0.0'

app.listen(port, host, () => {
    console.log(`App listening on http://${host}:${port}`);
});
  

app.use(express.json());  // convert req body/payload to JSON

app.get('/', (req, res) => res.send('<h1> Welcome to the Todo App </h1>'))

// Add a todo item
app.post('/todoitem', (req, res) => {
    const { title } = req.body;
    if (!title) {
        res.status(400).send('Missing Todo Item title!')
    }
    res.status(200).send(`Successfully added todo item - ${title}`)
})

// Get all todo items
app.get('/todolist', (req, res) => {
    const data = ['Task1', 'Task2', 'Task3']
    res.status(200).send(data)
})

// Update a todo item
app.put('/todoitem', (req, res) => {
    const { id } = req.params;
    const { updatedTitle } = req.body;
    if (!id) {
        res.status(400).send('Missing todo item ID!')
    }
    if (!updatedTitle) {
        res.status(400).send('Missing the updated todo item title!')
    }
    res.status(200).send('Successfully updated the todo item!')
})

// Delete a todo item
app.delete('/todoitem', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).send('Missing todo item ID!')
    }
    res.status(200).send('Successfully deleted the todo item!')

})
