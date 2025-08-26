document.addEventListener('DOMContentLoaded', function() {
    const botonSaludo = document.getElementById('boton-saludo');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    botonSaludo.addEventListener('click', function() {
        alert('¡Hola! Gracias por visitar mi página web.');
    });

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    const enlaces = document.querySelectorAll('nav a[href^="#"]');
    
    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Cerrar menú móvil después de hacer clic
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        let current = '';
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});