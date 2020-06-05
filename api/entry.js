const mongoose=require('mongoose')
const application_form=mongoose.model('application')
const contact=mongoose.model('contactus')
module.exports=function(app){



app.post('/application_form',(req,res)=>{
console.log(req.body);
application_form_one=new application_form();
application_form_one.firstname=req.body.first;
application_form_one.age=req.body.age
application_form_one.parentfirstname=req.body.parentfirst
application_form_one.parentlastname=req.body.parentlast
application_form_one.city=req.body.city
application_form_one.email=req.body.email
application_form_one.phone=req.body.phone

application_form.findOne({email:req.body.email})
        .then((ih)=>{
            if(ih){

                res.redirect('/')
            }
            else{
                application_form_one.save()
.then(one=>{
console.log(one);
res.redirect('/successful_details')
})
.catch(err=>{console.log("err")})
                
            }
        })


 .catch(err=>{console.log("err")})

})

app.post('/contact-us',(req,res)=>{
contact_one=new contact();

contact_one.name=req.body.name
contact_one.email=req.body.email
contact_one.phone=req.body.phone
contact_one.message=req.body.message
contact_one.save()
.then(one=>{
    res.redirect('/contact-us')
})
.catch(err=>{console.log("err")})


})



}