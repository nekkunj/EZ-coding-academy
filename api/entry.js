const mongoose=require('mongoose')
const application_form=mongoose.model('application')

module.exports=function(app){



app.post('/application_form',(req,res)=>{

application_form_one=new application_form();
application_form_one.firstname=req.body.first;
application_form_one.lastname=req.body.last
application_form_one.parentfirstname=req.body.parentfirst
application_form_one.parentlastname=req.body.parentlast
application_form_one.city=req.body.city
application_form_one.email=req.body.email
application_form_one.phone=req.body.phone
application_form_one.save()
.then(one=>{
console.log('Entered Successfully');
res.redirect('/successful_details')
})
 .catch(err=>{console.log(err)})

})

}