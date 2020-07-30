import Highway from '@dogstudio/highway'

import { footerScrollbar } from '@/ui'
import transitionLoader from '@/loaders/transitionLoader'
import Loader from '@/loaders/Loader'
import { repeatedText } from '@/components'
import Slider from '../ui/Slider'


class Partners extends Highway.Renderer {

  onEnter() {
    repeatedText('transition-rails', 'transition-rails__items', 20)
  }

  onEnterCompleted() {

    const items = [...document.querySelectorAll('.partners-slider__slide-item')]

    items.forEach(el => {
      el.addEventListener('mouseenter', () => {
        el.classList.remove('disabled')
      })
      el.addEventListener('mouseleave', () => {
        el.classList.add('disabled')
      })
    })
    new Slider(document.querySelector('.slider'))
    window.addEventListener('load', () => new Loader(transitionLoader))
    footerScrollbar()
  }

}
// Don`t forget to export your renderer
export default Partners
