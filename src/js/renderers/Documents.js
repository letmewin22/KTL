import Highway from '@dogstudio/highway'

import { footerScrollbar } from '@/ui'
import transitionLoader from '@/loaders/transitionLoader'
import Loader from '@/loaders/Loader'
import { getExtension } from '@/helpers'
import { Accordeon } from '@/components'

class Documents extends Highway.Renderer {
  onEnterCompleted() {
    const items = document.querySelectorAll('.c-list__item')

    const setBg = (el, path) => {
      el.style.backgroundImage = `url(${el.getAttribute('data-src')}${path})`
    }

    items.forEach((el) => {
      const itemImg = el.querySelector('.doc-icon')
      const attr = el.getAttribute('href')
      const itemLink = getExtension(attr) || el.dataset.icon

      switch (itemLink) {
        case 'pdf':
          setBg(itemImg, 'pdf.svg')
          break
        case 'doc':
          setBg(itemImg, 'doc.svg')
          break
        case 'docx':
          setBg(itemImg, 'doc.svg')
          break
        case 'dd':
          setBg(itemImg, 'dd.svg')
          break
        default:
          setBg(itemImg, 'other.svg')
          break
      }
    })

    window.addEventListener('load', () => new Loader(transitionLoader))
    footerScrollbar()
    new Accordeon('.accordeon-section__item', '.accordeon-section__text')
  }
}
// Don`t forget to export your renderer
export default Documents
