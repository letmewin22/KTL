import Highway from '@dogstudio/highway'

import {ParallaxScroller, repeatedText } from '@/components'
import { footerScrollbar, scrollTo } from '@/ui'
import transitionLoader from '@/loaders/transitionLoader'
import Loader from '@/loaders/Loader'

class Home extends Highway.Renderer {

  onEnterCompleted() {

    // window.addEventListener('load', () => {
    //   document.documentElement.classList.remove('loading')
    //   document.querySelector('.loader').style.display = 'none'
    //   transitionLoader(0.2)
    // })

    window.addEventListener('load', () => new Loader(transitionLoader))

    new ParallaxScroller('.service-header__scroller')

    repeatedText('transition-rails', 'transition-rails__items', 20)
    
    footerScrollbar()

    scrollTo(document.querySelector('.service-header__arrow'))

  }
}
// Don`t forget to export your renderer
export default Home
