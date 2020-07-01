import Highway from '@dogstudio/highway'
import '@/libs/smoothscroll'

import cssWebP from '@/libs/testWebP'
import {Home} from './renderers'
import repeatedText from './repeatedText'

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

const linesSize = () => {
  document.querySelector('.main-header__line-wrapper').style.height = document.querySelector('.main-header__content').getBoundingClientRect().height + 'px'
  document.querySelector('.main-header__line-wrapper').style.width = document.querySelector('.main-header__content').getBoundingClientRect().width + 'px'
}

window.addEventListener('load', linesSize)
window.addEventListener('resize', linesSize)


const blackBg = () => {
  const item = document.querySelector('.dark-section')

  if(item.getBoundingClientRect().top <= window.innerHeight * 0.9 && -item.getBoundingClientRect().top <= item.getBoundingClientRect().height / 2) {
    document.body.classList.add('black')
  } else {
    document.body.classList.remove('black')
  }

  window.requestAnimationFrame(blackBg)

}

blackBg()
