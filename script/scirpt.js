$(function(){

    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            $(".scrolltopbtn").fadeIn();
        }else{
            $(".scrolltopbtn").fadeOut();
        }
    });

    $(".scrolltopbtn").click(function(){
        $(window).scrollTop(0);
    });

    
$('.slide').slick({
    dots: false,
    draggable : true,
    autoplay:false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
              

});
