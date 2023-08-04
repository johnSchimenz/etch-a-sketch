// Variable and array declarations

const twoDimensionalClassArray = [];

let widthCell = 0;
let cellName = "";
let counter = 0;
let columnClassName = "";
let rowClassName = "";

// Alert user to specify the side width
do
{
    widthCell = prompt("What is the side width? Value must be at least 1 and at most 100.");
}
while (widthCell < 1 || widthCell > 100);

// Prepare the class names for each cell
for (let i = 0; i < widthCell; i++)
{
    twoDimensionalClassArray[i] = [];

    for (let j = 0; j < widthCell; j++)
    {
        cellName = "cell-" + i + "-" + j;
        twoDimensionalClassArray[i][j] = cellName;
    }
}

// Create all the squares
for (let i = 0; i < widthCell * widthCell; i++)
{    
    const selectContainer = document.querySelector("#container");
    const addCell = document.createElement("div");
    addCell.classList.add("square");
    addCell.style.width = (400 / widthCell) + "px";
    addCell.style.height = (400 / widthCell) + "px";
    selectContainer.appendChild(addCell);
}

// Change square color if hover over
const draw = document.querySelectorAll("div.square");
draw.forEach((element) =>
{
    element.addEventListener("mouseover", () => 
    {
        element.style.background = "black";
    });
});

// Reset for blank Etch-A-Sketch Pad
const reset = document.querySelector("button");
reset.addEventListener("click", () =>
{
    location.reload();
});