const mongoose=require('mongoose')


var contactusschema=new mongoose.Schema({
    name:{
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
    },
    message:{
        type:String,
        required:false
    },
    
});

mongoose.model('contactus',contactusschema);