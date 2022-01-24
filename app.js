const express = require('express')
const app = express();
const port = 8000;

const user_id = process.env.USER_ID;
const user_key = process.env.USER_KEY;

var mongoose = require('mongoose');
var mongoDB = `mongodb+srv://${user_id}:${user_key}@sandbox.jhgbt.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var indexRouter = require('./routes/index')
var amenityRouter = require('./routes/amenities')


app.use('/',indexRouter);
app.use('/amenity',amenityRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

module.exports = app;
//http://127.0.0.1:8000/factory/paquete%20de%20prueba/20/Nombre/Descripcion/true/false