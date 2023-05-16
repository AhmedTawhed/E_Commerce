function checkCart() {
    var cartProducts = sessionStorage.getItem("shoppingcart");
    var cart = document.getElementById("shoppingCart");
    cart.innerHTML = `Shopping Cart (${cartProducts})`;
}

function clearCart() {
    sessionStorage.setItem("shoppingcart", 0);
    checkCart();
}

