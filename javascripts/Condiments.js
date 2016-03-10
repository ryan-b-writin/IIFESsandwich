// This SandwichMaker IIFE augments the original one
var red = document.getElementById("red")
var blue = document.getElementById("blue")
var black = document.getElementById("black")

var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = {
    red: 4,
    blue: 5,
    black: 3
  }

  maker.addCondiments = function(){
    //tabulate prices

    if (red.checked) {
      SandwichMaker.addTopping(condimentPrices.red);
    };

    if (blue.checked) {
      SandwichMaker.addTopping(condimentPrices.blue);
    };

    if (black.checked) {
      SandwichMaker.addTopping(condimentPrices.black);
    };

    //return price of selected toppings
    return SandwichMaker.getPrice();
  }
  
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);