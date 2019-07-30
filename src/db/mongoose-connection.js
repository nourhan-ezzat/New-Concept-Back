const mongoose = require('mongoose')
const uri = "mongodb+srv://nour:nourhanezzat@cluster0-8cptn.mongodb.net/Task?retryWrites=true";

mongoose.connect(uri, 
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
).then(() => console.log("DB Connected"));

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
});