// Journal page script
const API_BASE = 'http://localhost:5000/api';
const SESSION_ID = localStorage.getItem('sessionId') || generateSessionId();

function generateSessionId() {
  const id = 'session_' + Math.random().toString(36).substr(2, 9);
  localStorage.setItem('sessionId', id);
  return id;
}

async function loadArticles() {
  try {
    const response = await fetch(`${API_BASE}/articles/featured`);
    const data = await response.json();
    if (data.success) {
      renderArticles(data.articles);
    }
  } catch (error) {
    console.error('Error loading articles:', error);
  }
}

function renderArticles(articles) {
  const grid = document.getElementById('articles-grid');
  let html = '';
  
  articles.forEach(article => {
    html += `
      <article class="group">
        <div class="aspect-[4/5] overflow-hidden mb-8 border border-white/5 transition-all group-hover:border-primary/30">
          <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="${article.image}" alt="${article.title}"/>
        </div>
        <span class="font-label-caps text-label-caps text-on-surface-variant mb-4 block">${new Date(article.publishedDate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
        <h3 class="font-headline-md text-[24px] text-white mb-4 group-hover:text-primary transition-colors">${article.title}</h3>
        <p class="font-body-md text-on-surface-variant line-clamp-3">${article.subtitle}</p>
        <a href="article.html?id=${article._id}" class="mt-4 inline-block text-primary font-label-caps hover:underline">Read More</a>
      </article>
    `;
  });
  
  grid.innerHTML = html;
}

// Load on page load
document.addEventListener('DOMContentLoaded', () => {
  loadArticles();
});
