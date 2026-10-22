// DEMO 4: Giridih Prime Marketplace - Land, Plots & Properties Engine
// Zero Emojis. Pure JavaScript.

document.addEventListener('DOMContentLoaded', () => {
  initLandConverter();
  initMarketFilters();
});

// Giridih Local Land Measurement: 1 Kattha = 720 Sq.Ft (approx 1.65 Decimals)
function initLandConverter() {
  const katthaInput = document.getElementById('conv-kattha');
  const sqftOutput = document.getElementById('conv-sqft-out');
  const decimalOutput = document.getElementById('conv-decimal-out');

  if (katthaInput && sqftOutput && decimalOutput) {
    katthaInput.addEventListener('input', () => {
      const val = parseFloat(katthaInput.value) || 0;
      const sqft = Math.round(val * 720);
      const decimal = (val * 1.652).toFixed(2);

      sqftOutput.textContent = sqft.toLocaleString('en-IN') + ' Sq.Ft';
      decimalOutput.textContent = decimal + ' Decimals';
    });
  }
}

function initMarketFilters() {
  const categorySelect = document.getElementById('market-cat-select');
  const locSelect = document.getElementById('market-loc-select');
  const budgetSelect = document.getElementById('market-budget-select');
  const applyBtn = document.getElementById('market-filter-btn');

  function filterCards() {
    const cat = categorySelect?.value || 'all';
    const loc = locSelect?.value || 'all';
    const budget = budgetSelect?.value || 'all';

    const cards = document.querySelectorAll('.market-card');
    let matched = 0;

    cards.forEach(card => {
      const cCat = card.dataset.category || '';
      const cLoc = card.dataset.location || '';
      const cPrice = parseFloat(card.dataset.priceLakhs || 0);

      let visible = true;

      if (cat !== 'all' && cCat !== cat) visible = false;
      if (loc !== 'all' && cLoc !== loc) visible = false;

      if (budget === 'under-30' && cPrice > 30) visible = false;
      if (budget === '30-60' && (cPrice < 30 || cPrice > 60)) visible = false;
      if (budget === 'above-60' && cPrice < 60) visible = false;

      if (visible) {
        card.style.display = 'flex';
        matched++;
      } else {
        card.style.display = 'none';
      }
    });

    const countElem = document.getElementById('market-count-badge');
    if (countElem) {
      countElem.textContent = matched + ' Verified Parcels & Properties';
    }
  }

  if (categorySelect) categorySelect.addEventListener('change', filterCards);
  if (locSelect) locSelect.addEventListener('change', filterCards);
  if (budgetSelect) budgetSelect.addEventListener('change', filterCards);
  if (applyBtn) applyBtn.addEventListener('click', filterCards);
}
