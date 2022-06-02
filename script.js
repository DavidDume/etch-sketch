const container = document.querySelector('.container');
const sizeSlider = document.querySelector('.sizeSlider');
let sliderSize = document.querySelector('.sliderSize');
sliderSize.textContent = sizeSlider.value;

sizeSlider.oninput = function() {
    sliderSize.textContent = this.value; // retrieve value from slider
}

function createGrid(val) {
    container.style.setProperty('--cols', val);
    container.style.setProperty('--rows', val);

    for(let i = 0; i < (val * val); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}

createGrid(sizeSlider.value);

sizeSlider.addEventListener('mouseup', () => {
    createGrid(sizeSlider.value)
})

const cells = document.querySelectorAll('.grid-item');

cells.forEach(n => {
    n.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'black'
    })
})

