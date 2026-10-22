// Vanilla JS for Interactive Elements & 3D Tilts
// Zero Emojis.

document.addEventListener('DOMContentLoaded', () => {
  // 3D Card tilt
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

  // Filter tabs on properties page
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
});
