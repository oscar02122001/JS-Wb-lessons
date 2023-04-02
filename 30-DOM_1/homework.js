/// remove ball
const table = document.querySelector('#table')
const ball = document.querySelector('.ball')
const tData = document.getElementsByTagName('td')


let dot
table.addEventListener('click', (e) => {
    if (dot) {
        dot.classList.remove('ball')
    }
    dot = e.target;
    if (dot.innerHTML == '.') {
        dot.classList.add('ball')
    } else {
        [...tData].forEach(val => val.classList.add('errClick'))
        setTimeout(() => {
            [...tData].forEach(val => val.classList.remove('errClick'))
        }, 400)
    }
})


/// FAQ
const show = document.querySelector('.outerUl')
const img = document.querySelector('.imgD')

show.onclick = () => {
    img.classList.toggle('active')
    show.classList.toggle('show')
}

// Comments

let item = document.querySelectorAll('.itemCom')
let list = document.querySelector('.comments__list')
// let arrItem = [...item]

// let delet = function (el) {
//     arrItem = arrItem.filter(val => val !== el);
//     console.log(arrItem);
//     getData()
// }

let getData = function () {
    item.forEach(i => {
        let button = document.createElement('button')
        // button.addEventListener('click', () => delet(i))
        button.classList.add('btn')
        i.prepend(button)
        button.onclick = () => i.remove()


    })
}
getData()