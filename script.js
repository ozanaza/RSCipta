// Form appointment submission
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
    
    // Show success message
    alert(`Terima kasih ${name}! Permintaan janji temu untuk ${service} Anda telah berhasil dikirim. Tim kami akan menghubungi Anda untuk konfirmasi.`);
    
    // Reset form
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for sticky header
                behavior: 'smooth'
            });
        }
    });
});

// Set min date for appointment to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', today);