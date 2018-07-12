// Navbar Bg-color changed when scrolled down
$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 450);
});

window.setTimeout(function(){
  $(".navbar-collapse").fadeTo(500,0).slideUp(500, function() {
    $(this).remove();
  });
}, 2000);