
// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if(toggle){
    toggle.addEventListener('click', function(){
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

});




