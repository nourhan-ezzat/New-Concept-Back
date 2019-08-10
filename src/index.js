require('./db/mongoose-connection')

const express = require('express')
const cors = require('cors')
const app = express()

const UserRouter = require('./routers/user')

app.use(express.json())
app.use(cors())
app.use(UserRouter)

app.get('/', function(req, res) {
    res.send('hello');
})

const port = process.env.PORT || 3001
app.listen(port, () =>{
    console.log('Server is up on port ' + port)
})
