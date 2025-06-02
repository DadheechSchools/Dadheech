// Sample JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log("School website loaded!");
    
    // Example: Change navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.remove('bg-primary');
        } else {
            navbar.classList.add('bg-primary');
            navbar.classList.remove('bg-dark');
        }
    });
});