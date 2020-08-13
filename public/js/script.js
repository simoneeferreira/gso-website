$(document).ready(function(){
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 50) {
        $(".blue").css("background" , "#EFF1F4");
        $(".logo-menu").css("visibility", "visible");
        navbar.classList.remove('border-bottom');
        navbar.classList.add('shadow');
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
        
      }

      else{
          $(".blue").css("background" , "transparent");
          $(".logo-menu").css("visibility", "hidden");  
          navbar.classList.remove('shadow');
          navbar.classList.add('border-bottom');
          navbar.classList.remove('navbar-light');
          navbar.classList.add('navbar-dark');
            
      }
  })
})


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});