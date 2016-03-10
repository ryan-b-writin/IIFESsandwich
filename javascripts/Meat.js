// This SandwichMaker IIFE augments the original one
var turkey = document.getElementById("turkey")
var superTurkey = document.getElementById("superTurkey")
var goat = document.getElementById("goat")

var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
    turkey: 4,
    superTurkey: 5,
    goat: 3
  }

  maker.addMeat = function(){
    //tabulate prices
    var meatPrice = 0;

    if (turkey.checked) {
      SandwichMaker.addTopping(meatPrices.turkey);
    };

    if (superTurkey.checked) {
      SandwichMaker.addTopping(meatPrices.superTurkey);
    };

    if (goat.checked) {
      SandwichMaker.addTopping(meatPrices.goat);
    };

    //return price of selected toppings
    return SandwichMaker.getPrice();
  }
  
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);