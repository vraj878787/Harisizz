document.addEventListener('DOMContentLoaded', function() {
    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initialize

    // Gallery lightbox functionality
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox hidden';
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-image" src="" alt="">
    `;
    document.body.appendChild(lightbox);

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            const imgSrc = image.getAttribute('src');
            lightbox.querySelector('.lightbox-image').setAttribute('src', imgSrc);
            lightbox.querySelector('.lightbox-image').setAttribute('alt', image.getAttribute('alt'));
            lightbox.classList.remove('hidden');
        });
    });

    lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    // Booking form validation
    const bookingForm = document.querySelector('#book form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            
            if (!name || !email || !service || !date) {
                alert('Please fill out all required fields.');
                return;
            }
            
            // Form submission would go here
            alert('Thank you for your booking! We will confirm your appointment shortly.');
            bookingForm.reset();
        });
    }

    // Show more reviews functionality
    const showMoreBtn = document.querySelector('.show-more-btn');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            const hiddenReviews = document.querySelectorAll('.review-item.hidden');
            hiddenReviews.forEach(review => {
                review.classList.remove('hidden');
            });
            
            if (document.querySelectorAll('.review-item.hidden').length === 0) {
                showMoreBtn.style.display = 'none';
            }
        });
    }
});