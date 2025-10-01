// Function to fetch and display Markdown content
function fetchMarkdown(markdownFile) {
  fetch(markdownFile)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text(); // Get the Markdown text
    })
    .then((markdown) => {
      const converter = new showdown.Converter();
      const html = converter.makeHtml(markdown);
      const contentDisplay = document.getElementById("content-display");
      const markdownContent = document.getElementById("markdown-content");
      markdownContent.innerHTML = html;
      contentDisplay.classList.remove("hidden");
      contentDisplay.style.display = "block"; // Show the content display
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      const contentDisplay = document.getElementById("content-display");
      contentDisplay.innerHTML =
        "<p>Sorry, the content could not be loaded at this time.</p>";
      contentDisplay.classList.remove("hidden");
      contentDisplay.style.display = "block"; // Show the error message
    });
}

// Close button functionality
document.getElementById("close-button").onclick = () => {
  const contentDisplay = document.getElementById("content-display");
  contentDisplay.classList.add("hidden");
  contentDisplay.style.display = "none"; // Hide the content display
};
