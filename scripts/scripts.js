//// Etch-a-Sketch Project
// builds grid of divs and handles logic for events

// Set pad size
const padWidth = 500
const padHeight = 500

//set number of pixels and height and width. 16 would mean a 16x16 grid 
let pixelGridSize = 16 //defualt size
const pixelBorderWidth = 1 

//// html elements

// Set up the pad, div contaier that will hold the pixels.
let padContainer = document.querySelector("#sketchPadContainer")
padContainer.style.width = `${padWidth}px`
padContainer.style.height = `${padHeight}px`

// render the pixel as child of container

function renderGrid(container, gridSize) {
    // takes a container and size, creates the elements for the pixels, and renders the grid

    let pixelWidth = (padWidth / gridSize) - (pixelBorderWidth * 2) // making sure to subtract the added width from border
    let pixelHight = (padHeight / gridSize) - (pixelBorderWidth * 2)

    // Set up the pixel div

    let pixelDiv = document.createElement("div")
    pixelDiv.classList.add('pixel')
    pixelDiv.style.width = `${pixelWidth}px`
    pixelDiv.style.height = `${pixelHight}px`
    pixelDiv.style.border = `${pixelBorderWidth}px solid black`

    // render the correct number of grid divs inside the conatainer
    let totalPixels = gridSize * gridSize
    for (let i = 1; i <= totalPixels; i++) {
       container.appendChild(pixelDiv.cloneNode()) 
    }

}

renderGrid(padContainer, pixelGridSize)

//// Change color when mouse hovers over

// add event listener to padContainer to check for an event on pixels
padContainer.addEventListener('mouseover', (event) => {
    //check what target was hit
    if (event.target.matches('.pixel')){
        event.target.classList.add('hoverFocusedPixel')
    }
})

//// Ask User for grid size when button is clicked

function clearGrid(container) {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild); //loop through and remove old divs
    }
}

let changeSizeBtn = document.querySelector('#btnGridChange')
changeSizeBtn.addEventListener('click', () => {

    pixelGridSize = prompt("How many pixels per side?") // prompt for new size
    clearGrid(padContainer) // clear current grid
    renderGrid(padContainer, pixelGridSize) 
    
})