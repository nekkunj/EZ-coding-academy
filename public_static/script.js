$(()=>{


var review=["The EZ Coding Academy app development course is a great experience for kids. The course is easily accessible from home with one on one instruction online. The curriculum is well structured for all experience levels. My 10 year old had blast creating her first app.  A must try for kids to learn fundamentals of coding--logic, sequence, structure & algorithmic thinking to enable creative expression! <br><br><b 'float:left;'>By: Brandon</b>",
"My eight-year-old son, Nolan, was beyond excited for his first video game making lesson. Instructor and the lesson did not disappoint! Instructor was so knowledgeable, kind and PATIENT with our little man. Nolan had so much fun and learned a ton. An absolutely awesome experience...he CAN’T WAIT for his next lesson!!! <br><br><b 'float:left;'>By: Ryan Hurley</b>",
"My 13 year old son took app development classes and my 9 year old son takes scratch classes. They both have learned a lot and enjoy their classes. Both kids encourage their friends to join too so they can compete in hackathons together. The instructors are very nice and have generally been consistent over the whole course duration. The homework assignments can be challenging, which is a good thing from my perspective. In the current environment I’m particularly grateful for these classes. I’ll recommended EZ Coding Academy to others as well. <br><br><b 'float:left;'>By: Chao-xing</b>",
"The perfect educational experience for my 10 year old who thrives in this type of positive, highly engaging, intellectually challenging, one on one environment. <br><br><b 'float:left;'>By: Kevin James</b>",
"My kid really loves these sessions, they are one of the highlights of his week. He's always excited to show me what he's worked on, and after only three lessons he has learned WAY more than I could have taught him myself on the scratch platform.  <br><br><b 'float:left;'>By: Prerna Goel </b>"];



    $('.parent_review').append(`<ul  class="carousel-indicators"></ul>`)
    $('.carousel-indicators').append(` <li data-target="#demo" data-slide-to="0" class="active"></li>`);
    for(var i=1;i<5;i++){
        $('.carousel-indicators').append(` <li data-target="#demo"  data-slide-to="${i}"></li>`);
    }
    $('.parent_review').append(`<div class="carousel-inner p-3 col-12 col-lg-6 col-md-8 " >
    <div class="carousel-item active p-3 " style="background-color: rgb(255,208,47);border-radius:10px;text-align:left;font-size:18px">
      ${review[0]}
    </div>`)
    for(var i=1;i<5;i++){

        $('.carousel-inner').append(`
    <div class="carousel-item p-3 " style="background-color: rgb(255,208,47);border-radius:10px;text-align:left;font-size:18px">
    ${review[i]}
    </div>`)

}
$('.parent_review').append(`</div>`)

    $('.parent_review').append(`<a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>`)

})  