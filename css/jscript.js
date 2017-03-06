 $(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#first-para');
  var offset = startchange.offset();
  
  var scrollFxn = function(){  
  if (startchange.length){
    $(document).scroll(function() {

      scroll_start = $(window).scrollTop();
      if(scroll_start > (offset.top)) {
        $('.header-style').css('height','100px');
        $('.logo').css('padding','10px 0px');
        $('nav-bar ul').css('margin','10px 0px');
        
       } else {
     
          $('.header-style').css('height','220px');
        $('.logo').css('padding','3px 0px 20px');
        $('nav-bar ul').css('margin','65px 0px 10px');



          
       }
   });
    }
    $(window).scrollTop(scroll_start);
  }
  scrollFxn();
   });