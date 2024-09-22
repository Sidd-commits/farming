const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('navLinks');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Subscription form handling
const subscribeForm = document.querySelector('.subscribe form');
subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = subscribeForm.querySelector('input[type="email"]');
    alert(`Thank you for subscribing with the email: ${emailInput.value}`);
    emailInput.value = ''; // Clear the input field after submission
});
