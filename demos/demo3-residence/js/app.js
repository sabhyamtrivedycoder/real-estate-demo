// DEMO 3: The Sovereign Residence - Landmark Project Engine
// Zero Emojis.

const floorPlanData = {
  '2bhk': {
    title: 'The Executive 2 BHK Suite',
    price: 'INR 42 Lakhs',
    superArea: '1,320 Sq.Ft',
    carpetArea: '1,010 Sq.Ft',
    balcony: '2 Private Decks',
    facing: 'North-East Garden View',
    possession: 'Immediate Registry',
    svgGraphic: `
      <svg viewBox="0 0 400 300" width="100%" height="260" style="background: #fff; border: 1px dashed #d6d3d1; border-radius: 8px;">
        <rect x="20" y="20" width="160" height="120" fill="#f5f5f4" stroke="#78716c" stroke-width="2"/>
        <text x="100" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#292524" font-weight="bold">Master Bedroom</text>
        <text x="100" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#78716c">14' x 12'</text>
        
        <rect x="190" y="20" width="190" height="170" fill="#fafaf9" stroke="#78716c" stroke-width="2"/>
        <text x="285" y="100" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#292524" font-weight="bold">Grand Living & Dining</text>
        <text x="285" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#78716c">20' x 14'</text>
        
        <rect x="20" y="150" width="160" height="130" fill="#f5f5f4" stroke="#78716c" stroke-width="2"/>
        <text x="100" y="210" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#292524" font-weight="bold">Guest Bedroom</text>
        <text x="100" y="230" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#78716c">12' x 11'</text>

        <rect x="190" y="200" width="90" height="80" fill="#f5f5f4" stroke="#78716c" stroke-width="2"/>
        <text x="235" y="245" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#292524">Kitchen</text>

        <rect x="290" y="200" width="90" height="80" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
        <text x="335" y="245" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1d4ed8">Deck View</text>
      </svg>
    `
  },
  '3bhk': {
    title: 'The Imperial 3 BHK Residence',
    price: 'INR 68 Lakhs',
    superArea: '1,860 Sq.Ft',
    carpetArea: '1,450 Sq.Ft',
    balcony: '3 Panoramic Balconies',
    facing: 'East Facing Vastu Compliant',
    possession: 'Ready to Move',
    svgGraphic: `
      <svg viewBox="0 0 400 300" width="100%" height="260" style="background: #fff; border: 1px dashed #d6d3d1; border-radius: 8px;">
        <rect x="20" y="20" width="150" height="110" fill="#f5f5f4" stroke="#78716c" stroke-width="2"/>
        <text x="95" y="75" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#292524" font-weight="bold">Master Suite + Walk-in</text>
        
        <rect x="180" y="20" width="200" height="140" fill="#fafaf9" stroke="#78716c" stroke-width="2"/>
        <text x="280" y="85" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#292524" font-weight="bold">Imperial Drawing Hall</text>
        
        <rect x="20" y="140" width="150" height="90" fill="#f5f5f4" stroke="#78716c" stroke-width="2"/>
        <text x="95" y="185" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#292524" font-weight="bold">Bedroom 2</text>

        <rect x="20" y="240" width="150" height="50" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
        <text x="95" y="270" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1d4ed8">Balcony deck</text>

        <rect x="180" y="170" width="100" height="120" fill="#f5f5f4" stroke="#78716c" stroke-width="2"/>
        <text x="230" y="230" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#292524" font-weight="bold">Bedroom 3</text>

        <rect x="290" y="170" width="90" height="120" fill="#f5f5f4" stroke="#78716c" stroke-width="2"/>
        <text x="335" y="230" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#292524">Modular Kitchen</text>
      </svg>
    `
  },
  '4bhk': {
    title: 'The Royal Penthouse 4 BHK',
    price: 'INR 1.25 Cr',
    superArea: '2,890 Sq.Ft',
    carpetArea: '2,240 Sq.Ft',
    balcony: 'Private Terrace Deck (400 sq.ft)',
    facing: '360-Degree Panoramic View',
    possession: 'Limited 4 Units Available',
    svgGraphic: `
      <svg viewBox="0 0 400 300" width="100%" height="260" style="background: #fff; border: 1px dashed #d6d3d1; border-radius: 8px;">
        <rect x="20" y="20" width="360" height="70" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="200" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#b45309" font-weight="bold">Private Terrace Garden & Lounge</text>

        <rect x="20" y="100" width="170" height="90" fill="#f5f5f4" stroke="#78716c" stroke-width="2"/>
        <text x="105" y="145" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#292524" font-weight="bold">Royal Master Suite</text>

        <rect x="200" y="100" width="180" height="110" fill="#fafaf9" stroke="#78716c" stroke-width="2"/>
        <text x="290" y="155" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#292524" font-weight="bold">Grand Dining & Living</text>

        <rect x="20" y="200" width="110" height="90" fill="#f5f5f4" stroke="#78716c" stroke-width="2"/>
        <text x="75" y="245" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#292524">Bed 2</text>

        <rect x="140" y="200" width="110" height="90" fill="#f5f5f4" stroke="#78716c" stroke-width="2"/>
        <text x="195" y="245" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#292524">Bed 3</text>

        <rect x="260" y="220" width="120" height="70" fill="#f5f5f4" stroke="#78716c" stroke-width="2"/>
        <text x="320" y="255" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#292524">Bed 4 / Study</text>
      </svg>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.plan-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const planKey = tab.dataset.plan;
      const data = floorPlanData[planKey];
      if (data) {
        document.getElementById('plan-title').textContent = data.title;
        document.getElementById('plan-price').textContent = data.price;
        document.getElementById('plan-super').textContent = data.superArea;
        document.getElementById('plan-carpet').textContent = data.carpetArea;
        document.getElementById('plan-balcony').textContent = data.balcony;
        document.getElementById('plan-facing').textContent = data.facing;
        document.getElementById('plan-possession').textContent = data.possession;
        document.getElementById('plan-graphic-container').innerHTML = data.svgGraphic;
      }
    });
  });
});
