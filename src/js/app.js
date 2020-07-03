import Highway from '@dogstudio/highway'
import '@/libs/smoothscroll'

import cssWebP from '@/libs/testWebP'
import moveEl from '@/libs/moveEl'
import { Home } from './renderers'
import repeatedText from './repeatedText'
import FormSubmit from './form/FormSubmit.js'
import { cntBtn, footer, blackBg, linesSize, Dropdown, navbarPos } from './ui'
import ScrollAnimations from './scroll/ScrollAnimations'


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

window.addEventListener('load', () => {

  linesSize()
  new FormSubmit()
  footer()
  blackBg()
  cntBtn()
  new ScrollAnimations()

  const dropdown = new Dropdown({ btn: '.dropdown__btn', items: '.dropdown__content', parent: '.dropdown' })
  dropdown.init()

  navbarPos()
  winH()
  moveEl()
})

window.addEventListener('resize', linesSize)
window.addEventListener('resize', footer)
window.addEventListener('resize', winH)



H.on('NAVIGATE_END', () => {

  moveEl()

  const dropdown = new Dropdown({ btn: '.dropdown__btn', items: '.dropdown__content', parent: '.dropdown' })
  dropdown.init()
})

