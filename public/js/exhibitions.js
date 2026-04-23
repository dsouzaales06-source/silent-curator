// Exhibitions page script
const API_BASE = 'http://localhost:5000/api';
const SESSION_ID = localStorage.getItem('sessionId') || generateSessionId();

function generateSessionId() {
  const id = 'session_' + Math.random().toString(36).substr(2, 9);
  localStorage.setItem('sessionId', id);
  return id;
}

async function loadExhibitions() {
  try {
    const response = await fetch(`${API_BASE}/exhibitions`);
    const data = await response.json();
    if (data.success) {
      const currentExhibitions = data.exhibitions.filter(e => e.status === 'current' || e.status === 'upcoming');
      renderExhibitions(currentExhibitions);
    }
  } catch (error) {
    console.error('Error loading exhibitions:', error);
  }
}

function renderExhibitions(exhibitions) {
  const grid = document.getElementById('exhibitions-grid');
  let html = '';
  
  exhibitions.forEach((exhibition, index) => {
    const colClass = index === 0 ? 'col-span-12 lg:col-span-8' : 'col-span-12 lg:col-span-4';
    html += `
      <div class="${colClass} group cursor-pointer">
        <div class="relative overflow-hidden aspect-[16/9] lg:aspect-[4/5] rounded-lg mb-6 border border-white/10 group-hover:border-primary/30 transition-all duration-500">
          <img alt="${exhibition.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="${exhibition.image}"/>
          <div class="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10">
            <span class="font-label-caps text-white">${new Date(exhibition.startDate).toLocaleDateString('en-US', {year: 'numeric', month: 'short'})}</span>
          </div>
        </div>
        <h3 class="font-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">${exhibition.title}</h3>
        <p class="font-body-md text-secondary">${exhibition.description}</p>
        <button class="mt-4 border border-primary text-primary px-8 py-3 font-label-caps transition-all hover:bg-primary/10">Learn More</button>
      </div>
    `;
  });
  
  grid.innerHTML = html;
}

// Load on page load
document.addEventListener('DOMContentLoaded', () => {
  loadExhibitions();
});
