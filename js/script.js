//user logic

//Nav-bar sticky and transparent function

// Navbar Transparent
(function ($) {

    var navbar = $('.navbar');
    var lastScrollTop = 0;

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            navbar.fadeIn();
            navbar.removeClass('navbar-dark bg-transparent').addClass('navbar-light bg-custom');
        } 
        else if(st < lastScrollTop && st > 200) {
            navbar.removeClass('navbar-dark bg-transparent').addClass('navbar-light bg-custom');
        }
        else {
            navbar.removeClass('navbar-light bg-custom').addClass('navbar-dark bg-transparent');
        }
        lastScrollTop = st;
    });

});

