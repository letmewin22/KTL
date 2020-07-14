import Highway from '@dogstudio/highway'
import gsap from 'gsap'

class Default extends Highway.Transition {

  out({from, done }) {
    
    gsap.to(from, { duration: 0.5, opacity: 0, onComplete: done })
  }


  in({ from, to, done }) {
    // Reset Scroll
    window.scrollTo(0, 0)
    document.body.classList.remove('black')
    document.getElementById('scroll-container').scrollTo(0, 0)

    // Remove Old View
    from.remove()
    gsap.set(to, {opacity: 0 })
    gsap.to(to, { duration: 0.5, opacity: 1, onComplete: done })
  }


}

export default Default
