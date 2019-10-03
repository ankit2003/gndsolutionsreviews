 var didScroll;
 var lastScrollTop = 0;
 var delta = 5;
 var navbarHeight = $('.collapse').outerHeight();

 $(window).scroll(function(event) {
     didScroll = true;
 });

 setInterval(function() {
     if (didScroll) {
         hasScrolled();
         didScroll = false;
     }
 }, 50);

 function hasScrolled() {
     var st = $(this).scrollTop();

     // Make sure they scroll more than delta
     if (Math.abs(lastScrollTop - st) <= delta)
         return;

     // If they scrolled down and are past the navbar, add class .nav-up.
     // This is necessary so you never see what is "behind" the navbar.
     if (st > lastScrollTop && st > navbarHeight) {
         // Scroll Down
         $('.collapse').removeClass('navbar-collapse').addClass('nav-up');
     } else {
         // Scroll Up
         if (st + $(window).height() < $(document).height()) {
             $('.collapse').removeClass('nav-up').addClass('navbar-collapse');
         }
     }

     lastScrollTop = st;
 }