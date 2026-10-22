// DEMO 1: The Grand Estate - Interactive 3D & Houzez Filtering Engine
// Zero Emojis. Pure Vanilla JS.

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initMortgageCalculator();
  init3DCardTilt();
  initSearchFilter();
});

// 1. Houzez Search Tab Switching
function initTabs() {
  const tabs = document.querySelectorAll('.search-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterProperties();
    });
  });
}

// 2. Interactive Mortgage / EMI Calculator
function initMortgageCalculator() {
  const loanInput = document.getElementById('mortgage-loan');
  const loanVal = document.getElementById('mortgage-loan-val');
  const rateInput = document.getElementById('mortgage-rate');
  const rateVal = document.getElementById('mortgage-rate-val');
  const tenureInput = document.getElementById('mortgage-tenure');
  const tenureVal = document.getElementById('mortgage-tenure-val');
  const emiOutput = document.getElementById('mortgage-emi-output');
  const totalPayOutput = document.getElementById('mortgage-total-pay');

  if (!loanInput || !rateInput || !tenureInput) return;

  function calculateEMI() {
    const P = parseFloat(loanInput.value) * 100000; // in Lakhs
    const r = parseFloat(rateInput.value) / (12 * 100); // monthly interest
    const n = parseFloat(tenureInput.value) * 12; // months

    loanVal.textContent = loanInput.value + ' Lakhs';
    rateVal.textContent = rateInput.value + '%';
    tenureVal.textContent = tenureInput.value + ' Years';

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;

    emiOutput.textContent = 'INR ' + Math.round(emi).toLocaleString('en-IN') + '/mo';
    if (totalPayOutput) {
      totalPayOutput.textContent = 'INR ' + Math.round(totalAmount).toLocaleString('en-IN');
    }
  }

  loanInput.addEventListener('input', calculateEMI);
  rateInput.addEventListener('input', calculateEMI);
  tenureInput.addEventListener('input', calculateEMI);

  calculateEMI();
}

// 3. 3D Perspective Card Tilt on Mouse Move
function init3DCardTilt() {
  const heroCard = document.querySelector('.hero-3d-card');
  if (heroCard) {
    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPct = (x / rect.width - 0.5) * 2;
      const yPct = (y / rect.height - 0.5) * 2;
      heroCard.style.transform = `perspective(1000px) rotateY(${xPct * 8}deg) rotateX(${-yPct * 8}deg) translateY(-4px)`;
    });

    heroCard.addEventListener('mouseleave', () => {
      heroCard.style.transform = 'perspective(1000px) rotateY(-4deg) rotateX(3deg)';
    });
  }

  const cards = document.querySelectorAll('.property-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPct = (x / rect.width - 0.5) * 2;
      const yPct = (y / rect.height - 0.5) * 2;
      card.style.transform = `perspective(1000px) translateY(-8px) rotateY(${xPct * 6}deg) rotateX(${-yPct * 6}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) translateY(0) rotateY(0deg) rotateX(0deg)';
    });
  });
}

// 4. Real-time Property Filter
function initSearchFilter() {
  const typeFilter = document.getElementById('filter-type');
  const locFilter = document.getElementById('filter-location');
  const budgetFilter = document.getElementById('filter-budget');
  const searchBtn = document.getElementById('filter-btn');

  if (typeFilter) typeFilter.addEventListener('change', filterProperties);
  if (locFilter) locFilter.addEventListener('change', filterProperties);
  if (budgetFilter) budgetFilter.addEventListener('change', filterProperties);
  if (searchBtn) searchBtn.addEventListener('click', filterProperties);
}

function filterProperties() {
  const activeTab = document.querySelector('.search-tab-btn.active')?.dataset.category || 'all';
  const typeVal = document.getElementById('filter-type')?.value || 'all';
  const locVal = document.getElementById('filter-location')?.value || 'all';
  const budgetVal = document.getElementById('filter-budget')?.value || 'all';

  const cards = document.querySelectorAll('.property-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const cardCat = card.dataset.category || '';
    const cardType = card.dataset.type || '';
    const cardLoc = card.dataset.location || '';
    const cardPrice = parseFloat(card.dataset.priceLakhs || 0);

    let match = true;

    if (activeTab !== 'all' && cardCat !== activeTab) match = false;
    if (typeVal !== 'all' && cardType !== typeVal) match = false;
    if (locVal !== 'all' && cardLoc !== locVal) match = false;

    if (budgetVal === 'under-30' && cardPrice > 30) match = false;
    if (budgetVal === '30-60' && (cardPrice < 30 || cardPrice > 60)) match = false;
    if (budgetVal === '60-100' && (cardPrice < 60 || cardPrice > 100)) match = false;
    if (budgetVal === 'above-100' && cardPrice < 100) match = false;

    if (match) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  const countDisplay = document.getElementById('properties-count');
  if (countDisplay) {
    countDisplay.textContent = visibleCount + ' Properties Found in Giridih';
  }
}
