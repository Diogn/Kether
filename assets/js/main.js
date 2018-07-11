$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 450);
  $('dropdown-menu').toggleClass('changed', $(this).scrollTop() > 450);
  $('dropdown-menu').toggleClass('scrolled', $(this).scrollTop() > 450);
});

$(window).close(function(){
  $('dropdown-menu').toggleClass('')
})

// $(document).ready(function() {
//   var scroll_start = 0;
//   var startchange = $('.dropdown-menu').click();
//   var offset = startchange.offset();
//   if (startchange.length) {
//     $(document).scroll(function(){
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top ) {
//         $(".dropdown-menu").css('background-color', 'grey');
//       } else {
//         $(".navbar-default").css('background-color', 'transparent');
//       }
//     });
//   }
// });