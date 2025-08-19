// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation and submission simulation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill out all fields');
    }
});

// Highlight active section link
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Dark/Light Mode Toggle with local storage
const toggleBtn = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (!localStorage.getItem('theme') && prefersDark) {
    document.body.classList.add('dark');
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
} else if (localStorage.getItem('theme') === 'light') {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
} else {
    document.body.classList.add('dark');
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    toggleBtn.innerHTML = document.body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinksContainer = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('show');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animated-section, .skill-box, .project-card-modern').forEach(section => {
    section.classList.add('animate-on-scroll');
    observer.observe(section);
});