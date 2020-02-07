const fontAwsome = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

const head = document.querySelector('head')
head.innerHTML += `<link rel="stylesheet" href="${fontAwsome}">`

let colorGeneration = () => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let r1 = Math.floor(Math.random() * 255)
    let g1 = Math.floor(Math.random() * 255)
    let b1 = Math.floor(Math.random() * 255)
    let color1 = `rgba(${r}, ${g}, ${b}, 1)`
    let color2 = `rgba(${r1}, ${g1}, ${b1}, 1)`
    return `linear-gradient(-45deg, ${color1} 10%, ${color2})`
}

let copyGradientStyle = (el) => {
    let style = el.style.value
    style.select()
    style.setSelectionRange(0, 99999);
    style.execCommand("copy");
}

var __gradgen = document.querySelectorAll(".gradgen")
let createItem = (nb) => {
    for (let i = 0; i < nb; i++) {
        __gradgen.forEach(el => {
            el.innerHTML += `<div class="gradgen-item"></div>`
        })
    }
}

createItem(10)

var __gradgenItem = document.querySelectorAll('.gradgen-item')
__gradgenItem.forEach(el => {
    el.style.background = colorGeneration()
    let backGradient = el.style.background
    el.innerHTML += `<div class="gradgen-value-container">
    <input class="gradgen-values"  type="text" value="${el.style.background}"/>
    <button class="fa fa-clipboard" aria-hidden="true"></button>
    </div>`
})


let itemToClick = () => {
    let button = document.querySelectorAll('.fa-clipboard')
    let item = document.querySelectorAll('.gradgen-values')
    for (let i = 0; i < button.length; i++) {
        button[i].onclick = () => {
            item[i].select();
            item[i].setSelectionRange(0, 99999)
            document.execCommand("copy");
        }
    }
}

itemToClick()