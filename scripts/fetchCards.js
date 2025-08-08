document.addEventListener('DOMContentLoaded', () => {
  const cardsContainer = document.getElementById('cards-container');

  // Fetch the project data from the JSON file
  fetch('data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then(cards => {
      // Check if the container exists
      if (cardsContainer) {
        // If there are no cards, display a message
        if (cards.length === 0) {
          cardsContainer.innerHTML = '<p>No cards to display at the moment. Check back soon!</p>';
          return;
        }

        // Create an HTML string for all cards
        const cardsHtml = createCardHtml(cards);
        cardsContainer.innerHTML = cardsHtml;

        // Call applyRandomColor after the cards are added to the DOM
        applyRandomColor('.card', 'boxShadow', '0px 0px 50px color');
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      if (cardsContainer) {
        cardsContainer.innerHTML = '<p>Sorry, cards could not be loaded at this time.</p>';
      }
    });
});
