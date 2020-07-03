import Highway from '@dogstudio/highway'
import ParallaxScroller from '@/ParallaxScroller'
import MouseParallax from '@/MouseParallax'
import Links from '@/Links'
import { scrollbar } from '@/ui'
// import scrollScale from '@/scrollScale'


class Home extends Highway.Renderer {
  onEnterCompleted() {

    new ParallaxScroller('.main-header__scroller')

    new MouseParallax({
      el: document.querySelector('.main-header__train'),
      parent: document.querySelector('.main-header')
    })

    new Links(document.querySelectorAll('.navbar__link'))
    new Links(document.querySelectorAll('.footer__nav-link'))
    
    scrollbar()
    // scrollScale()

  }
}
// Don`t forget to export your renderer
export default Home
