const mongoose=require('mongoose')


var applicationschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:false
    },
    age:{
        type:String,
        required:false
    },
    parentfirstname:{
        type:String,
        required:false
    },
    parentlastname:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:false
    } 
    

});

mongoose.model('application',applicationschema);