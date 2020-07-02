import Highway from '@dogstudio/highway'
import '@/libs/smoothscroll'

import cssWebP from '@/libs/testWebP'
import {Home} from './renderers'
import repeatedText from './repeatedText'
import FormSubmit from './form/FormSubmit.js'
import { cntBtn, footer, blackBg, linesSize, sticky } from './ui'
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


window.addEventListener('load', () => {

  linesSize()
  new FormSubmit()
  footer()
  blackBg()
  cntBtn()
  new ScrollAnimations()
  // sticky(document.querySelector('.v-list-section .section__bold-text'), document.querySelector('.v-list-section__items'))
})

window.addEventListener('resize', linesSize)
window.addEventListener('resize', footer)



