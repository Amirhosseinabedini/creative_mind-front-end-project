///  mega menu
$(function () {
    'use strict'

  $("[data-trigger]").on("click", function(){
      var trigger_id =  $(this).attr('data-trigger');
      $(trigger_id).toggleClass("show");
      $('body').toggleClass("offcanvas-active");
  });

  // close if press ESC button 
  $(document).on('keydown', function(event) {
      if(event.keyCode === 27) {
         $(".navbar-collapse").removeClass("show");
         $("body").removeClass("overlay-active");
      }
  });

  // close button 
  $(".btn-close").click(function(e){
      $(".navbar-collapse").removeClass("show");
      $("body").removeClass("offcanvas-active");
  }); 


})





	 
	
$(function () {
    $('.toggle-menu').click(function(){
       $('.exo-menu').toggleClass('display');
       
    });
    
});
   
     






   window.onscroll = function() {
       var height = $(document).height();
       var height2 = height - 2090;
    
    if (window.pageYOffset > 200 && window.pageYOffset < height2) {

        $("#product-id-js").addClass("left-sticky");
    }
    else if(window.pageYOffset > height2 || window.pageYOffset < 200){
        $("#product-id-js").removeClass("left-sticky");
    }
    // else{
    //     $("#product-id-js").removeClass("left-sticky");
    // }
    
    
    }



    $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    });



    $(document).ready(function () {
        $('.skill-box').find('b').each(function (i) {
          return $(this).prop('Counter', 0).animate({
            Counter: $(this).parent().data('percent')
          }, {
            duration: 1000,
            easing: 'swing',
            step(now) {
              return $(this).text(Math.ceil(now) + '%');
            }
          });
        });
      
        return $('.skill-box .skills-circle li').each(function (i) {
          const _right = $(this).find('.bar-circle-right');
          const _left = $(this).find('.bar-circle-left');
          const _percent = $(this).attr('data-percent');
          let deg = 3.6 * _percent;
          if (_percent <= 50) {
            return _right.animate({
              circle_rotate: deg
            }, {
              step(deg) {
                $(this).css('transform', `rotate(${deg}deg)`);
              },
              duration: 1000
            });
          } else {
            const full_deg = 180;
            deg -= full_deg;
            let run_duration = 1000 * (50 / _percent);
            return _right.animate({
              circle_rotate: full_deg
            }, {
              step(full_deg) {
                $(this).css('transform', `rotate(${full_deg}deg)`);
              },
              duration: run_duration,
              easing: 'linear',
              complete() {
                run_duration -= 1000;
                _left.css({
                  'clip': 'rect(0, 150px, 150px, 75px)',
                  'background': '#5c8865'
                });
                return _left.animate({
                  circle_rotate: deg
                }, {
                  step(deg) {
                    $(this).css('transform', `rotate(${deg}deg)`);
                  },
                  duration: Math.abs(run_duration),
                  easing: 'linear'
                });
              }
            });
          }
        });
      });