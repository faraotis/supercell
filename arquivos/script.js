let menu = document.querySelector('#mobile-menu-open')
let abrir = document.querySelector('#mobile-menu')
let fechar = document.querySelector('#close')

function AbrirMenu() {
    menu.style.display = 'block'
    menu.style.transition = '2s'
    abrir.style.display = 'none'
    fechar.style.display = 'block'
}

function FecharMenu() {
    menu.style.display = 'none'
    abrir.style.display = 'flex'
    fechar.style.display = 'none'
}