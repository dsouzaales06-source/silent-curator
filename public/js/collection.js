// Collection page script
const API_BASE = 'http://localhost:5000/api';
const SESSION_ID = localStorage.getItem('sessionId') || generateSessionId();
let currentPage = 1;
let totalPages = 1;

function generateSessionId() {
  const id = 'session_' + Math.random().toString(36).substr(2, 9);
  localStorage.setItem('sessionId', id);
  return id;
}

async function loadCollection(page = 1) {
  try {
    const response = await fetch(`${API_BASE}/products?page=${page}&limit=12`);
    const data = await response.json();
    if (data.success) {
      renderCollection(data.products);
      currentPage = data.pagination.page;
      totalPages = data.pagination.pages;
      renderPagination();
    }
  } catch (error) {
    console.error('Error loading collection:', error);
  }
}

function renderCollection(products) {
  const grid = document.getElementById('collection-grid');
  let html = '';
  
  products.forEach(product => {
    html += `
      <article class="group">
        <div class="relative aspect-[3/4] overflow-hidden glass-card halo-hover transition-all duration-700">
          <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" src="${product.image}" alt="${product.title}"/>
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <button class="px-8 py-3 border border-primary text-primary font-label-caps text-label-caps bg-black/40 backdrop-blur-md hover:bg-primary hover:text-black transition-all" onclick="viewProduct('${product._id}')">VIEW PIECE</button>
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

function renderPagination() {
  const pagination = document.getElementById('pagination');
  let html = '';
  
  for (let i = 1; i <= Math.min(totalPages, 5); i++) {
    if (i === currentPage) {
      html += `<span class="font-label-caps text-label-caps text-primary border-b border-primary">${String(i).padStart(2, '0')}</span>`;
    } else {
      html += `<span class="font-label-caps text-label-caps text-white/40 hover:text-white cursor-pointer transition-colors" onclick="goToPage(${i})">${String(i).padStart(2, '0')}</span>`;
    }
  }
  
  if (totalPages > 5) {
    html += `<span class="font-label-caps text-label-caps text-white/40">...</span>`;
    html += `<span class="font-label-caps text-label-caps text-white/40 hover:text-white cursor-pointer transition-colors" onclick="goToPage(${totalPages})">${String(totalPages).padStart(2, '0')}</span>`;
  }
  
  pagination.innerHTML = html;
}

function goToPage(page) {
  loadCollection(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevPage() {
  if (currentPage > 1) {
    goToPage(currentPage - 1);
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    goToPage(currentPage + 1);
  }
}

function viewProduct(productId) {
  window.location.href = `product.html?id=${productId}`;
}

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
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Load on page load
document.addEventListener('DOMContentLoaded', () => {
  loadCollection();
});
