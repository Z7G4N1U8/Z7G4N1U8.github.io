document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.getElementById('projects-container');

  // Fetch the project data from the JSON file
  fetch('projects.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then(projects => {
      // Check if the container exists
      if (projectsContainer) {
        // If there are no projects, display a message
        if (projects.length === 0) {
          projectsContainer.innerHTML = '<p>No projects to display at the moment. Check back soon!</p>';
          return;
        }

        // Create an HTML string for all project cards
        const projectsHtml = projects.map(project => `
          <div class="project-card">
            <a href="${project.link}">
              <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
              </div>
            </a>
          </div>
        `).join(''); // Join all the card strings together

        // Set the inner HTML of the container
        projectsContainer.innerHTML = projectsHtml;

        // Call applyRandomColor after the project cards are added to the DOM
        applyRandomColor('.project-card', 'boxShadow', '0px 0px 50px color');
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      if (projectsContainer) {
        projectsContainer.innerHTML = '<p>Sorry, projects could not be loaded at this time.</p>';
      }
    });
});
