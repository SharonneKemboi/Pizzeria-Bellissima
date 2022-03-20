//user logic

//Nav-bar sticky and transparent function

// Navbar Transparent
(function ($) {

    var navbar = $('.navbar');
    var scrollTop = 0;

    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > scrollTop) {
            navbar.fadeIn();
            navbar.removeClass('navbar-dark bg-transparent').addClass('navbar-light bg-custom');
        } 
        else if(st < scrollTop && st > 200) {
            navbar.removeClass('navbar-dark bg-transparent').addClass('navbar-light bg-custom');
        }
        else {
            navbar.removeClass('navbar-light bg-custom').addClass('navbar-dark bg-transparent');
        }
        scrollTop = scroll;
    });

});
// constructor pizza
function Pizza(crust, size) {
    this.crust = crust;
    this.size = size;
    this.toppings = [];
    this.price = 0;
  }

