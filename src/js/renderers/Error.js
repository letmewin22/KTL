import Highway from '@dogstudio/highway'

import transitionLoader from '@/loaders/transitionLoader'
import Loader from '@/loaders/Loader'
import { repeatedText } from '@/components'


class Error extends Highway.Renderer {

  onEnter() {
    repeatedText('transition-rails', 'transition-rails__items', 20)
  }

  onEnterCompleted() {

    window.addEventListener('load', () => new Loader(transitionLoader))
  }

}
// Don`t forget to export your renderer
export default Error
