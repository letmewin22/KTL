import Highway from '@dogstudio/highway'
import Loader from '@/loaders/Loader'

import { linesSize, blackBg, footerScrollbar, scrollTo } from '@/ui'
import { repeatedText, ParallaxScroller, MouseParallax } from '@/components'
import transitionLoader from '@/loaders/transitionLoader'

class Home extends Highway.Renderer {
  
  onEnter() {

    linesSize(document.querySelector('.main-header__line-wrapper'))

    this.resizeHandler = () => {
      linesSize(document.querySelector('.main-header__line-wrapper'))
    }

    window.addEventListener('resize', this.resizeHandler)
  }
  onEnterCompleted() {

    window.addEventListener('load', () => new Loader(transitionLoader))

    blackBg()

    repeatedText('transition-rails', 'transition-rails__items', 20)

    const parralax = new ParallaxScroller()
    parralax.looper('.main-header__scroller')
    screen.width > 1024 && parralax.scroller('.full-screen-img__img-wrapper')

    new MouseParallax({
      el: document.querySelector('.main-header__train'),
      parent: document.querySelector('.main-header')
    })

    footerScrollbar()
    scrollTo(document.querySelector('.main-header__arrow'))
  }
  
  onLeave() {
    window.removeEventListener('resize', this.resizeHandler)
  }
}
// Don`t forget to export your renderer
export default Home
