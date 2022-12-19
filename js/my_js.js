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
        
    if (window.pageYOffset > 4000 && window.pageYOffset < 5000){

        var myVar = setInterval(myTimer, 1);


        function myTimer() {
            var num = document.getElementById("counter").innerText;
         
            if(parseFloat(num)===9510){
            // document.getElementById("counter").innerText = "9518"
            clearInterval(myVar);
            } else {
                newnum = (parseFloat(num) + 1).toString();
                // if(newSec<10)
                //     newSec="0" + newnum;
                document.getElementById("counter").innerHTML = newnum;
            }
        }
    }
    if (window.pageYOffset > 200 && window.pageYOffset < height2) {

        $(".product_card").addClass("left-sticky");
    }
    else if(window.pageYOffset > height2 || window.pageYOffset < 200){
        $(".product_card").removeClass("left-sticky");
    }
    // else{
    //     $(".product_card").removeClass("left-sticky");
    // }
    
    
    }



    $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    });
