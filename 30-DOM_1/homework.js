/// remove ball

const table = document.querySelector('#table')
const ball = document.querySelector('.ball')

let dot
table.addEventListener('click', (e) => {
    if (dot) {
        dot.classList.remove('ball')
    }
    dot = e.target;
    dot.classList.add('ball')
})

