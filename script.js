const buttons     = document.querySelectorAll('.filter');
const cards       = document.querySelectorAll('.card');
const search      = document.getElementById('search');
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const noResults   = document.getElementById('no-results');
let activeFilter = 'all';

// Show only the cards that match both the category and the search text
function applyFilters() {
  const term = search.value.toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const okCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
    const okText = card.textContent.toLowerCase().includes(term);
    const show = okCategory && okText;
    card.classList.toggle('hide', !show);
    if (show) visible++;
  });
  noResults.style.display = visible === 0 ? 'block' : 'none';
}

// Category buttons
buttons.forEach(btn => btn.addEventListener('click', () => {
  document.querySelector('.filter.active').classList.remove('active');
  btn.classList.add('active');
  activeFilter = btn.dataset.filter;
  applyFilters();
}));

// Live search
search.addEventListener('input', applyFilters);

// Open lightbox
cards.forEach(card => card.addEventListener('click', () => {
  lightboxImg.src = card.querySelector('img').src;
  lightboxImg.alt = card.querySelector('img').alt;
  lightbox.classList.add('open');
}));

// Close lightbox (click anywhere, or press Escape)
lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
