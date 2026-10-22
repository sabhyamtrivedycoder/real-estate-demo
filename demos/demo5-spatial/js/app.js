// DEMO 5: Nexus Living - Spatial 3D Virtual Tour & Cursor Engine
// Zero Emojis.

const tourScenes = {
  'living': {
    title: 'Double-Height Living Gallery',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    desc: '32-foot floor-to-ceiling double-glazed acoustic glass overlooking Giridih valley.'
  },
  'master': {
    title: 'Executive Master Sanctuary',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    desc: 'Bespoke walnut paneling, automated dimming, and private terrace access.'
  },
  'terrace': {
    title: 'Panoramic Rooftop Sky Garden',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    desc: 'Private barbecue grill, stargazing lounge, and automated drip irrigation landscaping.'
  },
  'pool': {
    title: 'Private Infinity Heated Pool',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    desc: 'Custom mosaic glass tiling with recessed underwater fiber-optic lighting.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initVirtualTour();
  initLightingMoods();
  init3DPhysics();
});

function initVirtualTour() {
  const btns = document.querySelectorAll('.tour-btn');
  const viewerImg = document.getElementById('tour-main-img');
  const sceneTitle = document.getElementById('scene-title');
  const sceneDesc = document.getElementById('scene-desc');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const sceneKey = btn.dataset.scene;
      const data = tourScenes[sceneKey];
      if (data && viewerImg) {
        viewerImg.style.opacity = '0.4';
        setTimeout(() => {
          viewerImg.src = data.image;
          viewerImg.style.opacity = '1';
          if (sceneTitle) sceneTitle.textContent = data.title;
          if (sceneDesc) sceneDesc.textContent = data.desc;
        }, 200);
      }
    });
  });
}

function initLightingMoods() {
  const lightBtns = document.querySelectorAll('.light-btn');
  const viewerImg = document.getElementById('tour-main-img');

  lightBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      lightBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.dataset.mode;
      if (!viewerImg) return;

      if (mode === 'daylight') {
        viewerImg.style.filter = 'brightness(1.05) contrast(1.02)';
      } else if (mode === 'sunset') {
        viewerImg.style.filter = 'sepia(0.35) saturate(1.4) brightness(0.95)';
      } else if (mode === 'night') {
        viewerImg.style.filter = 'brightness(0.75) contrast(1.2) hue-rotate(200deg)';
      }
    });
  });
}

function init3DPhysics() {
  const holoCard = document.querySelector('.holo-card');
  if (holoCard) {
    holoCard.addEventListener('mousemove', (e) => {
      const rect = holoCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      holoCard.style.transform = `perspective(1000px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg) scale(1.02)`;
    });

    holoCard.addEventListener('mouseleave', () => {
      holoCard.style.transform = 'rotateY(-8deg) rotateX(4deg)';
    });
  }

  const cards = document.querySelectorAll('.spatial-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) translateY(-8px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) translateY(0) rotateY(0deg) rotateX(0deg)';
    });
  });
}
