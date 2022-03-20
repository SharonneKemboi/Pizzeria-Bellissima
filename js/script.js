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

//Business logic
// constructor pizza
function Pizza(crust, size) {
    this.crust = crust;
    this.size = size;
    this.toppings = [];
    this.price = 0;
  }
//protoptype

  Pizza.prototype.cost = function() {
    var price = 0;
    if (this.size === "Small") {
      price += 7;
    } else if (this.size === "Medium") {
      price += 9;
    } else if (this.size === "Large") {
      price += 11;
    } else {
      price+= 16;
    }

  
    for (var i = 0; i < this.toppings.length; i++) {
      price += 2;
    }
    if (this.crust === "Cripsy"){
        price += 2;
    }else if (this.crust=== "Stuffed") {
        price += 1.5;
    }else {
        price += 1;
    }
    this.price = price;
  }
  Pizza.prototype.toppingsList = function() {
    if (this.toppings.length > 0) {
        return this.toppings.join(", ");
    } else {
      return "None";
    }
  }


  