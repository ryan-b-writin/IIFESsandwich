var checkbox = document.getElementsByTagName("input");
var clickHere = document.getElementById("clickHere");
var outputTarget = document.getElementById("outputTarget");
var priceTarget = document.getElementById("priceTarget");

var breadBoxes = document.getElementsByClassName("bread");
var meatBoxes = document.getElementsByClassName("meat");
var cheeseBoxes = document.getElementsByClassName("cheese");
var condimentBoxes = document.getElementsByClassName("condiments");
var veggieBoxes = document.getElementsByClassName("veggies");

var breadClear = document.getElementById("breadClear");
var meatClear = document.getElementById("meatClear");
var cheeseClear = document.getElementsByClassName("cheeseClear");
var condimentClear = document.getElementById("condimentClear");
var veggieClear = document.getElementById("veggieClear");

//when you click a "no bread/cheese/whatever" clear the other checkboxes
for (var i=0; i<checkbox.length;i++) {
  checkbox[i].addEventListener("click", function(){
    if (this.value === "nobread") {
      for (var j=0;j<breadBoxes.length;j++)
      breadBoxes[j].checked = false;
    } else if (this.value === "nomeat") {
      for (var j=0;j<meatBoxes.length;j++)
      meatBoxes[j].checked = false;
    } else if (this.value === "nocheese") {
      for (var j=0;j<cheeseBoxes.length;j++)
      cheeseBoxes[j].checked = false;
    } else if (this.value === "nocondiments") {
      for (var j=0;j<condimentBoxes.length;j++)
      condimentBoxes[j].checked = false;
    } else if (this.value === "noveggies") {
      for (var j=0;j<veggieBoxes.length;j++)
      veggieBoxes[j].checked = false;
    } 
  })
}

//when you make a selection, deselect clear options
for (var i=0; i<breadBoxes.length; i++) {
  breadBoxes[i].addEventListener("click", function(){
    breadClear.checked = false;
  })
}
for (var i=0; i<meatBoxes.length; i++) {
  meatBoxes[i].addEventListener("click", function(){
    meatClear.checked = false;
  })
}
for (var i=0; i<cheeseBoxes.length; i++) {
  cheeseBoxes[i].addEventListener("click", function(){
    for (var j=0; j<cheeseClear.length; j++) {
      cheeseClear[j].checked = false;
    }
  })
}
for (var i=0; i<condimentBoxes.length; i++) {
  condimentBoxes[i].addEventListener("click", function(){
    condimentClear.checked = false;
  })
}
for (var i=0; i<veggieBoxes.length; i++) {
  veggieBoxes[i].addEventListener("click", function(){
    veggieClear.checked = false;
  })
}

//display sandwich & price on click
outputTarget.addEventListener("click", function(){

  // Add topping prices
  SandwichMaker.addMeat();
  SandwichMaker.addBread();
  SandwichMaker.addCheese();
  SandwichMaker.addCondiments();
  SandwichMaker.addVeggies();

  //print out final price
  priceTarget.innerHTML = "Your sandwich costs: $"+SandwichMaker.getPrice();
  clickHere.innerHTML = "Click again for seconds!!"

  //zero out price for next click
  SandwichMaker.zero();
});


