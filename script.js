const container = document.querySelector(".container");
const changeBtn = document.querySelector(".change-size");

const containerSize = 960;
let gridSize = 16;

function activate(event) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function deactivate(event) {
  event.target.classList.add("deactivated");
  event.target.classList.remove("activated");
}

function renderGrid() {
  container.innerHTML = "";
  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;

  const divSize = containerSize / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${divSize}px`;
    newDiv.style.height = `${divSize}px`;
    newDiv.style.opacity = 0; // Start from fully transparent
    newDiv.classList.add("square");

    newDiv.addEventListener("mouseenter", (event) => {
      // Colorize
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

      // Increase opacity
      let currentOpacity = parseFloat(event.target.style.opacity) || 0;
      currentOpacity = Math.min(currentOpacity + 0.1, 1);
      event.target.style.opacity = currentOpacity;
    });

    container.append(newDiv);
  }
}

changeBtn.addEventListener("click", () => {
  const newGridSize = parseInt(
    prompt("Enter number of squares per side (max 100):"),
    10
  );
  if (!isNaN(newGridSize) && newGridSize > 0 && newGridSize <= 100) {
    gridSize = newGridSize;
    renderGrid();
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

renderGrid();
