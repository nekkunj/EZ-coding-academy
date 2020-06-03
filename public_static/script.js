$(()=>{


var review=["Hey guys welcome to my channel","Hey channel welcome to my guys","Hey channel welcome to my guys","Hey channel welcome to my guys","Hey channel welcome to my guys"];



    $('.parent_review').append(`<ul  class="carousel-indicators"></ul>`)
    $('.carousel-indicators').append(` <li data-target="#demo" data-slide-to="1" class="active"></li>`);
    for(var i=2;i<=5;i++){
        $('.carousel-indicators').append(` <li data-target="#demo"  data-slide-to="${i}"></li>`);
    }
    $('.parent_review').append(`<div class="carousel-inner">
    <div class="carousel-item active">
      <div class="" style="background-color: orange;margin-top:10%;margin-bottom:10%;margin-left:25%;margin-right:25%">${review[0]}</div>
    </div>`)
    for(var i=1;i<5;i++){

        $('.parent_review').append(`<div class="carousel-inner">
    <div class="carousel-item">
    ${review[i]}
    </div>`)

}

    $('.parent_review').append(`<a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>`)

})