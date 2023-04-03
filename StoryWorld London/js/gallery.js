document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const filters = document.querySelectorAll('.filter');
    const toggleBtn = document.querySelector('.toggle-btn');
    const nav = document.querySelector('.nav');
    const icon = document.querySelector('.toggle-btn i');
  
    toggleBtn.addEventListener('click', function() {
      nav.classList.toggle('nav-active');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
  const navbar = document.getElementById('navigationBar');
  navbar.classList.add('scrolled');
    
    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const value = this.getAttribute('data-filter');
        
        if (value === 'all') {
          filters.forEach(function(filter) {
            filter.style.display = 'block';
          });
        } else {
          filters.forEach(function(filter) {
            if (!filter.classList.contains(value)) {
              filter.style.display = 'none';
            } else {
              filter.style.display = 'block';
            }
          });
        }
        
        filterButtons.forEach(function(button) {
          button.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  });

  