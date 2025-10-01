// Function to load HTML content
function loadHTML(component) {
  const filePath = `components/${component}.html`;

  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      // Find the element with the corresponding data-component attribute
      const element = document.querySelector(`[data-component="${component}"]`);
      if (element) {
        element.innerHTML = data;
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// Automatically load components based on data attributes
document.querySelectorAll("[data-component]").forEach((element) => {
  const component = element.getAttribute("data-component");
  loadHTML(component);
});
