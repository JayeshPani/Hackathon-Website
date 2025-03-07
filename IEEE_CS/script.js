// 1. Fade/Slide Up Intersection Observer
const revealSections = document.querySelectorAll('.reveal');
const fadeOptions = { threshold: 0.1 };
const fadeObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
      entry.target.classList.add('show');
      obs.unobserve(entry.target);
    }
  });
}, fadeOptions);
revealSections.forEach(sec => fadeObserver.observe(sec));

// 2. Countdown Timer
const targetDate = new Date("March 16, 2025 18:00:00").getTime();
const countdownElem = document.getElementById('countdown');
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  if (distance < 0) {
    countdownElem.textContent = "Hackathon Started!";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdownElem.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// 3. "Register Now" -> scroll to "Team Registration"
const registerButton = document.getElementById('registerButton');
if (registerButton) {
  registerButton.addEventListener('click', () => {
    const regSection = document.getElementById('registration');
    regSection.scrollIntoView({ behavior: 'smooth' });
  });
}

// 4. FAQ Toggle
document.querySelectorAll('.faq-item h3').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// 5. Custom Neon Pointer Merge Effect
const customCursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', e => {
  if (!customCursor.classList.contains('merged')) {
    customCursor.style.top = e.clientY + 'px';
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.transform = 'translate(-50%, -50%)';
  }
});
const hoverTargets = document.querySelectorAll('button, .cta-btn, a, .faq-item h3');
hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => {
    const rect = el.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    customCursor.classList.add('merged');
    customCursor.style.transform = 'none';
    const margin = 2;
    const newTop = rect.top + scrollY - margin;
    const newLeft = rect.left + scrollX - margin;
    customCursor.style.top = newTop + 'px';
    customCursor.style.left = newLeft + 'px';
    const outlineThickness = 4;
    const newWidth = rect.width + margin * 2;
    const newHeight = rect.height + margin * 2;
    const computedStyle = window.getComputedStyle(el);
    const btnBorderRadius = computedStyle.getPropertyValue('border-radius') || '0';
    customCursor.style.width = newWidth + 'px';
    customCursor.style.height = newHeight + 'px';
    customCursor.style.borderRadius = btnBorderRadius;
    customCursor.style.border = outlineThickness + 'px solid var(--primary-neon)';
    customCursor.style.background = 'transparent';
  });
  el.addEventListener('mouseleave', () => {
    customCursor.classList.remove('merged');
    customCursor.style.width = '32px';
    customCursor.style.height = '32px';
    customCursor.style.borderRadius = '50%';
    customCursor.style.border = '2px solid var(--primary-neon)';
    customCursor.style.background = 'none';
    customCursor.style.transform = 'translate(-50%, -50%)';
  });
});
// Expand/Collapse participant details
const toggleBtn = document.querySelector('.toggle-participants-btn');
const expandingBox = document.querySelector('.expanding-box');

if (toggleBtn && expandingBox) {
  toggleBtn.addEventListener('click', () => {
    const isHidden = expandingBox.style.display === 'none';
    expandingBox.style.display = isHidden ? 'block' : 'none';
    toggleBtn.textContent = isHidden 
      ? 'Hide Participant Details'
      : 'Show Participant Details';
  });
}