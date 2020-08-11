import Highway from '@dogstudio/highway'

import { footerScrollbar, MoreNews } from '@/ui'
import transitionLoader from '@/loaders/transitionLoader'
import Loader from '@/loaders/Loader'

class News extends Highway.Renderer {


  onEnterCompleted() {

    new MoreNews()

    window.addEventListener('load', () => new Loader(transitionLoader))
    footerScrollbar()

  }
}
// Don`t forget to export your renderer
export default News
