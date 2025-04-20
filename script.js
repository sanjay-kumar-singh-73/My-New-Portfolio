// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });
    
    // Typed.js initialization
    var typed = new Typed('#element', {
        strings: ['Web Developer.', 'UI/UX Designer.', 'You Tuber.'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 1500
    });
    
    // Create particles on load
    createParticles();
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });
});

// Theme toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.querySelector('body');
    const themeIcon = document.querySelector('.theme-toggle i');
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });
});

// Custom cursor
document.addEventListener('DOMContentLoaded', function() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    window.addEventListener('mousemove', function(e) {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        cursorOutline.style.left = e.clientX + 'px';
        cursorOutline.style.top = e.clientY + 'px';
    });
    
    // Add hover effect to clickable elements
    const clickables = document.querySelectorAll('a, button, .hamburger, .theme-toggle');
    
    clickables.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursorDot.classList.add('expand');
            cursorOutline.classList.add('expand');
        });
        
        element.addEventListener('mouseleave', function() {
            cursorDot.classList.remove('expand');
            cursorOutline.classList.remove('expand');
        });
    });
});

// Particles animation
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 1;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        // Apply styles
        particle.style.left = posX + '%';
        particle.style.top = posY + '%';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDuration = duration + 's';
        
        particlesContainer.appendChild(particle);
    }
} 