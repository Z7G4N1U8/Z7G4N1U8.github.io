document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');

    // Fetch the card data from the JSON file
    fetch('guides.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse the JSON from the response
        })
        .then(cards => {
            // Check if the container exists
            if (cardContainer) {
                // If there are no cards, display a message
                if (cards.length === 0) {
                    cardContainer.innerHTML = '<p>No cards to display at the moment. Check back soon!</p>';
                    return;
                }

                // Create an HTML string for all card elements
                const cardsHtml = cards.map(card => `
                    <div class="card" onclick="fetchMarkdown('${card.path}')">
                        <div class="card-content">
                          <h3 class="card-name">${card.name}</h3>
                          <p class="card-description">${card.description}</p>
                        </div>
                    </div>
                `).join(''); // Join all the card strings together

                // Set the inner HTML of the container
                cardContainer.innerHTML = cardsHtml;

                // Call applyRandomColor after the cards are added to the DOM
                applyRandomColor('.card', 'boxShadow', '0px 0px 50px color');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            if (cardContainer) {
                cardContainer.innerHTML = '<p>Sorry, cards could not be loaded at this time.</p>';
            }
        });
});
