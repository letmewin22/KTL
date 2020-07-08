import Highway from '@dogstudio/highway'
import '@/libs/smoothscroll'


import cssWebP from '@/libs/testWebP'
import bgWebP from '@/bgWebP'
import moveEl from '@/libs/moveEl'
import { Home } from '@/renderers'
import repeatedText from '@/repeatedText'
import FormSubmit from '@/form/FormSubmit.js'
import { cntBtn, footer, blackBg, linesSize, Dropdown, navbarPos, Nav } from '@/ui'
import ScrollAnimations from '@/scroll/ScrollAnimations'
import Sticky from '@/sticky'
import ScrollBar from '@/Scrollbar'
import CntPopup from '@/ui/CntPopup'
import Loader from '@/loader'



new Highway.Core()

cssWebP()
const H = new Highway.Core({
  renderers: {
    home: Home
  }
  // },
  // transitions: {
  //   name: CustomTransition,
  //   default: OtherTransition
  // }
})

repeatedText('btn', 'btn__text-wrapper', 8)
repeatedText('transition-rails', 'transition-rails__items', 20)

const winH = () => {
  let vh = window.innerHeight * 0.01
  document.body.style.setProperty('--vh', `${vh}px`)
}

// 
window.addEventListener('beforeunload', () => {
  document.body.style.opacity = 0
  document.body.style.position ='fixed'
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

window.addEventListener('load', () => {
  bgWebP() 
  new Loader()
  linesSize(document.querySelector('.main-header__line-wrapper'))
  document.querySelectorAll('.form').forEach(el => new FormSubmit(el))
  footer()
  blackBg()
  cntBtn()
  new ScrollAnimations()
  new Nav()
  new ScrollBar()

  document.querySelectorAll('.custom:not(html)').forEach(el => {
    new ScrollBar(el)
  })

  new CntPopup()

  const dropdown = new Dropdown({ btn: '.dropdown__btn', items: '.dropdown__content', parent: '.dropdown' })
  dropdown.init()

  navbarPos()
  winH()
  moveEl()

  document.querySelectorAll('.a-sticky').forEach(el => {
    const sticky = new Sticky(el, { breakpoint: 960, offset: 60 })
    sticky.init()
  })
})

window.addEventListener('resize', () => {
  linesSize(document.querySelector('.main-header__line-wrapper'))
})
window.addEventListener('resize', footer)
window.addEventListener('resize', winH)



H.on('NAVIGATE_END', () => {

  moveEl()

  const dropdown = new Dropdown({ btn: '.dropdown__btn', items: '.dropdown__content', parent: '.dropdown' })
  dropdown.init()
})

H.on('NAVIGATE_IN', () => {

  new ScrollBar()

  document.querySelectorAll('.custom:not(html)').forEach(el => {
    new ScrollBar(el)
  })
  document.querySelectorAll('.form').forEach(el => new FormSubmit(el))
})
