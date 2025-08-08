function createCardHtml(data) {
    return data.map(card => `
        <div class="card">
            <a href="#" onclick="event.preventDefault(); fetchMarkdown('${card.path}')">
                <div class="card-content">
                    <h3 class="card-name">${card.name}</h3>
                    <p class="card-description">${card.description}</p>
                </div>
            </a>
        </div>
    `).join(''); // Join all the card strings together
}
