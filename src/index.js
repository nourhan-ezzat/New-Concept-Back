require('./db/mongoose-connection')

const express = require('express')
const cors = require('cors')
const app = express()

const UserRouter = require('./routers/user')

const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(UserRouter)

app.listen(port, () =>{
    console.log('Server is up on port ' + port)
})