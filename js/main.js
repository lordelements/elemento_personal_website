// Initialize AOS library
AOS.init({
offset: 100, 
duration: 1000,
easing: 'ease-in-out', 
once: true,
mirror: false,
});

// Custom Message Box Function (instead of alert)
function showMessageBox(title, message) {
const messageBox = document.getElementById('messageBox');
document.getElementById('messageBoxTitle').innerText = title;
document.getElementById('messageBoxMessage').innerText = message;
messageBox.classList.add('active');
}

document.getElementById('messageBoxClose').addEventListener('click', () => {
document.getElementById('messageBox').classList.remove('active');
});

// Preloader Logic
window.addEventListener('load', () => {
const loader = document.querySelector(".loader");
loader.classList.add("loader--hidden");
loader.addEventListener("transitionend", () => {
loader.remove();
});
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to dark
function loadTheme() {
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
body.classList.add('light');
themeToggle.checked = true;
} else {
body.classList.remove('light');
themeToggle.checked = false;
}
}

// Toggle theme function
function toggleTheme() {
if (themeToggle.checked) {
body.classList.add('light');
localStorage.setItem('theme', 'light');
} else {
body.classList.remove('light');
localStorage.setItem('theme', 'dark');
}
}

// Load theme when the page loads
document.addEventListener('DOMContentLoaded', loadTheme);


// Mobile Menu Toggle
function toggleMenu() {
const navMenu = document.getElementById('navMenu');
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';

navMenu.classList.toggle('active');
mobileToggle.setAttribute('aria-expanded', !isExpanded);
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
link.addEventListener('click', () => {
const navMenu = document.getElementById('navMenu');
const mobileToggle = document.querySelector('.mobile-menu-toggle');
if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
}
});
});

// Active Navigation Link Highlighting on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
let current = '';

sections.forEach(section => {
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;
if (pageYOffset >= sectionTop - 100) {
    current = section.getAttribute('id');
}
});

navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href').includes(current)) {
    link.classList.add('active');
}
});
}

window.addEventListener('scroll', highlightNavLink);
document.addEventListener('DOMContentLoaded', highlightNavLink); 

// Projects Data Custom API
const projects = [
 {
        title: 'Product Landing Page',
        image: 'img/product-landing-page-2023-05-30-20_11_37.png',
        link: 'https://github.com/lordelements/product-landing-page'
    },
    {
        title: 'Andrian Flatbox Design',
        image: 'img/Andrian-Flatbox-Design-2023-05-30-20_53_07.png',
        link: 'https://github.com/lordelements/Andrian-Flatbox-Design'
    },
    {
        title: 'Learning Resource App',
        image: 'img/learning-resource app.png',
        link: 'https://github.com/lordelements/learning-resource-app'
    },
    {
        title: 'Monster Slayer Game',
        image: 'img/Monster-Slayer-Game-2023-05-30-21_10_15.png',
        link: 'https://github.com/lordelements/Monster-Slayer-Game'
    },
    {
        title: 'Capstone WBM System',
        image: 'img/WBMSystem-admin-index-php-2022-12-26-23_15_03.png',
        link: 'https://github.com/lordelements/Capstone_WBMSystem'
    },
    {
        title: 'Login Form (PHP Function)',
        image: 'img/LoginForm-InphpFunction-login-php.png',
        link: 'https://github.com/lordelements/LoginForm-InphpFunction'
    }
];

// Function to generate project cards dynamically
function displayProjects() {
const container = document.querySelector("#projects .project-grid");
container.innerHTML = '';

// Loop through the projects array and create HTML for each project
projects.forEach(project => {
const projectCard = document.createElement('div');
projectCard.classList.add('project-card');

projectCard.innerHTML = `
    <div class="project-image">
        <img src="${project.image}" alt="${project.title} project screenshot" onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/333333?text=Image+Not+Found';">
    </div>
    <div class="project-info">
        <h3>${project.title}</h3>
        <div class="project-link">
            <a href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    </div>
`;

container.appendChild(projectCard);
});
}

// Call the function to display the projects when the page loads
document.addEventListener('DOMContentLoaded', displayProjects);


document.querySelector('.view-more-btn').addEventListener('click', function() {
showMessageBox('More Projects', 'This would typically load more projects or navigate to an "All Projects" page!');
});

// Contact Form Submission (using custom message box)
document.getElementById('contactForm').addEventListener('submit', function(event) {
event.preventDefault(); 

// In a real application, you would send this data to a server using fetch()
// Example:
// const formData = new FormData(this);
// fetch('/submit-form-endpoint', {
//     method: 'POST',
//     body: formData
// })
// .then(response => response.json())
// .then(data => {
//     if (data.success) {
//         document.getElementById('contactForm').style.display = 'none';
//         document.getElementById('contactSuccessMessage').style.display = 'block';
//     } else {
//         showMessageBox('Submission Error', 'There was an error sending your message. Please try again.');
//     }
// })
// .catch(error => {
//     showMessageBox('Network Error', 'Could not connect to the server. Please check your internet connection.');
// });

// Simulate successful submission for demonstration
document.getElementById('contactForm').style.display = 'none'; 
document.getElementById('contactSuccessMessage').style.display = 'block';
this.reset();
});

// Set current year in footer
document.getElementById('current-year').innerText = new Date().getFullYear();