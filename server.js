const express = require("express")
//   const art=require('express-ejs-layouts')
    const app = express();
    const passport = require('passport');
    const session=require('express-session')
    const crypto = require('crypto');
   
    require('./models/db');
    const path=require('path')

    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true }));

    require('./api/entry')(app);

    app.use(session({
        secret:'secret',
        resave:true,
        saveUninitialized:true
    }));
    app.use(express.static(__dirname + '/public'));
    app.use('/',express.static(__dirname+"/public_static"))
    app.use('/courses',express.static(__dirname+"/public_static/courses.html"))

    app.use('/successful_details',express.static(__dirname+"/public_static/successful_details.html"))


    app.listen(process.env.PORT || 7007,(err)=>{

    console.log("Server Started at http://localhost:7007")
})