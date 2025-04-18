import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Navbar scroll behavior
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuButton = document.getElementById('close-menu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  
  // Handle navbar transparency on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-primary-500', 'shadow-lg');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-primary-500', 'shadow-lg');
      navbar.classList.add('bg-transparent');
    }
  });
  
  // Initially trigger the scroll event to set the navbar style
  window.dispatchEvent(new Event('scroll'));
  
  // Mobile menu toggle
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.add('flex');
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  });
  
  closeMenuButton.addEventListener('click', function() {
    mobileMenu.classList.remove('flex');
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = ''; // Re-enable scrolling
  });
  
  // Close mobile menu when a link is clicked
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('flex');
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = ''; // Re-enable scrolling
    });
  });
  
  // Initialize the map
  const mapElement = document.getElementById('map');
  if (mapElement) {
    // Coordinates for Alwal, Secunderabad
    const lat = 17.5007;
    const lng = 78.5312;
    
    const map = L.map('map').setView([lat, lng], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add a marker for the business location
    L.marker([lat, lng]).addTo(map)
      .bindPopup('Sai Ramya Security Services')
      .openPopup();
  }
  
  // Form submission with validation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple form validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      
      if (!name || !email || !phone || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Phone validation (simple check for now)
      if (phone.length < 10) {
        alert('Please enter a valid phone number.');
        return;
      }
      
      // If validation passes
      alert('Thanks for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for the navbar height
          behavior: 'smooth'
        });
      }
    });
  });
});

// Add animations to services cards on hover
const serviceCards = document.querySelectorAll('.group');
serviceCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    const icon = this.querySelector('i');
    icon.classList.add('animate-bounce');
    setTimeout(() => {
      icon.classList.remove('animate-bounce');
    }, 1000);
  });
});