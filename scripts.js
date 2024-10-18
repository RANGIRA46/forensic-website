ocument.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Toggle for mobile nav menu
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Form submission handling
    const contactForm = document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Ensure all fields are filled
            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Validate email format
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Display success message after form submission
            const successMessage = document.createElement('div');
            successMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
            successMessage.style.color = 'green';
            successMessage.style.marginTop = '20px';
            contactForm.insertAdjacentElement('afterend', successMessage);

            // Reset form and remove success message after a timeout
            setTimeout(() => {
                contactForm.reset();
                successMessage.remove();
            }, 3000);
        });
    }

    // Display the selected presentation in the iframe
    function showPresentation(presentationUrl) {
        const viewer = document.getElementById('presentation-viewer');
        const frame = document.getElementById('presentation-frame');

        if (viewer && frame) {
            frame.src = presentationUrl;
            viewer.style.display = 'block';
        }
    }

    // Close the presentation viewer
    const closeBtn = document.getElementById('close-presentation');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const viewer = document.getElementById('presentation-viewer');
            const frame = document.getElementById('presentation-frame');

            if (viewer && frame) {
                viewer.style.display = 'none';
                frame.src = ''; // Clear the iframe src
            }
        });
    }

    // Print the current presentation
    const printBtn = document.getElementById('print-presentation');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            const frame = document.getElementById('presentation-frame').contentWindow;
            if (frame) {
                frame.focus();
                frame.print();
            }
        });
    }

    // Placeholder for slide navigation (can be expanded if using embedded slides)
    const prevSlideBtn = document.getElementById('prev-slide');
    const nextSlideBtn = document.getElementById('next-slide');

    if (prevSlideBtn) {
        prevSlideBtn.addEventListener('click', function() {
            alert('Previous slide functionality is not implemented.');
        });
    }

    if (nextSlideBtn) {
        nextSlideBtn.addEventListener('click', function() {
            alert('Next slide functionality is not implemented.');
        });
    }
});
