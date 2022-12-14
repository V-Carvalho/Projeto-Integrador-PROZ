//  ativar/desativar menu hamburguer
function isChecked() {
    const checkboxMenu = document.getElementById('checkbox-menu')
    const listMenu = document.getElementsByTagName('ul')[0]

    if (checkboxMenu.checked) {
        listMenu.style.left = '1rem'
    } else {
        listMenu.style.left = '-1000px'
    }
}

//criando banner automático
const imgBanner = document.getElementById('banner')
let i = 1
let ball = document.querySelector('.selected:nth-child(1)')
ball.style.background = '#B65826'

function slide() {
    while (true) {
        if (i == 3) {
            i = 0
        }
        imgBanner.src = `src/img/banner-home-${i}.jpg`
        ball.style.background = ''
        i++
        ball = document.querySelector(`.selected:nth-child(${i})`)
        ball.style.background = '#B65826'
        break
    }
}

let banner = setInterval(() => document.body.onload = slide(), 3000)

//manipulando o banner manualmente, sem perder a contação automática
const url = `${window.location.protocol}//${window.location.host}/`

function previousBanner() {
    clearInterval(banner)

    if (imgBanner.src == `${url}src/img/banner-home-0.jpg`) {
        ball.style.background = ''
        imgBanner.src = 'src/img/banner-home-2.jpg'
        i = 3
        ball = document.querySelector('.selected:nth-child(3)')
        ball.style.background = '#B65826'
    } else {
        ball.style.background = ''
        i -= 2
        imgBanner.src = `src/img/banner-home-${i}.jpg`
        i++
        ball = document.querySelector(`.selected:nth-child(${i})`)
        ball.style.background = '#B65826'
    }

    banner = setInterval(() => document.body.onload = slide(), 3000)
}

function nextBanner() {
    clearInterval(banner)
    ball.style.background = ''

    if (i == 3) {
        i = 0
    }
    imgBanner.src = `src/img/banner-home-${i}.jpg`
    i++
    ball = document.querySelector(`.selected:nth-child(${i})`)
    ball.style.background = '#B65826'

    banner = setInterval(() => document.body.onload = slide(), 3000)
}

//criando uma função para subir para o topo da página
function toTop() {
    window.scrollTo(0, 0)
}