import Highway from '@dogstudio/highway'

import { footerScrollbar } from '@/ui'
import transitionLoader from '@/loaders/transitionLoader'
import Loader from '@/loaders/Loader'
import { Resize } from '@/helpers'
import { repeatedText } from '@/components'


class Partners extends Highway.Renderer {

  onEnter() {
    // this.resize = new Resize(() => {

    //   const item = document.querySelector('.partners-header__content-wrapper')

    //   const ih = window.innerHeight / 2 - item.getBoundingClientRect().height / 2
    //   item.parentNode.style.setProperty('--ih', `${ih}px`)
    // })

    // this.resize.init()
  }

  onEnterCompleted() {

    window.addEventListener('load', () => new Loader(transitionLoader))
    footerScrollbar()
    repeatedText('transition-rails', 'transition-rails__items', 20)
  }

}
// Don`t forget to export your renderer
export default Partners
