const express = require("express")
const app = express()
const port = 3000
const fruitsRouter = require('./routes/fruits')
const usersRouter = require('./routes/users')

// Express Routes
app.use('/', fruitsRouter)
app.use('/:id', fruitsRouter)
app.use('/', usersRouter)
app.use('/:id', usersRouter)


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
