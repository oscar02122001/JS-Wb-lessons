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

// Slider

const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slides')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const count = document.querySelector('.slideNum')

let sSize = slides.length
let currentSlide = 0;

const goToSlide = function (slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i-slide)}%)`)

    count.innerHTML = `${sSize}/${currentSlide+1}`
}
goToSlide(0)

const goNext = function () {
    if (currentSlide === sSize - 1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    goToSlide(currentSlide)
}
const goPrev = function () {
    if (currentSlide === 0) {
        currentSlide = sSize - 1
    } else {
        currentSlide--
    }
    goToSlide(currentSlide)
}
next.addEventListener('click', goNext)
prev.addEventListener('click', goPrev)