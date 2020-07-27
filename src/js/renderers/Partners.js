import Highway from '@dogstudio/highway'

import { footerScrollbar } from '@/ui'
import transitionLoader from '@/loaders/transitionLoader'
import Loader from '@/loaders/Loader'
import { repeatedText } from '@/components'


class Partners extends Highway.Renderer {

  onEnter() {
    repeatedText('transition-rails', 'transition-rails__items', 20)
  }

  onEnterCompleted() {

    window.addEventListener('load', () => new Loader(transitionLoader))
    footerScrollbar()
  }

}
// Don`t forget to export your renderer
export default Partners
