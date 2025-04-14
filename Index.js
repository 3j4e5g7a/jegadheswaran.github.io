 const OFFSET = document.querySelector('.navbar')?.offsetHeight || 0;

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          const elementPosition = target.offsetTop;
          const offsetPosition = elementPosition - OFFSET;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  const navToggle = document.getElementById('nav-toggle');
  const navContent = document.getElementById('nav-content');

  navToggle.addEventListener('click', () => {
    navContent.classList.toggle('show');
  });