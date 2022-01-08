const express = require('express')
const app = express();

var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://m001-student:12345@sandbox.jhgbt.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const port = 8000;

var indexRouter = require('./apis/index')

app.use('/',indexRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

module.exports = app;