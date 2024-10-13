const dropdownButtons = document.querySelectorAll('.dropdown-button');
let activeDropdown = null;

const dropdownItems = document.querySelectorAll('.dropdown-content .dropdown-item');

const inputSearch = document.querySelectorAll('.search-bar');


dropdownButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const dropdownContent = this.nextElementSibling;

    const isActive = dropdownContent.style.display === 'flex';

    if (activeDropdown && activeDropdown !== dropdownContent) {
      activeDropdown.style.display = 'none'; 

      activeDropdown.previousElementSibling.classList.remove('active-dropdown-button'); 
    }

    if (!isActive) {
      dropdownContent.style.display = 'flex'; 
      this.classList.add('active-dropdown-button');
      activeDropdown = dropdownContent;
    } else {
      dropdownContent.style.display = 'none';
      this.classList.remove('active-dropdown-button');
      activeDropdown = null;
    }
  });
});

dropdownItems.forEach(function(item) {
  item.addEventListener('click', function() {
    dropdownItems.forEach(function(i) {
      i.classList.remove('active-dropdown-item');
    });
    
    this.classList.add('active-dropdown-item');
  });
});