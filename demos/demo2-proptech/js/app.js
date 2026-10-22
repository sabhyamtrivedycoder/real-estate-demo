// DEMO 2: Aura PropTech - Interactive Search & Analytics Engine
// Zero Emojis.

document.addEventListener('DOMContentLoaded', () => {
  initPillFilters();
  initDropdownFilters();
  init3DElevation();
  initSortSelector();
});

function initPillFilters() {
  const pills = document.querySelectorAll('.chip-btn');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      applyFilters();
    });
  });
}

function initDropdownFilters() {
  const typeSelect = document.getElementById('prop-type-select');
  const locSelect = document.getElementById('prop-loc-select');
  const priceSelect = document.getElementById('prop-price-select');
  const searchInput = document.getElementById('prop-search-input');

  if (typeSelect) typeSelect.addEventListener('change', applyFilters);
  if (locSelect) locSelect.addEventListener('change', applyFilters);
  if (priceSelect) priceSelect.addEventListener('change', applyFilters);
  if (searchInput) searchInput.addEventListener('input', applyFilters);
}

function initSortSelector() {
  const sortSelect = document.getElementById('prop-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      const container = document.getElementById('prop-cards-grid');
      const cards = Array.from(container.querySelectorAll('.proptech-card'));
      const sortVal = sortSelect.value;

      cards.sort((a, b) => {
        const priceA = parseFloat(a.dataset.priceLakhs || 0);
        const priceB = parseFloat(b.dataset.priceLakhs || 0);
        if (sortVal === 'price-asc') return priceA - priceB;
        if (sortVal === 'price-desc') return priceB - priceA;
        return 0;
      });

      cards.forEach(card => container.appendChild(card));
    });
  }
}

function applyFilters() {
  const activePill = document.querySelector('.chip-btn.active')?.dataset.filter || 'all';
  const typeVal = document.getElementById('prop-type-select')?.value || 'all';
  const locVal = document.getElementById('prop-loc-select')?.value || 'all';
  const priceVal = document.getElementById('prop-price-select')?.value || 'all';
  const queryVal = (document.getElementById('prop-search-input')?.value || '').toLowerCase().trim();

  const cards = document.querySelectorAll('.proptech-card');
  let matchedCount = 0;

  cards.forEach(card => {
    const cardCat = card.dataset.category || '';
    const cardType = card.dataset.type || '';
    const cardLoc = card.dataset.location || '';
    const cardPrice = parseFloat(card.dataset.priceLakhs || 0);
    const cardTitle = (card.querySelector('h3')?.textContent || '').toLowerCase();
    const cardLocText = (card.querySelector('.proptech-loc')?.textContent || '').toLowerCase();

    let match = true;

    // Pill check
    if (activePill === 'under-50' && cardPrice >= 50) match = false;
    if (activePill === 'plot' && cardCat !== 'plot') match = false;
    if (activePill === 'commercial' && cardCat !== 'commercial') match = false;
    if (activePill === 'ready' && card.dataset.status !== 'ready') match = false;

    // Dropdowns
    if (typeVal !== 'all' && cardType !== typeVal) match = false;
    if (locVal !== 'all' && cardLoc !== locVal) match = false;

    if (priceVal === 'under-30' && cardPrice > 30) match = false;
    if (priceVal === '30-60' && (cardPrice < 30 || cardPrice > 60)) match = false;
    if (priceVal === '60-100' && (cardPrice < 60 || cardPrice > 100)) match = false;
    if (priceVal === 'above-100' && cardPrice < 100) match = false;

    // Search input
    if (queryVal && !cardTitle.includes(queryVal) && !cardLocText.includes(queryVal)) {
      match = false;
    }

    if (match) {
      card.style.display = 'flex';
      matchedCount++;
    } else {
      card.style.display = 'none';
    }
  });

  const countBadge = document.getElementById('active-results-count');
  if (countBadge) {
    countBadge.textContent = matchedCount + ' verified properties matched';
  }
}

function init3DElevation() {
  const dash = document.querySelector('.dashboard-card-3d');
  if (dash) {
    dash.addEventListener('mousemove', (e) => {
      const rect = dash.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      dash.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;
    });

    dash.addEventListener('mouseleave', () => {
      dash.style.transform = 'rotateY(-6deg) rotateX(4deg)';
    });
  }
}
