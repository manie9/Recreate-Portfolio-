// Animate progress bars on page load
document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = width;
      }, 300);
    });
  
    // Animate counter numbers
    const statsNumbers = document.querySelectorAll('.stats-number');
    statsNumbers.forEach(number => {
      const finalValue = parseInt(number.textContent);
      animateCounter(number, 0, finalValue, 2000);
    });
  
    // Add scroll reveal animations
    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();
  });
  
  // Counter animation function
  function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      element.textContent = currentCount;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = end;
      }
    };
    window.requestAnimationFrame(step);
  }
  
  // Reveal elements on scroll
  function revealOnScroll() {
    const elements = document.querySelectorAll('.service-item, .portfolio-item, .stats-item, .client-logo');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 50) {
        element.classList.add('visible');
      }
    });
  }
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });