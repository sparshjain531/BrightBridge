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


  // script.js
document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
  
      // Toggle active class for header
      header.classList.toggle('active');
  
      // Expand or collapse content
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  const hamburger = document.querySelector('.hamburger');
  const links = document.querySelector('.links');

  hamburger.addEventListener('click', () => {
    links.classList.toggle('active');
  });


  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }