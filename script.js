document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        console.log('Burger clicked');
        // Toggle navigation
        navLinks.classList.toggle('nav-active');
        
        // Burger animation
        burger.classList.toggle('toggle');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Link clicked');
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });

    // Reviews carousel
    const reviews = document.querySelectorAll('.review-card');
    let currentReview = 0;

    function showNextReview() {
        reviews[currentReview].classList.remove('active');
        currentReview = (currentReview + 1) % reviews.length;
        reviews[currentReview].classList.add('active');
    }

    // Show first review
    reviews[0].classList.add('active');

    // Change review every 5 seconds
    setInterval(showNextReview, 5000);

    // Modal functionality
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    const bookButtons = document.querySelectorAll('.book-now');
    const privacyLink = document.querySelector('.privacy-link');
    const termsLink = document.querySelector('.terms-link');
    const privacyModal = document.getElementById('privacy-modal');
    const termsModal = document.getElementById('terms-modal');

    // Service modals
    if (learnMoreButtons) {
        learnMoreButtons.forEach(button => {
            button.addEventListener('click', () => {
                const service = button.getAttribute('data-service');
                const modal = document.getElementById(`${service}-modal`);
                if (modal) {
                    modal.style.display = 'block';
                }
            });
        });
    }

    // Privacy and Terms modals
    if (privacyLink && privacyModal) {
        privacyLink.addEventListener('click', (e) => {
            e.preventDefault();
            privacyModal.style.display = 'block';
        });
    }

    if (termsLink && termsModal) {
        termsLink.addEventListener('click', (e) => {
            e.preventDefault();
            termsModal.style.display = 'block';
        });
    }

    // Close buttons for all modals
    if (closeButtons) {
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                if (modal) {
                    modal.style.display = 'none';
                }
            });
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Book buttons
    if (bookButtons) {
        bookButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                if (modal) {
                    modal.style.display = 'none';
                }
            });
        });
    }

    // Navbar scroll behavior
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scrolling down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scrolling up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
});
