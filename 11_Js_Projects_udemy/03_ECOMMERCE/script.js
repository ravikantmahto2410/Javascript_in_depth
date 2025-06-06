document.addEventListener('DOMContentLoaded', () => {
  const products = [
    {id: 1, name: "Product 1", price: 29.99},
    {id: 2, name: "Product 2", price: 19.99},
    {id: 3, name: "Product 3", price: 50.99},
    
  ];

  const cart = [] // we will keep on pushing the above objects in the cart as the button is being is clicked

  const productList = document.getElementById('product-list')
  const cartItems = document.getElementById('cart-items')
  const emptyCartMessage = document.getElementById('empty-cart')
  const cartTotalMessage = document.getElementById('cart-total')
  const totalPriceDisplay = document.getElementById('total-price')
  const checkOutBtn = document.getElementById('checkout-btn')
  const removeItem = document.getElementById('removeItem-btn')

  products.forEach(product => {
    const productDiv = document.createElement('div')
    productDiv.classList.add('product') // this product is class coming from css part

    //now we need to inject some elements in it ,we can add both that is textContent, and  also we can use innerHTML
    productDiv.innerHTML = `
    <span>${product.name} - ${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to Cart</button>
    `
    productList.appendChild(productDiv)
  })

  productList.addEventListener('click' , (e) => {
    if(e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"))
      const product = products.find(p => p.id === productId)
      addToCart(product)
    }
  })

  function addToCart(product){
    cart.push(product)
    renderCart();
  }

  let overAllPrice = 0;

  function renderCart(){
    cartItems.innerText = "";
    let totalPrice = 0;
    
    if(cart.length > 0){
      emptyCartMessage.classList.add('hidden')
      cartTotalMessage.classList.remove('hidden')

      cart.forEach((item, index) => {
        totalPrice += item.price

        const cartItem = document.createElement('div')
        cartItem.classList.add('removeProduct')
        cartItem.innerHTML = `
        ${item.name} - ${item.price.toFixed(2)}
        <button data-id="${item.id}">Remove</button>
        `
        cartItems.appendChild(cartItem)
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`
        overAllPrice = totalPrice;
      })

    } else {
      emptyCartMessage.classList.remove("hidden")
      totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`
      
    }
  }

  cartItems.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
      const productId = parseInt(e.target.getAttribute('data-id'));
      const removeItem = cart.find(item => item.id === productId);
      removeCart(removeItem)
    }
  })

  function removeCart(removeItem){

    cartItems.innerText = "";
    let totalPrice = 0;
    
    const deleteItem = removeItem
    
    // console.log(deleteItem);
    // console.log(remainingCart)
    
    
    if(cart.length > 0){
      emptyCartMessage.classList.add('hidden')
      cartTotalMessage.classList.remove('hidden')

      cart.forEach((item, index) => {
        if(item.id === deleteItem.id){
          const remainingCart = cart.splice(index,1)
          
        }
      
      })
      if(cart.length === 0){
        cartItems.innerText = "";
        totalPrice = 0;
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`
        cartTotalMessage.classList.remove('hidden')
      }
      else{
        cart.forEach((item,index) => {
          totalPrice += item.price
        
          const cartItem = document.createElement('div')
          cartItem.classList.add('removeProduct')
          cartItem.innerHTML = `
          ${item.name} - ${item.price.toFixed(2)}
          <button data-id="${item.id}">Remove</button>
          `
          cartItems.appendChild(cartItem)
          totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`
        })
      }
    }
  }

  checkOutBtn.addEventListener('click', () => {
    cart.length = 0
    alert("Checkout Successfully")
    renderCart()
  })

})