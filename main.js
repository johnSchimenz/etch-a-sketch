// Variable and array declarations

const twoDimensionalClassArray = [];
let width = 0;
let cellName = "";
let counter = 0;
let columnClassName = "";
let rowClassName = "";

// Alert user to specify the side width
do
{
    width = prompt("What is the side width? Value must be at least 1 and at most 100.");
}
while (width < 1 || width > 100);

// Prepare the class names for each cell
for (let i = 0; i < width; i++)
{
    twoDimensionalClassArray[i] = [];

    for (let j = 0; j < width; j++)
    {
        cellName = "cell-" + i + "-" + j;
        twoDimensionalClassArray[i][j] = cellName;
    }
}

// Create all the squares

for (let i = 0; i < width; i++)
{    
    const selectContainer = document.querySelector("#container");
    const addColumn = document.createElement("div");
    columnClassName = "column" + i;
    addColumn.classList.add(columnClassName);
    addColumn.classList.add("column-container");
    selectContainer.appendChild(addColumn);
    rowClassName = "div." + columnClassName;

    for (let j = 0; j < width; j++)
    {
        const selectColumn = document.querySelector(rowClassName);
        const addRow = document.createElement("div");
        addRow.classList.add(twoDimensionalClassArray[i][j]);
        addRow.classList.add("square");
        selectColumn.appendChild(addRow);
        columnClassName = twoDimensionalClassArray[i][j];
    }
}