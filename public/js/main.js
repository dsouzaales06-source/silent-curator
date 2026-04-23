// Global configuration
const API_BASE = 'http://localhost:5000/api';
const SESSION_ID = localStorage.getItem('sessionId') || generateSessionId();

function generateSessionId() {
  const id = 'session_' + Math.random().toString(36).substr(2, 9);
  localStorage.setItem('sessionId', id);
  return id;
}

// Product functions
async function loadProducts() {
  try {
    const response = await fetch(`${API_BASE}/products/featured`);
    const data = await response.json();
    if (data.success) {
      renderProducts(data.products);
    }
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

function renderProducts(products) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  let html = '';
  products.forEach((product, index) => {
    const colClass = index === 0 ? 'col-span-12 md:col-span-8' : index === 1 ? 'col-span-12 md:col-span-4' : 'col-span-12 md:col-span-4';
    html += `
      <article class="col-span-12 md:col-span-4 group cursor-pointer">
        <div class="relative aspect-[3/4] overflow-hidden border border-white/5 gold-halo transition-all duration-700">
          <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="${product.image}" alt="${product.title}"/>
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
            <div>
              <span class="font-label-caps text-label-caps text-primary">${product.category}</span>
              <h3 class="font-headline-md text-headline-md text-white mt-2">${product.title}</h3>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <div class="flex justify-between items-start mb-2">
            <h3 class="font-headline-md text-headline-md text-white">${product.title}</h3>
            <span class="font-body-md text-primary">$${product.price}</span>
          </div>
          <p class="font-label-caps text-label-caps text-on-surface-variant">${product.artist} • ${product.material}</p>
          <button class="mt-4 px-6 py-2 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary/10 transition-all" onclick="addToCart('${product._id}', '${product.title}', ${product.price}, '${product.image}')">ADD TO CART</button>
        </div>
      </article>
    `;
  });
  grid.innerHTML = html;
}

// Cart functions
async function addToCart(productId, title, price, image) {
  try {
    const response = await fetch(`${API_BASE}/cart/${SESSION_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productId,
        quantity: 1,
        price,
        title,
        image
      })
    });
    const data = await response.json();
    if (data.success) {
      alert(`${title} added to cart!`);
      updateCartCount();
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

async function updateCartCount() {
  try {
    const response = await fetch(`${API_BASE}/cart/${SESSION_ID}`);
    const data = await response.json();
    if (data.success && data.cart) {
      const cartBtn = document.getElementById('cart-btn');
      if (cartBtn && data.cart.items.length > 0) {
        cartBtn.innerHTML += `<span class="absolute -top-1 -right-1 bg-primary text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">${data.cart.items.length}</span>`;
      }
    }
  } catch (error) {
    console.error('Error updating cart:', error);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('products-grid')) {
    loadProducts();
  }
  updateCartCount();
});
