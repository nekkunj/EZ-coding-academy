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
    app.use('/curriculum',express.static(__dirname+"/public_static/listofcourses.html"))
    app.use('/curriculum/scratch_level_1',express.static(__dirname+"/public_static/courses/scratch_level_one.html"))
    app.use('/curriculum/app_inventor_level_1',express.static(__dirname+"/public_static/courses/app_inventor_level_one.html"))

    app.use('/successful_details',express.static(__dirname+"/public_static/successful_details.html"))
    app.use('/about_us',express.static(__dirname+"/public_static/aboutus.html"))
    app.use('/why-EZ-coding-Academy',express.static(__dirname+"/public_static/whyus.html"))

    app.use('/contact-us',express.static(__dirname+"/public_static/contact_us.html"))
    app.use('/sitemap.xml',express.static(__dirname+"/public_static/sitemap.xml"))

    app.listen(process.env.PORT || 7007,(err)=>{

    console.log("Server Started at http://localhost:7007")
})
