const express = require('express');

const roturs = express.Router();

const Admincontroller = require('../controllers/Admincontroller');

roturs.get('/',Admincontroller.index);
roturs.post('/insertdata',Admincontroller.insertdata);
roturs.get('/viewData',Admincontroller.viewData);
roturs.get('/DeletData/:id',Admincontroller.deletdata);
roturs.get('/EditData/:id',Admincontroller.Editdata);
roturs.post('/UpdateData',Admincontroller.UpdateData);


module.exports = roturs;