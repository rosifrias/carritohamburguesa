let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cart.forEach((cartItem, index) => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `
            ${cartItem.item} - $${cartItem.price.toFixed(2)}
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartList.appendChild(li);
    });
    document.getElementById('total').innerText = total.toFixed(2);
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    renderCart();
}

function placeOrder() {
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }

    let orderDetails = 'Detalles del Pedido:\n\n';
    cart.forEach(cartItem => {
        orderDetails += `${cartItem.item} - $${cartItem.price.toFixed(2)}\n`;
    });
    orderDetails += `\nTotal: $${total.toFixed(2)}`;

    const phoneNumber = "https://wa.me/<número_de_teléfono>?text=<mensaje>"; // Número de WhatsApp al que enviar el pedido
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderDetails)}`;
    window.open(whatsappURL, '_blank');
}

renderCart();
