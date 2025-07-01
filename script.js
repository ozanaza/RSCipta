// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Sticky header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Appointment form submission
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    
    // Show confirmation message
    alert(`Terima kasih ${name}! Permintaan janji temu Anda untuk layanan ${document.getElementById('department').options[document.getElementById('department').selectedIndex].text} telah diterima. Kami akan menghubungi Anda segera untuk konfirmasi.`);
    
    // Reset form
    bookingForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Auto update year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate').forEach(element => {
    observer.observe(element);
});

// Hover effects for cards
document.querySelectorAll('.service-card, .doctor-card, .testimonial, .info-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = card.style.transform || 'translateY(0)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});