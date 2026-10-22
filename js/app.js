// Interactive Utilities: 3D Card Tilt, Real-Time Loan EMI & Kattha Land Converter
// Zero Emojis.

document.addEventListener('DOMContentLoaded', () => {
  // 1. 3D Tilt Card
  const card = document.querySelector('.tilt-card-3d');
  if (card) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateY(-4deg) rotateX(3deg)';
    });
  }

  // 2. Properties Page Filter Tabs
  const filterTabs = document.querySelectorAll('.filter-tab');
  const propCards = document.querySelectorAll('.prop-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('btn-primary');
        t.classList.add('btn-outline');
      });
      tab.classList.remove('btn-outline');
      tab.classList.add('btn-primary');

      const filterVal = tab.dataset.filter;
      propCards.forEach(c => {
        if (filterVal === 'all' || c.dataset.cat === filterVal) {
          c.style.display = 'flex';
        } else {
          c.style.display = 'none';
        }
      });
    });
  });

  // 3. Interactive Home Loan EMI Calculator
  const emiAmount = document.getElementById('emi-amount');
  const emiRate = document.getElementById('emi-rate');
  const emiTenure = document.getElementById('emi-tenure');
  const emiAmountVal = document.getElementById('emi-amount-val');
  const emiRateVal = document.getElementById('emi-rate-val');
  const emiTenureVal = document.getElementById('emi-tenure-val');
  const emiOutput = document.getElementById('emi-monthly-output');

  function calculateEMI() {
    if (!emiAmount || !emiRate || !emiTenure) return;
    const P = parseFloat(emiAmount.value) * 100000;
    const r = parseFloat(emiRate.value) / (12 * 100);
    const n = parseFloat(emiTenure.value) * 12;

    emiAmountVal.textContent = emiAmount.value + ' Lakhs';
    emiRateVal.textContent = emiRate.value + '%';
    emiTenureVal.textContent = emiTenure.value + ' Years';

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    emiOutput.textContent = 'INR ' + Math.round(emi).toLocaleString('en-IN') + ' / mo';
  }

  if (emiAmount && emiRate && emiTenure) {
    emiAmount.addEventListener('input', calculateEMI);
    emiRate.addEventListener('input', calculateEMI);
    emiTenure.addEventListener('input', calculateEMI);
    calculateEMI();
  }

  // 4. Giridih Kattha Land Unit Converter
  const katthaInput = document.getElementById('kattha-input');
  const katthaSqft = document.getElementById('kattha-sqft-out');
  const katthaDecimal = document.getElementById('kattha-decimal-out');

  if (katthaInput && katthaSqft && katthaDecimal) {
    katthaInput.addEventListener('input', () => {
      const val = parseFloat(katthaInput.value) || 0;
      const sqft = Math.round(val * 720);
      const dec = (val * 1.652).toFixed(2);
      katthaSqft.textContent = sqft.toLocaleString('en-IN') + ' Sq.Ft';
      katthaDecimal.textContent = dec + ' Decimals';
    });
  }
});
