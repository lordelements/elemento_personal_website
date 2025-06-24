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
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <div class="project-link">
                    <a href="${project.link}" target="_blank">View Project</a>
                </div>
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

// Call the function to display the projects when the page loads
document.addEventListener('DOMContentLoaded', displayProjects);

// View more projects button functionality
document.querySelector('.view-more-btn').addEventListener('click', function() {
    console.log('Loading more projects...');
    // Here you would typically fetch more projects from a server
    // For demo purposes, we'll just show a message
    // alert('Loading more projects...');
});