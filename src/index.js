require('./db/mongoose-connection')

const express = require('express')
const cors = require('cors')
const app = express()

const UserRouter = require('./routers/user')

app.use(express.json())
app.use(cors())
app.use(UserRouter)

app.listen(process.env.PORT || 3001, function(){
    console.log('Your node js server is running');
});
