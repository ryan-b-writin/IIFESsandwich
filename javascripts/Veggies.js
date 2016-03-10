// This SandwichMaker IIFE augments the original one
var carrots = document.getElementById("carrots")
var broccoli = document.getElementById("broccoli")
var turnips = document.getElementById("turnips")

var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {
    carrots: 4,
    broccoli: 5,
    turnips: 3
  }

  maker.addVeggies = function(){
    //tabulate prices

    if (carrots.checked) {
      SandwichMaker.addTopping(veggiePrices.carrots);
    };

    if (broccoli.checked) {
      SandwichMaker.addTopping(veggiePrices.broccoli);
    };

    if (turnips.checked) {
      SandwichMaker.addTopping(veggiePrices.turnips);
    };

    //return price of selected toppings
    return SandwichMaker.getPrice();
  }
  
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);