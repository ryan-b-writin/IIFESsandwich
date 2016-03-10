// This SandwichMaker IIFE augments the original one
var standard = document.getElementById("standard")
var old = document.getElementById("old")
var industrial = document.getElementById("industrial")

var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
    standard: 4,
    old: 5,
    industrial: 3
  }

  maker.addBread = function(){
    //tabulate prices

    if (standard.checked) {
      SandwichMaker.addTopping(breadPrices.standard);
    };

    if (old.checked) {
      SandwichMaker.addTopping(breadPrices.old);
    };

    if (industrial.checked) {
      SandwichMaker.addTopping(breadPrices.industrial);
    };

    //return price of selected toppings
    return SandwichMaker.getPrice();
  }
  
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);