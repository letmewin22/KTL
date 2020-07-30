import Highway from '@dogstudio/highway'

import { footerScrollbar } from '@/ui'
import transitionLoader from '@/loaders/transitionLoader'
import Loader from '@/loaders/Loader'

class News extends Highway.Renderer {


  onEnterCompleted() {
    const btn = document.querySelector('.news-btn')
    const items = document.querySelectorAll('.list-section__list-item')

    if(items.length > 5) {
      btn.classList.add('news-visible')
    } else {
      btn.classList.remove('news-visible')
    }

    window.addEventListener('load', () => new Loader(transitionLoader))
    footerScrollbar()

  }
}
// Don`t forget to export your renderer
export default News
