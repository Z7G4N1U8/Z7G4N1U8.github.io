const colors = ['#89b4fa', '#a6e3a1', '#fab387', '#cba6f7', '#f38ba8'];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function applyRandomColor(selector, property, valueTemplate) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(element => {
    const originalValue = element.style[property]; // Store the original value

    element.addEventListener('mouseover', () => {
      const randomColor = getRandomColor();
      const finalValue = valueTemplate.replace(/color/, randomColor);
      element.style[property] = finalValue;
    });

    // New Mouseout Event Listener
    element.addEventListener('mouseout', () => {
      element.style[property] = originalValue; // Revert to the original value
    });
  });
}
