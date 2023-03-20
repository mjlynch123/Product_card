var cartButton = document.getElementById("add-to-cart");
var description = document.getElementById("description");
var image = document.getElementById("image");
var cart = document.getElementById("cart");
var card = document.getElementById("card");
var cartArea = document.getElementById("cart-area");
var msrp = document.getElementById("msrp");

// getting the computed style of image so that we can get the background image of the element
var computedStyle = getComputedStyle(image);
var backgroundImage = computedStyle.backgroundImage;

var localCard = description.textContent;
var localImage = backgroundImage;

var getNum = msrp.textContent.split("");
var splicedNum = getNum.splice(1);
var joined = splicedNum.join("");
var price = joined;

cartButton.addEventListener("click", function () {
  localStorage.setItem("card", localCard);
  localStorage.setItem("image", localImage);
  localStorage.setItem("price", price);
});

cart.addEventListener("click", function () {
  card.style.visibility = "hidden";
  cartArea.style.visibility = "visible";

  var local = localStorage.getItem("card");
  var imageFromLocal = localStorage.getItem("image");
  var priceFromStorage = localStorage.getItem("price");

  var smallerImg = document.getElementById("smaller-img");
  smallerImg.style.backgroundImage = imageFromLocal;
  
});
