$(window).scroll(function () {
  var currentscrollTop = window.scrollY
  if (currentscrollTop >= 500) {
     
          $('.nav').addClass('navdip')
          
          
 
    
  } else {
    $('.nav').removeClass('navdip')
  }
})

$(".click").click(function(){
$(".mid").toggleClass("mid2");
});