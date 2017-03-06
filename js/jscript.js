 $(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#first-para');
  var offset = startchange.offset();
  
  var scrollFxn = function(){  
  if (startchange.length){
    $(document).scroll(function() {

      scroll_start = $(window).scrollTop();
      if(scroll_start > (offset.top)-100) {
        $('.header-style').css('min-height','80px');
        $('.logo').css('padding','0px 0px');
        $('.nav-bar ul').css('margin','0px 0px 0px');
        $('.logo').addClass('small-logo');
        
       } else {
     
          $('.header-style').css('min-height','220px');
        $('.logo').css('padding','30px 0px 20px');
        $('.nav-bar ul').css('margin','65px 0px 10px');
         $('.logo').removeClass('small-logo');
        


          
       }
   });
    }
    $(window).scrollTop(scroll_start);
  }
  scrollFxn();
   });