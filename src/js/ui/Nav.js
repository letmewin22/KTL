import gsap from 'gsap'
import swipedetect from '@/libs/swipe'

export default class Nav {

  constructor() {

    this.nav = document.querySelector('.menu')

    this.closeBtn = this.nav.querySelector('.menu__close')
    this.openBtn = document.querySelector('.navbar__burger')
    this.items = this.nav.querySelectorAll('.menu__item')
    this.itemsWrapper = this.nav.querySelector('.menu-items__wrapper')
    this.vlines = this.nav.querySelectorAll('.menu__v-line')
    this.lines = this.nav.querySelectorAll('.menu__line')
    this.h = this.nav.querySelectorAll('.menu__h3')
    this.overlay = this.nav.querySelector('.menu__overlay')

    this.animate = false

    this.openBtn.addEventListener('click', this.open.bind(this))
    this.closeBtn.addEventListener('click', this.close.bind(this))
    this.overlay.addEventListener('click', this.close.bind(this))
    this.items.forEach(el => el.addEventListener('click', this.close.bind(this)))
    

    swipedetect(this.nav, 50, (swipedir) => {
      swipedir === 'right' && this.close()
    })
    swipedetect(document.body, window.innerWidth * 0.7, (swipedir) => {
      swipedir === 'left' && this.open()
    })

    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape')
        this.close()
    })
  }

  open() {

    if(this.animate) return

    this.animate = true
    document.body.classList.add('e-fixed')

    this.nav.style.display = 'block'

    const tl = gsap.timeline({onComplete: () => {
      this.animate = false
    }})

    tl.set(this.overlay, {opacity: 0})
    tl.set(this.vlines, {height: 0})
    tl.set(this.lines, {width: 0})
    tl.set(this.h, {opacity: 0})
    tl.set(this.items, {opacity: 0, y: 60})
    tl.set(this.itemsWrapper, {opacity: 0, borderRadius: '50%', x: '100%'})

    tl.to(this.overlay, { duration: 0.5, opacity: 1, ease: 'power2.out' }, 0)
    tl.to(this.itemsWrapper, { duration: 1, x: 0, opacity: 1, borderRadius: '0px', ease: 'power4.out' }, 0)
    tl.to(this.vlines, { duration: 0.5, height: '100%', ease: 'power2.out', stagger: 0.15 }, 0.3)
    tl.to(this.lines, { duration: 0.5, width: '100%', ease: 'power2.out', stagger: 0.15 }, 0.3)
    tl.to(this.h, { duration: 0.5, opacity: 1, ease: 'power2.out' }, 0.3)
    tl.to(this.items, { duration: 0.5, opacity: 1, y: 0, ease: 'power2.out', stagger: 0.1 }, 0.4)
  }

  close() {

    if(this.animate) return

    this.animate = true

    const tl = gsap.timeline({onComplete: () => {
      this.nav.style.display = 'none'
      document.body.classList.remove('e-fixed')
      this.animate = false
    }})
    tl.to(this.items, { duration: 0.5, opacity: 0, y: -60, ease: 'power2.out', stagger: 0.1 }, 0)
    tl.to(this.vlines, { duration: 0.5, height: '0%', ease: 'power2.out', stagger: 0.15 }, 0)
    tl.to(this.lines, { duration: 0.5, width: '0%', ease: 'power2.out', stagger: 0.15 }, 0)
    tl.to(this.h, { duration: 0.5, opacity: 0, ease: 'power2.out' }, 0)
    tl.to(this.itemsWrapper, { duration: 1, x: '100%', opacity: 1, borderRadius: '5%', ease: 'power4.out' }, 0.4)
    tl.to(this.overlay, { duration: 0.5, opacity: 0, ease: 'power2.out' }, 0.5)

    
    
    
  }
}
