require('./db/mongoose-connection')

const express = require('express')
const app = express()

const UserRouter = require('./routers/user')

const port = process.env.PORT || 3001

app.use(express.json())
app.use(UserRouter)

app.listen(port, () =>{
    console.log('Server is up on port ' + port)
})