        document.addEventListener('DOMContentLoaded', () => {
        let cart = [];

        function addToCart(productName, price) {
            cart.push({ name: productName, price: price });
            updateCart();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function updateCart() {
            const cartContent = document.getElementById('cartContent');
            const cartSummary = document.getElementById('cartSummary');
            const cartItems = document.getElementById('cartItems');
            const totalAmount = document.getElementById('totalAmount');

            if (cart.length === 0) {
                cartContent.innerHTML = '<p class="text-gray-400">Your cart is empty.</p>';
                cartSummary.classList.add('hidden');
            } else {
                cartContent.innerHTML = '';
                cartSummary.classList.remove('hidden');
                
                cartItems.innerHTML = cart.map((item, index) => `
                    <div class="flex items-center justify-between text-gray-300">
                        <span>${item.name} - $${item.price.toFixed(2)}</span>
                        <button onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-300 text-sm">Remove</button>
                    </div>
                `).join('');

                const total = cart.reduce((sum, item) => sum + item.price, 0);
                totalAmount.textContent = `$${total.toFixed(2)}`;
            }
        }

        function checkout() {
            if (cart.length > 0) {
                alert('Proceeding to checkout with total: ' + document.getElementById('totalAmount').textContent);
                cart = [];
                updateCart();
            }
        }
    });