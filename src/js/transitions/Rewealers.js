import Highway from '@dogstudio/highway'
import gsap from 'gsap'
import imagesLoaded from 'imagesloaded'

import transitionLoader from '@/loaders/transitionLoader'

class Rewealers extends Highway.Transition {

  out({ from, done }) {
    document.querySelector('.navbar').classList.add('remove-bg')
    document.body.style.cursor = 'wait'
    const overlay = document.querySelector('.page-transition')
    const rewealers = document.querySelectorAll('.page-transition__item')
    const tl = gsap.timeline({ onComplete: done })

    tl.to(from, { duration: 0.7, opacity: 0 })
    tl.fromTo(overlay, { visibility: 'hidden' }, { duration: 0, y: '0%', visibility: 'visible' }, 0)
    tl.fromTo(rewealers, { x: '-100%' }, { duration: 0.8, ease: 'power4.out', stagger: 0.12, x: '0%' }, 0.01)
  }


  in({ from, to, done }) {
    this.imgLoad = imagesLoaded(document.querySelectorAll('.pli'), { background: true })
    this.imgLoad.on('always', () => {
      // Reset Scroll
      window.scrollTo(0, 0)
      document.body.classList.remove('black')
      document.getElementById('scroll-container').scrollTo(0, 0)
      // Remove Old View
      from.remove()

      const lines = to.querySelectorAll('.transition-line')
      const w = to.querySelectorAll('.transition-line')[0].getBoundingClientRect().width

      lines.forEach(el => {
        const newLines = el.cloneNode(true)

        newLines.classList.add('a-transition')

        newLines.style.cssText = `
          position: fixed;
          z-index: 10000;
          top: ${el.getBoundingClientRect().top}px;
          left: ${el.getBoundingClientRect().left}px;
          width: 0px;
        `

        document.body.appendChild(newLines)
      })

      const overlay = document.querySelector('.page-transition')
      const tl = gsap.timeline({
        onComplete: () => {
          document.querySelectorAll('.a-transition').forEach(el => document.body.removeChild(el))
          document.body.style.cursor = 'auto'
          document.querySelector('.navbar').classList.remove('remove-bg')
          overlay.style.visibility = 'hidden'
          done()
        }
      })

      tl.to(document.querySelectorAll('.a-transition'),
        {
          duration: 0.5, width: w, ease: 'expo.inOut', stagger: 0.1,
          onComplete: transitionLoader.bind(null, 0.7)
        }, 0)

      tl.to(overlay, { duration: 1, y: '-100%', ease: 'expo.inOut' }, '+=0.2')

      tl.fromTo(to, { opacity: 0 }, {
        duration: 0.7, opacity: 1
      }, 1)
    })


  }


}

export default Rewealers
