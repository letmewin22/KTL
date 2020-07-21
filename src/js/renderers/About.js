import Highway from '@dogstudio/highway'

import { footerScrollbar } from '@/ui'
import transitionLoader from '@/loaders/transitionLoader'
import Loader from '@/loaders/Loader'
import { splitLines } from '@/helpers/index'

class About extends Highway.Renderer {

  onEnterCompleted() {

    window.addEventListener('load', () => new Loader(transitionLoader))
    footerScrollbar()

    splitLines(document.querySelector('.about-header__h1'))

    document.querySelectorAll('.about-header__h1 .splitted-line').forEach(el => {
      const line = document.createElement('span')
      line.classList.add('h1-span-line')
      el.parentNode.insertBefore(line, el)
    })

  }
}
// Don`t forget to export your renderer
export default About
