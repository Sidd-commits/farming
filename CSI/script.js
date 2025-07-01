const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('navLinks');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Subscription form handling
const subscribeForm = document.querySelector('.subscribe form');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = subscribeForm.querySelector('input[type="email"]');
        if (emailInput.value.trim() !== '') {
            alert(`Thank you for subscribing with the email: ${emailInput.value}`);
            emailInput.value = '';
        }
    });
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}
