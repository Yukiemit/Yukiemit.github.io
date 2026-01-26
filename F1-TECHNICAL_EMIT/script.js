window.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');

        if (document.body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    // Contact form (if exists)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const message = this.querySelector('textarea').value;

            if (name && message) {
                alert('Thank you, ' + name + '! Your message has been received.');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    async function loadProducts() {
    const fakeFetchProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { name: "Oversized White Tee", price: "₱599" },
                    { name: "Basic Hoodie", price: "₱1,299" },
                    { name: "Flare Fit Jeans", price: "₱1,499" }
                ]);
            }, 1000);
        });
    };

    try {
        const products = await fakeFetchProducts();
        const container = document.getElementById("product-list");

        if (container) {
            products.forEach(product => {
                const div = document.createElement("div");
                div.className = "product";
                div.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>Price: ${product.price}</p>
                `;
                container.appendChild(div);
            });
        }
    } catch (error) {
        console.error("Error loading products");
    }
}

loadProducts();

// Payment simulation using Promise
const paymentForm = document.getElementById("payment-form");
if (paymentForm) {
    paymentForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        await new Promise(resolve => setTimeout(resolve, 1500));
        window.location.href = "confirmation.html";
    });
}
});
