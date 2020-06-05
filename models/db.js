const mongoose=require('mongoose')
const db=require('../config/keys').mongoURI
mongoose.connect(db,{useNewUrlParser:true},(err)=>{
    if(!err){console.log('MongoDB connection succeeded')}
    else{console.log('Error in DB connection' + err)}
}  )


require('./application.model')
require('./contactus.model')


