const container = document.querySelector(".container");
const changeBtn = document.querySelector(".change-size");

const containerSize = 960; // Fixed total size in pixels
let gridSize = 16; // Default grid size

function activate(event) {
    event.target.classList.add("activated");
    event.target.classList.remove("deactivated");
}

function deactivate(event) {
    event.target.classList.add("deactivated");
    event.target.classList.remove("activated");
}

function renderGrid() {
    container.innerHTML = ""; // Clear previous grid
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    const divSize = containerSize / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.width = `${divSize}px`;
        newDiv.style.height = `${divSize}px`;
        newDiv.classList.add("square");
        newDiv.addEventListener("mouseenter", activate);
        newDiv.addEventListener("mouseleave", deactivate);
        container.append(newDiv);
    }
}

changeBtn.addEventListener("click", () => {
    const newGridSize = parseInt(prompt("Enter number of squares per side (max 100):"), 10);
    if (!isNaN(newGridSize) && newGridSize > 0 && newGridSize <= 100) {
        gridSize = newGridSize;
        renderGrid();
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

renderGrid(); // Initial render
