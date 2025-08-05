// Function to load HTML content
function loadHTML(elementId, filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    });
}

// Load components
loadHTML('header', 'components/header.html');
loadHTML('footer', 'components/footer.html');
