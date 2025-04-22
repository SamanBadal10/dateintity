document.addEventListener('DOMContentLoaded', function() {
    // Construction Popup Functionality
    const popup = document.getElementById('constructionPopup');
    const closeBtn = document.getElementById('closePopup');
    const notifyForm = document.getElementById('notifyForm');
    
    // Check if user has already seen the popup
    if (!localStorage.getItem('popupShown')) {
        // Show popup after 2 seconds
        setTimeout(() => {
            popup.classList.add('active');
        }, 2000);
        
        // Set flag in localStorage
        localStorage.setItem('popupShown', 'true');
    }
    
    // Close popup when clicking the button
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
    });
    
    // Handle notify form submission
    notifyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = notifyForm.querySelector('input').value;
        
        // Simple validation
        if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Here you would typically send this to your backend
        console.log('Notification requested for:', email);
        
        // Show confirmation
        alert('Thank you! We will notify you when we officially launch.');
        notifyForm.querySelector('input').value = ''; // Clear input
        popup.classList.remove('active');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Disable non-working links with notification
    document.querySelectorAll('nav a:not(.btn), .btn:not(#closePopup)').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === '#') {
                e.preventDefault();
                alert('This feature is currently under development. Please check back soon!');
            }
        });
    });
});
