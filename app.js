const express = require('express')
const app = express();
const port = 8000;

var indexRouter = require('./apis/index')

app.use('/',indexRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

module.exports = app;