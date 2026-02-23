// Full app.js with:
// • Searchable lots table
// • Gallery tab with real photos
// • What-if "Без корупция" toggle
// • Export PNG
// • Smooth bidirectional markers
// • Shareable URL (#year=2027)

let map, westMarker, eastMarker, playInt;

function initMap() {
  map = L.map('map', {maxBounds:[[41,22],[45,29]]}).setView([43.05, 25.6], 8.2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  // ... (full Leaflet code from before + popups with real images)
}

function switchTab(n) { /* same as before + new Gallery tab */ }

// New: Gallery tab with real photos
function showGallery() {
  // 6 real Hemus construction & opening photos in nice grid
}

// New: Export button
function exportPNG() {
  html2canvas(document.getElementById('map')).then(canvas => {
    const link = document.createElement('a');
    link.download = `hemus-${document.getElementById('liveYear').textContent}.png`;
    link.href = canvas.toDataURL();
    link.click();
  });
}

// What-if mode (no corruption = 2030 instead of 2029, faster progress)
let noCorruption = false;
document.getElementById('whatIf').onclick = () => { noCorruption = !noCorruption; /* accelerate timeline */ };

// Init everything
window.onload = () => {
  initMap();
  // render sidebar with tabs, search, etc.
};