// Variable and array declarations

const twoDimensionalClassArray = [];
let width = 0;
let cellName = "";
let counter = 0;
let rowClassName = "";
let columnClassName = "";

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
    const addRow = document.createElement("div");
    rowClassName = "row" + i;
    addRow.classList.add(rowClassName);
    selectContainer.appendChild(addRow);
    columnClassName = "div." + rowClassName;

    for (let j = 0; j < width; j++)
    {
        const selectRow = document.querySelector(columnClassName);
        const addColumn = document.createElement("div");
        addColumn.classList.add(twoDimensionalClassArray[i][j]);
        addColumn.classList.add("square");
        selectRow.appendChild(addColumn);
        rowClassName = twoDimensionalClassArray[i][j];
    }
}

/* Trying to bring stuff on bottom to the top and swiching when we are selecting the container
for (let i = 0; i < width; i++)
{    
    for (let j = 0; j < width; j++)
    {
        const selectContainer = document.querySelector("#container");
        const addColumn = document.createElement("div");
        addColumn.classList.add(twoDimensionalClassArray[i][j]);
        addColumn.textContent = "C";
        selectContainer.appendChild(addColumn);
        rowClassName = twoDimensionalClassArray[i][j];
    }
    console.log(rowClassName);
    const selectDivForRow = document.querySelector(rowClassName);
    const addRow = document.createElement("div");
    addRow.classList.add(rowClassName);
    select
}
*/



/* Good but all elements on the same line
for (let j = 0; j < width; j++)
{
    for (let i = 0; i < width; i++)
    {
        const selectContainer = document.querySelector("#container");
        const addRow = document.createElement("div");
        addRow.classList.add("row");
        addRow.textContent = "R";
        selectContainer.appendChild(addRow);
    }
}
/*


/*
for (let i = 0; i < width * width; i++)
{
    const container = document.querySelector("#container");
    const box = document.createElement("div");
    box.classList.add("square");
    container.appendChild(box);
}
*/