AOS.init();
$(document).ready(function(){
  $('.slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  });
  
});
$(document).ready(function(){
  var n=1;
  $('.fix').click(function(){
    if(n==1){
       $(".show_right").css({"right":"-210px"});
      $(".show_left").css({"left":"-210px"});
      $("h1").css({"opacity":"0"});
      $(".btn").css({"opacity":"8"});
      $(".category").css({"opacity":"8"});
      $(".main_category").css({"opacity":"8"});
      n=0;
    }
    else{
      $(".show_right").css({"right":"0px"});
      $(".show_left").css({"left":"0px"});
      $("h1").css({"opacity":"8"});
      $(".btn").css({"opacity":"0"});
      $(".category").css({"opacity":"0"});
      $(".main_category").css({"opacity":"0"});
      n=1;
    }
     
  });
});