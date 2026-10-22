/**
 * Minerva Academy - Modern EdTech JavaScript Engine
 * Direct Admission Guidance for Bhoop Singh Chaudhary
 * Zero Emojis. Clean ES6+.
 */

document.addEventListener('DOMContentLoaded', function () {
  
  // 1. Interactive Eligibility Assessment Tool
  const qualificationSelect = document.getElementById('qualificationSelect');
  const targetGoalSelect = document.getElementById('targetGoalSelect');
  const resultBox = document.getElementById('eligibilityResult');
  const whatsappQueryBtn = document.getElementById('whatsappQueryBtn');

  const recommendationMatrix = {
    'under10': {
      title: 'NIOS Secondary (10th Standard) - Stream 1',
      desc: 'Eligible for direct admission with valid birth certificate or 8th/9th school transfer certificate. Choice of 5 subjects including regional and vocational languages.',
      examCycle: 'Public Examination (April or October Cycle)',
      tocEligible: 'Not Applicable'
    },
    '10fail': {
      title: 'NIOS Secondary Fast-Track - Stream 2 / On-Demand Exam (ODE)',
      desc: 'Failed or compartment candidates from CBSE, ICSE, or State Boards can save their academic year. Transfer of Credit (TOC) allowed for up to 2 passed subjects.',
      examCycle: 'Immediate On-Demand Exam or Next Public Session',
      tocEligible: 'Eligible for up to 2 passed subjects'
    },
    '10pass': {
      title: 'NIOS Senior Secondary (12th Standard) - Stream 1',
      desc: 'Direct enrollment in 12th standard with Science (PCM/PCB), Commerce, or Humanities stream. Complete flexibility with self-paced assignment scoring (TMA).',
      examCycle: 'Public Examination (April / October Cycle)',
      tocEligible: 'Not Applicable'
    },
    '12fail': {
      title: 'NIOS Senior Secondary Fast-Track - Stream 2 / ODE with TOC',
      desc: 'Save your academic year without restarting from scratch. Transfer up to 2 passed subjects from previous board marksheets. High-scoring TMA assignment guidance provided.',
      examCycle: 'On-Demand Examination (Monthly) or October/April Public Exam',
      tocEligible: 'Eligible for up to 2 passed subjects'
    },
    '12pass_grad': {
      title: 'UGC-DEB Recognized Distance Bachelor Degree',
      desc: 'Eligible for BA, B.Com, BBA, or BCA. Complete your graduation alongside professional work or competitive exam preparation.',
      examCycle: 'Annual / Semester Examination Mode',
      tocEligible: 'Credit Transfer per University Guidelines'
    },
    '12pass_law': {
      title: 'Integrated 5-Year BA LLB / BBA LLB Program',
      desc: 'Bar Council of India (BCI) recognized legal education for aspiring advocates, corporate legal advisors, and judicial service aspirants.',
      examCycle: 'Semester University Examination Mode',
      tocEligible: 'Regular University Enrollment'
    },
    'grad_law': {
      title: 'Professional 3-Year LLB Program',
      desc: 'Exclusively for candidates holding a recognized graduation degree with minimum qualifying percentage. Bar Council of India compliant curriculum.',
      examCycle: 'Semester University Examination Mode',
      tocEligible: 'Direct Degree Enrollment'
    },
    'grad_masters': {
      title: 'Distance Master Program (MA / MBA / M.Com)',
      desc: 'Advance your career credentials without pausing full-time employment. UGC-recognized postgraduate degree.',
      examCycle: 'Semester / Annual Examination Mode',
      tocEligible: 'Direct Postgraduate Admission'
    }
  };

  function updateAssessment() {
    if (!qualificationSelect || !resultBox) return;
    const val = qualificationSelect.value;
    
    if (val && recommendationMatrix[val]) {
      const rec = recommendationMatrix[val];
      resultBox.innerHTML = `
        <div style="font-weight: 700; color: #1d4ed8; margin-bottom: 0.25rem;">Recommendation: ${rec.title}</div>
        <p style="margin-bottom: 0.5rem; color: #475569; font-size: 0.8125rem;">${rec.desc}</p>
        <div style="font-size: 0.75rem; color: #0f172a; margin-top: 0.25rem;"><strong>Exam Window:</strong> ${rec.examCycle}</div>
        <div style="font-size: 0.75rem; color: #059669; margin-top: 0.15rem;"><strong>Credit Transfer:</strong> ${rec.tocEligible}</div>
      `;
      resultBox.classList.add('active');

      if (whatsappQueryBtn) {
        const message = `Hello Director Chaudhary Sir, I ran an eligibility check for ${rec.title} on your Minerva Academy portal. Please guide me regarding the required documents and upcoming admission batch for Gurugram center.`;
        whatsappQueryBtn.href = `https://wa.me/919811881108?text=${encodeURIComponent(message)}`;
      }
    } else {
      resultBox.classList.remove('active');
    }
  }

  if (qualificationSelect) {
    qualificationSelect.addEventListener('change', updateAssessment);
  }

  // 2. Interactive Fee & Timeline Estimator
  const programSelector = document.getElementById('calcProgram');
  const calcOutputPlan = document.getElementById('calcOutputPlan');
  const calcOutputDuration = document.getElementById('calcOutputDuration');
  const calcOutputCycle = document.getElementById('calcOutputCycle');
  const calcOutputFee = document.getElementById('calcOutputFee');
  const calcWhatsappLink = document.getElementById('calcWhatsappLink');

  const programData = {
    'nios-10': {
      name: 'NIOS 10th (Secondary)',
      duration: 'Flexible (1 to 5 Years validity)',
      cycle: 'April / October Public Session or Monthly ODE',
      feeEstimate: 'Standard Board Fees + Counseling Kit',
      query: 'Inquiry regarding NIOS 10th Standard Admission and Subject Selection'
    },
    'nios-12': {
      name: 'NIOS 12th (Senior Secondary)',
      duration: 'Flexible (1 to 5 Years validity)',
      cycle: 'April / October Public Session or Monthly ODE',
      feeEstimate: 'Standard Board Fees + Practical & TMA Guidance',
      query: 'Inquiry regarding NIOS 12th Standard Admission and Stream Selection'
    },
    'degree-ba': {
      name: 'Distance BA / B.Com Degree',
      duration: '3 Years (Self-Paced / Distance Mode)',
      cycle: 'Annual / Semester Admission Cycles',
      feeEstimate: 'Installment-Based University Fees',
      query: 'Inquiry regarding UGC Distance BA / B.Com Degree Enrollment'
    },
    'degree-bba': {
      name: 'Distance BBA / BCA Professional Degree',
      duration: '3 Years (Professional Track)',
      cycle: 'Semester Examination Schedule',
      feeEstimate: 'Installment-Based University Fees',
      query: 'Inquiry regarding Distance BBA / BCA Program Admission'
    },
    'law-3yr': {
      name: '3-Year LLB Program (Post Graduation)',
      duration: '3 Academic Years (6 Semesters)',
      cycle: 'Annual Academic Admission Intake',
      feeEstimate: 'University Prescribed Fee Structure',
      query: 'Inquiry regarding BCI-approved 3-Year LLB Program Admission'
    },
    'law-5yr': {
      name: 'Integrated 5-Year BA LLB / BBA LLB',
      duration: '5 Academic Years (10 Semesters)',
      cycle: 'Annual Academic Admission Intake',
      feeEstimate: 'University Prescribed Fee Structure',
      query: 'Inquiry regarding Integrated 5-Year Law Program Admission'
    }
  };

  if (programSelector) {
    programSelector.addEventListener('change', function () {
      const selected = programData[programSelector.value];
      if (selected) {
        if (calcOutputPlan) calcOutputPlan.textContent = selected.name;
        if (calcOutputDuration) calcOutputDuration.textContent = selected.duration;
        if (calcOutputCycle) calcOutputCycle.textContent = selected.cycle;
        if (calcOutputFee) calcOutputFee.textContent = selected.feeEstimate;
        if (calcWhatsappLink) {
          const text = `Hello Chaudhary Sir, I am interested in the ${selected.name} at Minerva Academy Gurugram. Please provide the fee schedule and admission procedure.`;
          calcWhatsappLink.href = `https://wa.me/919811881108?text=${encodeURIComponent(text)}`;
        }
      }
    });
  }

  // 3. Quick Lead Capture to WhatsApp
  const quickLeadForm = document.getElementById('quickLeadForm');
  if (quickLeadForm) {
    quickLeadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('leadName')?.value || 'Student';
      const phone = document.getElementById('leadPhone')?.value || '';
      const course = document.getElementById('leadCourse')?.value || 'General Inquiry';
      const city = document.getElementById('leadCity')?.value || 'Gurugram';
      
      const msg = `Namaste Bhoop Singh Chaudhary Sir. My name is ${name} (${phone}) from ${city}. I am requesting admission counseling and eligibility verification for: ${course}. Please advise on the next steps at your Madanpuri Road office.`;
      const url = `https://wa.me/919811881108?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    });
  }

  // 4. Mobile Menu Toggle
  const menuToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNavDrawer');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('active');
    });
  }
});
