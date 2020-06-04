const mongoose=require('mongoose')


var applicationschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    parentfirstname:{
        type:String,
        required:true
    },
    parentlastname:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    } 
    

});

mongoose.model('application',applicationschema);