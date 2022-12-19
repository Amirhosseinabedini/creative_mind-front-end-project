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
       var height2 = height - 2180;
    
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
