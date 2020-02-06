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
        __gradgen.forEach( el => {
            el.innerHTML += `<div class="gradgen-item"></div>`
        })
    }
}

createItem(10)

let copy = () => {
    var copyText = document.querySelectorAll(".gradgen-values");
    for (let i = 0; i < copyText.length; i++) {
        copyText[i].select();
        copyText[i].setSelectionRange(0, 99999)
        console.log(copyText[i].select());
    }
    document.execCommand("copy");
  }

var __gradgenItem = document.querySelectorAll('.gradgen-item')
__gradgenItem.forEach(el => {
    el.style.background = colorGeneration()
    let backGradient = el.style.background 
    el.innerHTML += `<div class="gradgen-value-container">
    <input class="gradgen-values"  type="text" value="${el.style.background}"/>
    <i onclick='copy()' class="fa fa-clipboard" aria-hidden="true"></i>
    </div>`
})


// var __gradgen_copy_button = document.querySelectorAll('.gradgen-copy-button')
// __gradgen_copy_button.forEach(el => {
//     el.style.background = colorGeneration()
// })
