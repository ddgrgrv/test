document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    const modal = document.getElementById('orderModal');
    const modalConfirm = document.getElementById('confirmModal');
    const orderForm = document.getElementById('orderForm');
    const productNameInput = document.getElementById('productName');
    const productPriceInput = document.getElementById('productPrice');
    const orderDetails = document.getElementById('orderDetails');
    const orderBtn = document.getElementById('submit');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'block';

            productNameInput.textContent = document.getElementById("product-name").textContent;
            productPriceInput.textContent = document.getElementById("product-price").textContent;

        });
    });

    const decrementBtn = document.getElementById('decrementBtn');
    const incrementBtn = document.getElementById('incrementBtn');
    const productCountInput = document.getElementById('productCount');

    decrementBtn.addEventListener('click', function() {
        if (parseInt(productCountInput.value) > 1) {
            productCountInput.value = parseInt(productCountInput.value) - 1;
        }
    });

    incrementBtn.addEventListener('click', function() {
        if (parseInt(productCountInput.value) < 10) {
            productCountInput.value = parseInt(productCountInput.value) + 1;
        }
    });

    orderForm.addEventListener('click', function(event) {
        event.preventDefault();

        const productCount = document.getElementById('productCount').value;
        const totalPrice = parseFloat(document.getElementById("product-price").textContent) * parseInt(productCount);

        orderDetails.innerHTML = `
            <p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>
        `;
    });

    orderBtn.addEventListener('click', function(){
        closeModal();
        modalConfirm.style.display = 'block';
        setTimeout(()=>{
            modalConfirm.style.display = 'none';
        }, 2000);
    });
});
function closeModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
}
