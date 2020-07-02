import ScrollInView from './ScrollInView.js'
import gsap from 'gsap'

class ScrollAnimations extends ScrollInView {

  constructor() {

    super()

    this.sections = document.querySelectorAll('.section')

    new ScrollInView(this.sections, this.sectionAnimation, 0.5)
  }

  sectionAnimation(elem) {
    const tl = gsap.timeline()
    tl.to(elem.querySelectorAll('.a-line'), { duration: 1, width: '100%', ease: 'power1.out', stagger: 0.2 }, 0)
    tl.to(elem.querySelectorAll('.a-h2'), { duration: 1, opacity: 1, y: 0, ease: 'power1.out' }, 0.2)
    tl.to(elem.querySelectorAll('.a-btn'), { duration: 1, opacity: 1, ease: 'power1.out' }, 0.4)
    tl.to(elem.querySelectorAll('.a-p'), { duration: 1, opacity: 1, y: 0, ease: 'power1.out', stagger: 0.2 }, 0.5)
    tl.to(elem.querySelectorAll('.a-item'), { duration: 1, opacity: 1, y: 0, ease: 'power1.out', stagger: 0.2 }, 0.4)
  }
  
}

export default ScrollAnimations
