import Highway from '@dogstudio/highway'
import ScrollBooster from 'scrollbooster'

import { ParallaxScroller, repeatedText, Accordeon } from '@/components'
import { footerScrollbar, scrollTo, blackBg } from '@/ui'
import transitionLoader from '@/loaders/transitionLoader'
import Loader from '@/loaders/Loader'

class Service extends Highway.Renderer {

  onEnterCompleted() {

    window.addEventListener('load', () => new Loader(transitionLoader))

    const parralax = new ParallaxScroller()

    parralax.looper('.service-header__scroller')
    screen.width > 1024 && parralax.scroller('.full-screen-img__img-wrapper')

    repeatedText('transition-rails', 'transition-rails__items', 20)

    footerScrollbar()

    scrollTo(document.querySelector('.service-header__arrow'))
    blackBg()

    const scrollthumb = document.querySelector('.steps-section__scrollthumb')

    new ScrollBooster({
      viewport: document.querySelector('.steps-section__draggable'),
      content: document.querySelector('.steps-section__items'),
      scrollMode: 'transform', // use CSS 'transform' property
      direction: 'horizontal', // allow only horizontal scrolling
      emulateScroll: true, // scroll on wheel events
      onUpdate: (e) => {
        const x = e.position.x
        const item = document.querySelector('.steps-section__items')
        let percent = 100 * x / (item.scrollWidth - item.clientWidth)
        if(percent >= 100)
          percent = 100
        else if(percent <= 0)
          percent = 0
        scrollthumb.style.left = percent + '%'
        scrollthumb.style.transform = `translateX(-${percent}%)`
      }
    })

    new Accordeon('.accordeon-section__item', '.accordeon-section__text')

  }
}
// Don`t forget to export your renderer
export default Service
