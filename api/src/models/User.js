const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:'String',
        required: true
    },
    password:{
        type:'String',
        required:true
    },
    email:{
        type: 'String', //'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
        required: true
    },
    name:{
        type: 'String',
        required: true
    },
    lastname:{
        type: 'String',
        required: true
    },
    phone:{
        type: 'Number',
        required: false
    },
    country:{
        type: 'String',
        required: false
    },
    role: {
        type: 'String',
        required: true
    }

})

module.exports = mongoose.model("User", userSchema);