// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Intersection Observer for animations
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fadeIn');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .review-card').forEach(el => observer.observe(el));

// Form validation for contact page (Netlify-safe)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all fields');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      e.preventDefault();
      alert('Please enter a valid email address');
      return;
    }

    // IMPORTANT:
    // Do NOT reset the form here.
    // Do NOT show a fake "submitted" alert here.
    // Let Netlify handle the submission + redirect.
  });
}
