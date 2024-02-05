//Select all the blocks
const block = document.querySelectorAll('div')

// Generate colors in every block
document.addEventListener('DOMContentLoaded', () => {
    block.forEach((elem) => {
        const color = '#' + Math.random().toString(16).substring(9)
        elem.style.backgroundColor = color
        elem.textContent = color
    })
})
