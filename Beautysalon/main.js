/* abrir fechar menu quando clicar no icone: hamburguer e x   */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu  */

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

/* mudar header da pagina quando der scroll */

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/* Testimonials carousel */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// scroll review: mostrar elementos na scroll na pg

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900,
  reset: true
})

scrollReveal.reveal(`
#home .image, #home .text
#about .image, #about text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links

`,{ interval: 200})

