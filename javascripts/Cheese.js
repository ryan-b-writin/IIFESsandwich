// This SandwichMaker IIFE augments the original one
var cheese = document.getElementById("yes")

var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
    yes: 10,
  }

  maker.addCheese = function(){
    //tabulate prices
    if (cheese.checked) {
      SandwichMaker.addTopping(cheesePrices.yes);
    };

    //return price of selected toppings
    return SandwichMaker.getPrice();
  }
  
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);