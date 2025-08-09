// Function to wait for an element to exist in the DOM
function waitForElement(selector, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);
    if (element) {
      resolve(element);
      return;
    }

    const observer = new MutationObserver((mutations, obs) => {
      const element = document.querySelector(selector);
      if (element) {
        obs.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Set a timeout to avoid waiting forever
    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Element ${selector} not found within ${timeout}ms`));
    }, timeout);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Wait for the cards container to be available in the DOM
    const cardsContainer = await waitForElement('#cards-container');

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
          if (typeof applyRandomColor === 'function') {
            applyRandomColor('.card', 'boxShadow', '0px 0px 50px color');
          }
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        if (cardsContainer) {
          cardsContainer.innerHTML = '<p>Sorry, cards could not be loaded at this time.</p>';
        }
      });
  } catch (error) {
    console.error('Cards container not found:', error);
    console.error('Make sure the element with id "cards-container" exists in the DOM');
  }
});