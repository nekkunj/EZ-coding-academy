const express = require("express")
//   const art=require('express-ejs-layouts')
    const app = express();
    const passport = require('passport');
    const session=require('express-session')
    const crypto = require('crypto');
   
   


    app.use('/',express.static(__dirname+"/public_static"))
    app.listen(7007,(err)=>{

    console.log("Server Started at http://localhost:7007")
})