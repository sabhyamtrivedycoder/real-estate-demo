/**
 * Goyal Orthodontic & Dental Care Centre
 * 3D Scroll Perspective & Interactive Appointment Scheduler
 * Direct Patient Booking for Dr. Vinod Goyal (+91 98999 28534)
 * Zero Emojis.
 */

document.addEventListener('DOMContentLoaded', function () {

  // 1. 3D Scroll Reveal & Depth Perspective
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'perspective(1200px) translateY(0) rotateX(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card-3d, .treatment-card, .doctor-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'perspective(1200px) translateY(24px) rotateX(4deg)';
    el.style.transition = `opacity 0.6s ease ${index * 0.08}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s`;
    scrollObserver.observe(el);
  });

  // 2. Interactive 3D Tilt on Hover for Treatment Cards
  const tiltCards = document.querySelectorAll('.card-3d, .hero-booking-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) translateZ(8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) translateZ(0)';
    });
  });

  // 3. WhatsApp Appointment Booking Handler
  const appointmentForms = document.querySelectorAll('.appointment-form, #bookingForm');
  appointmentForms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.querySelector('[name="patient_name"]')?.value || 'Patient';
      const phone = form.querySelector('[name="patient_phone"]')?.value || '';
      const service = form.querySelector('[name="treatment_service"]')?.value || 'Dental Checkup';
      const preferredTime = form.querySelector('[name="preferred_time"]')?.value || 'Morning (10:00 AM - 1:30 PM)';
      const notes = form.querySelector('[name="patient_notes"]')?.value || '';

      let message = `Namaste Dr. Vinod Goyal Sir,\n\nI would like to book a consultation at Goyal Orthodontic & Dental Care Centre (Sector 15, Gurugram).\n\nPatient Name: ${name}\nContact: ${phone}\nTreatment Required: ${service}\nPreferred Slot: ${preferredTime}`;

      if (notes.trim()) {
        message += `\nChief Complaint: ${notes}`;
      }

      message += `\n\nSubmitted via official clinic portal.`;

      const whatsappUrl = `https://wa.me/919899928534?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  });

  // 4. Interactive Orthodontic Plan Comparator (Orthodontics Page)
  const comparatorSelect = document.getElementById('orthoComparatorSelect');
  const planDisplayTitle = document.getElementById('planTitle');
  const planDisplayDuration = document.getElementById('planDuration');
  const planDisplayVisibility = document.getElementById('planVisibility');
  const planDisplayComfort = document.getElementById('planComfort');
  const planDisplayCost = document.getElementById('planCost');

  const orthoPlans = {
    'aligners': {
      title: 'Clear Invisible Aligners (Invisalign / ClearPath)',
      duration: '6 to 14 Months (Custom 3D Computed Trays)',
      visibility: 'Virtually 100% Invisible • Removable during meals',
      comfort: 'Laser-trimmed zero-bracket comfort • No emergency wire pokes',
      cost: 'Transparent EMI packages starting from INR 60,000'
    },
    'ceramic': {
      title: 'Ceramic Tooth-Colored Aesthetic Braces',
      duration: '12 to 18 Months (Translucent Ceramic Brackets)',
      visibility: 'Discreet and natural tooth shade blend',
      comfort: 'Smooth rounded contour brackets with aesthetic archwires',
      cost: 'Mid-range affordable orthodontic treatment tier'
    },
    'metal': {
      title: 'Precision High-Grade Stainless Steel Braces',
      duration: '12 to 24 Months (Traditional Gold-Standard)',
      visibility: 'Visible metal brackets with customizable ligatures',
      comfort: 'Standard orthodontic wire pressure management',
      cost: 'Most economical orthodontic alignment option'
    },
    'surgical': {
      title: 'Surgical & Complex Skeletal Orthodontics',
      duration: 'Comprehensive multi-disciplinary correction',
      visibility: 'Combined orthognathic surgical planning',
      comfort: 'Full facial profile and airway optimization',
      cost: 'Case-specific surgical and clinical treatment plan'
    }
  };

  if (comparatorSelect) {
    comparatorSelect.addEventListener('change', function () {
      const plan = orthoPlans[comparatorSelect.value];
      if (plan) {
        if (planDisplayTitle) planDisplayTitle.textContent = plan.title;
        if (planDisplayDuration) planDisplayDuration.textContent = plan.duration;
        if (planDisplayVisibility) planDisplayVisibility.textContent = plan.visibility;
        if (planDisplayComfort) planDisplayComfort.textContent = plan.comfort;
        if (planDisplayCost) planDisplayCost.textContent = plan.cost;
      }
    });
  }

});
