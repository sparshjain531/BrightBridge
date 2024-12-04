document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate");
  
    function checkScroll() {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        // Check if the element is in the viewport
        if (rect.top < windowHeight - 100) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    }
  
    // Initial check on page load
    checkScroll();
  
    // Add event listener for scrolling
    window.addEventListener("scroll", checkScroll);
  });
  