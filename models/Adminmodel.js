const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    S_name : {
        type : String,
        required : true
    },
    S_phone : {
        type : Number,
        required : true
    },
    S_email : {
        type : String,
        required : true
    },
    S_password : {
        type : String,
        required : true
    },
});

const admin = mongoose.model('studentbl',AdminSchema);
module.exports = admin;

