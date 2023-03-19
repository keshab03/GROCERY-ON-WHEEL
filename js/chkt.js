$(function(){

  var nbCircle = $('.progressCheckOut-number').length;
  var jumpCircle = 100/nbCircle;
  var count = 0;
  var r = $("circle").attr('r'); //radius of the circle
  var c = 2 * Math.PI * r; //circumference of the circle
  
  toNextStep();
  toPrevStep();
  
  function toNextStep() {
   $('.next').click(function(){ 
    $('.progressCheckOut-step').each(function(){
      if($(this).hasClass('progressCheckOut-step--active')) {
        $(this).removeClass('progressCheckOut-step--active');
        $(this).addClass('progressCheckOut-step--past');
        $(this).next().addClass('progressCheckOut-step--active');
        //if ($(window).width() < 800) {
          $('html, body').animate({
            scrollTop: $(this).next().offset().top-30
          }, 800);
        //}
        animCircle();
        return false; 
      }
    });
   });  
  }
  function toPrevStep() {
   $('.prev').click(function(){ 
    $('.progressCheckOut-step').each(function(){
      if($(this).hasClass('progressCheckOut-step--active')) {
        $(this).removeClass('progressCheckOut-step--active progressCheckOut-step--past');
        $(this).prev().addClass('progressCheckOut-step--active');
        //if ($(window).width() < 800) {
          $('html, body').animate({
            scrollTop: $(this).prev().offset().top-30
          }, 800);
        //}
        animCircle();
        return false; 
      }
    });
   });  
  }
  
  $('.progressCheckOut-header').click(function(){
    $('.progressCheckOut-step').removeClass('progressCheckOut-step--active');
    $('.progressCheckOut-step').removeClass('progressCheckOut-step--past');
    $(this).parent().addClass('progressCheckOut-step--active');
    //if ($(window).width() < 800) {
      $('html, body').animate({
        scrollTop: $(this).parent().offset().top-10
      }, 800);
    //}
    animCircle();
  });
  
  $(".progressCheckOut-value").each(function(){
    count++;
    $(this).text(count);
    //$(this).parent().next().text("Name of step "+count);
  });
  
  var countCircle = 0;
  animCircle();
  function animCircle() {
    $('.progressCheckOut-progress').each(function(){
     countCircle++;
     dashoffset = c * ( 1 - (jumpCircle*countCircle)/100) ;
     console.log(dashoffset);
      $(this).css({
       strokeDasharray : c,
      strokeDashoffset : dashoffset      
     });
  });
  }

});