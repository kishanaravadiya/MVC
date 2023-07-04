const express = require('express');

const port = 9658;

const path = require('path');
const app = express();

const db = require('./confing/mongose');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());


app.use('/',require('./rotues'));

app.listen(port,(err)=>{
    if(err)
    {
        console.log('Sever Not Start');
        return false;
    }
    console.log("Sever is start:-"+port);
});