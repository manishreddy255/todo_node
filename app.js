const express = require("express")

const app = express()

const tasks = require('./routes/tasks')

// middleware
// if we don't use it then there won't be any data
app.use(express.json())

const port = 3000;

// routes
app.get("/hello", (req, res) => {
    res.send("Task Manager app")
})


app.use('/api/v1/tasks', tasks)


// crud api using node
// create read update delete

// app.get('/api/v1/tasks) - to get a the tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - gets a single task
// app.patch('/api/v1/tasks/:id') - update a task
// app.delete('api/v1/tasks/:id') - delete task

app.listen(port , () => {
    console.log(`The port staretd at ${port}`)    
}) 