const express = require('express')
const app = express()
const itemRouter = require('./routes/itemRoutes')

const PORT = 3000

app.use(express.json())
app.use('/items', itemRouter)

app.listen(PORT, () =>{
    console.log()
})