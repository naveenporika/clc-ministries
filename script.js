function displaySection(sectionId) {
    // Hide all sections
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
}

// Function to close the navbar
function closeNavbar() {
    document.getElementById('navbar').style.display = 'none';
}

// Add event listeners to all navigation buttons
document.addEventListener('DOMContentLoaded', (event) => {
    var navButtons = document.getElementsByClassName('nav-button');
    for (var i = 0; i < navButtons.length; i++) {
        navButtons[i].addEventListener('click', closeNavbar);
    }
});
var navbar = document.getElementById('navbar');

// Function to toggle the navbar visibility
function toggleNavbar() {
    navbar.classList.toggle('show');
}

// Function to close the navbar when clicked outside
window.onclick = function(event) {
    if (!event.target.matches('button')) {
        navbar.classList.remove('show');
    }
}

