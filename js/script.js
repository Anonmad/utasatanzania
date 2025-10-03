
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('#main-nav');

  menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });

  // Fungua submenu kwa click
  document.querySelectorAll('#main-nav li > a').forEach(link => {
    if(link.nextElementSibling && link.nextElementSibling.classList.contains('submenu')) {
      link.addEventListener('click', e => {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      });
    }
  });
        
        // Header background change on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = "var(--primary)";
                header.style.padding = "0.5rem 0";
            } else {
                header.style.background = "var(--primary)";
                header.style.padding = "1rem 0";
            }
        });

const slides = document.querySelectorAll('.slide');
  let current = 0;

  function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  setInterval(nextSlide, 4000);