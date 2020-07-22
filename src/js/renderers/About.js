import Highway from '@dogstudio/highway'

import { footerScrollbar, blackBg } from '@/ui'
import transitionLoader from '@/loaders/transitionLoader'
import Loader from '@/loaders/Loader'
import { splitLines, Resize } from '@/helpers'
import { repeatedText, ParallaxScroller, MouseParallax } from '@/components'


class About extends Highway.Renderer {

  onEnter() {

    this.resize = new Resize(() => {

      const item = document.querySelector('.about-header__content-wrapper')

      const ih = window.innerHeight / 2 - item.getBoundingClientRect().height / 2
      item.parentNode.style.setProperty('--ih', `${ih}px`)
    })

    this.resize.init()

    splitLines(document.querySelector('.about-header__h1'))

    document.querySelectorAll('.about-header__h1 .splitted-line').forEach(el => {

      el.querySelector('.line-text').classList.add('transition-span')
      el.classList.add('about-header__scroller')

      const line = document.createElement('span')

      line.classList.add('about-header__line', 'transition-line')

      el.parentNode.insertBefore(line, el)

    })
  }

  onEnterCompleted() {

    window.addEventListener('load', () => new Loader(transitionLoader))
    footerScrollbar()

    this.parralax = new ParallaxScroller()
    this.parralax.looper('.about-header__scroller')

    new MouseParallax({
      el: document.querySelector('.about-header__train'),
      parent: document.querySelector('.about-header__content-wrapper')
    })

    repeatedText('transition-rails', 'transition-rails__items', 20)

    blackBg()
  }

  onLeave() {
    this.resize.destroy()
  }
}
// Don`t forget to export your renderer
export default About
