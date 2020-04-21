// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //set the price variable acessing the price cell > span > innerText
  let $price = product.querySelector('.price span');
  //change the string to a number
  const priceValue = Number($price.innerText);
  //set the quantity value to access the value inputed by the user
  const $quantity = product.querySelector('.quantity input');
  const quantityValue = $quantity.valueAsNumber;
  //multuplying both to get a subtotal
  const subtotal = priceValue * quantityValue;
  //use the subtotal to change the visual subtotal
  const $subtotalArea = product.querySelector('.subtotal span');
  $subtotalArea.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  const allProducts = document.querySelector(".product");
  console.log(allProducts);

  updateSubtotal(allProduct);
  const $subtotal = produtct.querySelector(".subtotal span");
  const $subtotal = $subtotal.innerText;
  const $total = product.querySelector("$total-value span");
  $total.innerText = $subtotal;

  // ITERATION 2
  //... your code goes here
  const inputPriceQuantity = function () {
    
    }


  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
