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
        else if(scrollTop< scrollTop && scrollTop > 200) {
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
      price += 5;
    } else if (this.size === "Medium") {
      price += 8;
    } else if (this.size === "Large") {
      price += 15;
    } else {
      price+= 20;
    }

  
    for (var i = 0; i < this.toppings.length; i++) {
      price += 2;
    }
    if (this.crust === "Cripsy"){
        price += 2;
    }else if (this.crust=== "Stuffed") {
        price += 3;
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

//UI logic

  $(document).ready(function() {
    var total = 0;
    $(".cartTotal").text(total);
    $("#pizzaForm").submit(function(event) {
        event.preventDefault();
        var crust = $("#crust").val();
        var size = $("#size").val();
        var newPizza = new Pizza(crust, size);
    
        $("input:checkbox[name=topping]:checked").each(function() {
          var toppingChoice = $(this).val();
          newPizza.toppings.push(toppingChoice);
        });
    
        newPizza.cost();
        total += newPizza.price;
    
        $(".cartTotal").text(total);
        $(".cartmyCart").show();;
        $("#cartHeader").show();
        $("ol#cart").append("<li><span class='cartItem'>" + newPizza.size + " " + newPizza.crust + " Pizza" + "</span></li>");
    
        $(".cartItem").last().click(function() {
          $("#show-pizza").show();
          $("#pizzaListName").text(newPizza.size + " " + newPizza.crust + " Pizza");
          $(".size").text(newPizza.size);
          $(".crust").text(newPizza.crust);
          $(".toppings").text(newPizza.toppingsList());
          $(".cost").text(newPizza.price);
        });
        $("#pizzaForm")[0].reset();
      });

      $("button#submitCart").click(function() {
        $(".pizzare").hide();
        $("button#submitCart").hide();
        $(".choicemyCart"). show();
      });
    
      $("button#pickup").click(function() {
        $(".choicemyCart").hide();
        $(".pickupmyCart").show();
      });
    
      $("button#delivery").click(function() {
        total += 5;
        $(".cartTotal").text(total);
        $(".choicemyCart").hide();
        $(".deliverymyCart").show();
      });
    
      $("button#submitPickupForm").click(function() {
        var userName = $("input#pickupName").val();
        $(".nameInput").text(userName);
        $("form#pickupForm").hide();
        $("#pickupEnd").show()
        if((pickUpForm)===""){
            return "Please enter your details"
        }
      });
    
      $("button#submitDeliveryForm").click(function() {
        var userName = $("input#deliveryName").val();
        var address = $("input#address").val();
        var city = $("input#city").val();
        var county = $("input#county").val();
        $(".nameInput").text(userName);
        $(".addressInput").text(address + ", " + city + " " + county);
        $("form#deliveryForm").hide();
        $("#deliveryEnd").show();
      });
    
      $("button.reset").click(function() {
        location.reload();
      });

      //form validation

      $("form#form").submit(function(event){
        // event.preventDefault();
       var name = $("input#name").val();
       var email = $("input#email").val();
       var message = $("textarea#message").val();

       if ($("input#name").val() && $("input#email").val()){
       alert ("Hola  " + name + ", we have received your Message. Thank you for reaching out to Pizzeria Bellissimo, We shall get back to you ASAP!!");
       }
       else {
           alert("Please enter your name and email!");
       }
         
   });


    });

    
   
  
