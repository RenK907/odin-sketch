//// Etch-a-Sketch Project
// builds grid of divs and handles logic for events

// Set pad size
const padWidth = 500
const padHeight = 500

//set number of pixels and height and width. 16 would mean a 16x16 grid 
let pixelGridSize = 16
let pixelBorderWidth = 1 
let pixelWidth = (padWidth / pixelGridSize) - (pixelBorderWidth * 2) // making sure to subtract the added width from border
let pixelHight = (padHeight / pixelGridSize) - (pixelBorderWidth * 2)

//// html elements

// Set up the pad, div contaier that will hold the pixels.
let padContainer = document.querySelector("#sketchPadContainer")
padContainer.style.width = `${padWidth}px`
padContainer.style.height = `${padHeight}px`

// Set up the pixel div

let pixelDiv = document.createElement("div")
pixelDiv.classList.add('pixel')
pixelDiv.style.width = `${pixelWidth}px`
pixelDiv.style.height = `${pixelHight}px`
pixelDiv.style.border = `${pixelBorderWidth}px solid black`

// render the pixel as child of container

//single pixel for testing
//padContainer.appendChild(pixelDiv)

function renderPixels(numOfPixels) {
    // takes how many pixels to render, loops through and appends them to the container
    for (let i = 1; i <= numOfPixels; i++) {
       padContainer.appendChild(pixelDiv.cloneNode()) 
    }
}

renderPixels(pixelGridSize * pixelGridSize)

//// Change color when mouse hovers over

// add event listener to padContainer to check for an event on pixels
padContainer.addEventListener('mouseover', (event) => {
    //check what target was hit
    if (event.target.matches('.pixel')){
        event.target.classList.add('hoverFocusedPixel')
    }
})