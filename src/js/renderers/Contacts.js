import Highway from '@dogstudio/highway'

import { footerScrollbar } from '@/ui'
import transitionLoader from '@/loaders/transitionLoader'
import Loader from '@/loaders/Loader'

class Contacts extends Highway.Renderer {

  onEnterCompleted() {

    window.addEventListener('load', () => new Loader(transitionLoader))
    footerScrollbar()

  }
}
// Don`t forget to export your renderer
export default Contacts
