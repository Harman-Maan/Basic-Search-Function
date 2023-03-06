// Search Funtion is at line 67.

// All the "pre-existing" elements targeted from html
const productList = document.getElementById("product-list");

// Array holding all the parameters required for Product class
let productDetails = [
  ["Black Tshirt", "$55", "Images/Tshirt1.jpg"],
  ["Smart Watch", "$399", "Images/Watch1.jpg"],
  ["Glasses", "$50", "Images/ComputerGlasses1.jpg"],
  ["Blue Shoes", "$99", "Images/Shoes2.jpg"],
  ["Casual Trousers", "$89", "Images/CasualTrousers.webp"],
  ["White Tshirt", "$45", "Images/Tshirt2.jpg"],
  ["Sneakers", "$199", "Images/Shoes1.jpg"],
  ["Royal Ron", "$118", "Images/ComputerGlasses2.jpg"],
  ["Hiking Bag", "$459", "Images/HikingBag.jpg"],
  ["Classic Watch", "$179", "Images/Watch2.jpg"],
  ["Track Pants", "$285", "Images/TrackPants.webp"],
];

// Product class will take information and create a product div, along with its contents and assign them given parameters
class Product {
  constructor(name, price, imageSrc) {
    this.name = name;
    this.imageSrc = imageSrc;
    this.price = price;
  }

  createProduct() {
    //creating the main product div and appending it to productList
    let product = document.createElement("div");
    product.classList.add("product");
    productList.appendChild(product);

    //creating the image and appending it to product div
    let image = new Image();
    image.src = this.imageSrc;
    product.appendChild(image);

    //creating the details div to hold the product name and price, along with appending it to product div
    let details = document.createElement("div");
    details.classList.add("details");
    product.appendChild(details);

    //creating the productName and appending it to details div
    let productName = document.createElement("div");
    productName.classList.add("productName");
    productName.textContent = this.name;
    details.appendChild(productName);

    //creating the productPrice and appending it to details div
    let productPrice = document.createElement("div");
    productPrice.classList.add("productPrice");
    productPrice.textContent = this.price;
    details.appendChild(productPrice);
  }
}

// To execute the above createProduct function inside the Product class and it takes the nested arrays in productDetails as parameters.
for (let i = 0; i < productDetails.length; i++) {
  let product = new Product(...productDetails[i]);
  product.createProduct();
}

//Search Function
//Storing all the elements with class of productName and product
const productNames = document.querySelectorAll(".productName");
const products = document.querySelectorAll(".product");

// This function will be called whenever user types in something and it is specified in index.html file.
function search() {
  //Takes what user has typed in and stores it in searchBox variable
  const searchBox = document.getElementById("searchItem").value;

  // It make every thnng visible again so that the next part can work properly. In other words, it resets the search.
  for (let i = 0; i < products.length; i++) {
    products[i].style.display = "flex";
  }

  //Here value of searchBox is conterted into a Regular Expression(regex)
  var regex = new RegExp(searchBox, "i");

  //Checks and removes the products that doesn't match the search
  for (let i = 0; i < productNames.length; i++) {
    if (!regex.test(productNames[i].innerHTML)) {
      products[i].style.display = "none";
    }
  }
}
