import Highway from '@dogstudio/highway'

import { footerScrollbar } from '@/ui'
import transitionLoader from '@/loaders/transitionLoader'
import Loader from '@/loaders/Loader'
import { getExtension } from '@/helpers'


class Documents extends Highway.Renderer {

  onEnter() {
    
    const items = document.querySelectorAll('.c-list__item')

    items.forEach(el => {
      const itemImg = el.querySelector('.doc-icon')
      const itemLink = getExtension(el.getAttribute('href'))

      switch (itemLink) {
        case 'pdf':
          itemImg.setAttribute('src', `${itemImg.getAttribute('data-src')}pdf.svg`)
          break
        case 'doc':
          itemImg.setAttribute('src', `${itemImg.getAttribute('data-src')}doc.svg`)
          break
        default:
          itemImg.setAttribute('src', `${itemImg.getAttribute('data-src')}other.svg`)
          break
      }

    })
  }

  onEnterCompleted() {

    window.addEventListener('load', () => new Loader(transitionLoader))
    footerScrollbar()
  }

}
// Don`t forget to export your renderer
export default Documents
