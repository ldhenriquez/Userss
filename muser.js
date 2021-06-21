 const mongoose = require('mongoose'); 
 const { String } = require('mongoose/lib/schema/index'); 
const ObjectId = require('mongoose/lib/schema/objectid');

/* const {ObjectId} = require('mongoose/lib/schema/index'); */

const userschema = mongoose.Schema({
       
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    identification:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        default: Date.now()
    } 
    
});

module.exports = mongoose.model('user', userschema);