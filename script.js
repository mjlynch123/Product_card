var cartButton = document.getElementById("add-to-cart");
var description = document.getElementById("description");
var image = document.getElementById("image");
var cart = document.getElementById("cart");
var card = document.getElementById("card");
var cartArea = document.getElementById("cart-area");
var msrp = document.getElementById("msrp");

var inputVal = document.getElementById("number");
var pricing = document.getElementById("pricing");
var totalDiscount = document.getElementById("discount");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var total = document.getElementById("total");
var salesTax = document.getElementById("tax");

var localCard = description.textContent;

var getNum = msrp.textContent.split("");
var splicedNum = getNum.splice(1);
var joined = splicedNum.join("");
var price = joined;

var local = localStorage.getItem("card");
var priceFromStorage = localStorage.getItem("price");

function getPrice() {
  var parsedPrice = parseFloat(priceFromStorage);
  var tax = (parsedPrice * inputVal.value)  * .0509;
  var updatedPrice = (parsedPrice * inputVal.value) + tax;
  var val = inputVal.value;
  var discount;

  totalDiscount.textContent =  " -"
  salesTax.textContent = "$" + tax.toFixed(2);

  if (val >= 100) {
    discount = updatedPrice * .50;
    totalDiscount.textContent =  "$" + discount.toFixed(2);
    
    return (updatedPrice - discount).toFixed(2);
  } else if (val >= 50) {
    discount = updatedPrice * .40;
    totalDiscount.textContent = "$" + discount.toFixed(2);
    salesTax.textContent = "$" + tax.toFixed(2);

    return (updatedPrice - discount).toFixed(2);
  } else if (val > 5) {
    discount = updatedPrice * .30;
    totalDiscount.textContent = "$" + discount.toFixed(2);
    salesTax.textContent = "$" + tax.toFixed(2);

    return (updatedPrice - discount).toFixed(2);
  } else if (inputVal.value > 3) {
    discount = updatedPrice * .20;
    totalDiscount.textContent = "$" + discount.toFixed(2);
    salesTax.textContent = "$" + tax.toFixed(2);

    return (updatedPrice - discount).toFixed(2);
  }
  return updatedPrice.toFixed(2);
}

getPrice();

cartButton.addEventListener("click", function () {
  localStorage.setItem("card", localCard);
  localStorage.setItem("price", price);
});

cart.addEventListener("click", function () {
  card.style.visibility = "hidden";
  cartArea.style.visibility = "visible";

  var item = document.getElementById("item");
  item.textContent = local;

  pricing.textContent = "$125.99";
  total.textContent = "$" + getPrice()
});

plus.addEventListener("click", function () {
  var val = inputVal.value;
  if (inputVal.value < 100) {
    val++;
    inputVal.value = val;
    total.textContent = "$" + getPrice();
  }
});

minus.addEventListener("click", function () {
  var val = inputVal.value;
  if (inputVal.value > 1) {
    val--;
    inputVal.value = val;
    total.textContent = "$" + getPrice();
  }
});

inputVal.addEventListener("keyup", function () {
  var val = inputVal.value;
  if (inputVal.value >= 1) {
    inputVal.value = val;
    total.textContent = "$" + getPrice();
  }
});
