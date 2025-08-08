function createCardHtml(data) {
    return data.map(project => `
        <div class="card">
            <a href="${project.link}">
                <div class="card-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                </div>
            </a>
        </div>
    `).join(''); // Join all the card strings together
}
