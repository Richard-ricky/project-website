// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Get the elements we need for the hamburger menu and navigation links
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.navbar-links');
    
    // Function to toggle the navigation links visibility
    navbarToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  
    // Adjust sections for responsiveness
    function adjustLayout() {
      const windowWidth = window.innerWidth;
      
      // Modify the layout based on screen width (for example, tablet or mobile)
      if (windowWidth <= 768) {
        // Mobile or Tablet View
        document.body.classList.add('mobile-view');
        document.body.classList.remove('desktop-view');
      } else {
        // Desktop View
        document.body.classList.add('desktop-view');
        document.body.classList.remove('mobile-view');
      }
    }
    
    // Call the adjustLayout function on page load and window resize
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
  
    // Make the "Call to Action" buttons functional (example with an alert)
    const callToActionButtons = document.querySelectorAll('.bg, .bg-13');
    callToActionButtons.forEach(button => {
      button.addEventListener('click', function () {
        alert("You clicked the Call to Action button!");
      });
    });
  });
  