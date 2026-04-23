// Artist page script
const API_BASE = 'http://localhost:5000/api';
const SESSION_ID = localStorage.getItem('sessionId') || generateSessionId();

function generateSessionId() {
  const id = 'session_' + Math.random().toString(36).substr(2, 9);
  localStorage.setItem('sessionId', id);
  return id;
}

async function loadArtists() {
  try {
    const response = await fetch(`${API_BASE}/artists`);
    const data = await response.json();
    if (data.success) {
      renderArtists(data.artists);
    }
  } catch (error) {
    console.error('Error loading artists:', error);
  }
}

function renderArtists(artists) {
  const grid = document.getElementById('artists-grid');
  let html = '';
  
  artists.forEach(artist => {
    html += `
      <div class="glass-panel p-8 halo-hover transition-all group cursor-pointer">
        <div class="aspect-square overflow-hidden mb-8">
          <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="${artist.image}" alt="${artist.name}"/>
        </div>
        <span class="font-label-caps text-secondary-fixed-dim">${artist.title}</span>
        <h3 class="font-headline-md mt-2 mb-4">${artist.name}</h3>
        <p class="font-body-md text-on-surface-variant mb-6">${artist.bio}</p>
        <div class="text-sm text-white/40 mb-4">
          <p><strong>Location:</strong> ${artist.location}</p>
          <p><strong>Specialty:</strong> ${artist.specialty}</p>
        </div>
        <a href="artist-profile.html?id=${artist._id}" class="text-primary font-label-caps hover:underline">View Profile</a>
      </div>
    `;
  });
  
  grid.innerHTML = html;
}

// Load on page load
document.addEventListener('DOMContentLoaded', () => {
  loadArtists();
});
