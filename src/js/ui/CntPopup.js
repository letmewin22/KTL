import gsap from 'gsap'
import swipedetect from '@/libs/swipe'
import mutationObserver from '@/mutationObserver'

export default class CntPopup {
  
  constructor() {

    this.popup = document.querySelector('.contacts-pop-up-section')

    this.closeBtn = this.popup.querySelector('.contacts-pop-up-section__close')
    this.openBtn = document.querySelector('.cnt-btn')
    this.items = this.popup.querySelectorAll('.contacts-pop-up-section__contact')
    this.vlines = this.popup.querySelectorAll('.contacts-pop-up-section__v-line')
    this.lines = this.popup.querySelectorAll('.contacts-pop-up-section__line')
    this.h = this.popup.querySelector('.contacts-pop-up-section__h3')
    this.h2 = this.popup.querySelector('.contacts-pop-up-section__h2')
    this.form = this.popup.querySelector('.contacts-pop-up-section .form')
    this.overlay = document.querySelector('.transitions-overlay')

    this.animate = false

    this.init()

  }

  init() {

    this.openBtn.addEventListener('click', this.open.bind(this))
    this.closeBtn.addEventListener('click', this.close.bind(this))

    swipedetect(this.popup, 50, (swipedir) => {
      if (swipedir === 'right')
        this.close()
    })

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape')
        this.close()
    })

    const cBtnHandler = () => {
      document.querySelectorAll('.c-btn').forEach(el => el.addEventListener('click', this.open.bind(this)))
    }
    cBtnHandler()
    mutationObserver(document.getElementById('scroll-container'), cBtnHandler)
  }

  open() {

    if (this.animate) return

    this.animate = true
    document.body.classList.add('e-fixed')

    this.popup.style.visibility = 'visible'

    const tl = gsap.timeline({
      onComplete: () => {
        this.animate = false
      }
    })

    tl.set(this.vlines, { height: 0 })
    tl.set(this.lines, { width: 0 })
    tl.set(this.h, { opacity: 0 })
    tl.set(this.h2, { opacity: 0 })
    tl.set(this.items, { opacity: 0, y: 60 })
    tl.set(this.popup, { borderRadius: '10%', x: '100%' })
    tl.set(this.form, { opacity: 0, y: 20 })
    tl.set(this.overlay, { opacity: 0, visibility: 'hidden' })

    tl.to(this.overlay, { duration: 1, opacity: 0.8, visibility: 'visible', ease: 'power2.out' }, 0)
    tl.to(this.popup, { duration: 1.2, x: 0, borderRadius: '0px', ease: 'power3.out' }, 0.2)
    tl.to(this.vlines, { duration: 0.7, height: '100%', ease: 'power2.out', stagger: 0.15 }, 0.5)
    tl.to(this.lines, { duration: 0.7, width: '100%', ease: 'power2.out', stagger: 0.15 }, 0.5)
    tl.to(this.h, { duration: 0.5, opacity: 1, ease: 'power2.out' }, 0.7)
    tl.to(this.h2, { duration: 0.7, opacity: 1, ease: 'power2.out' }, 0.8)
    tl.to(this.items, { duration: 0.7, opacity: 1, y: 0, ease: 'power2.out', stagger: 0.1 }, 0.7)
    tl.to(this.form, { duration: 0.7, opacity: 1, y: 0, ease: 'power2.out' }, 0.8)
  }

  close() {

    if (this.animate) return

    this.animate = true

    const tl = gsap.timeline({
      onComplete: () => {
        this.popup.style.visibility = 'hidden'
        this.overlay.style.visibility = 'hidden'
        document.body.classList.remove('e-fixed')
        this.animate = false
      }
    })
    tl.to(this.items, { duration: 0.7, opacity: 0, y: -60, ease: 'power2.out', stagger: 0.1 }, 0)
    tl.to(this.vlines, { duration: 0.7, height: '0%', ease: 'power2.out', stagger: 0.15 }, 0)
    tl.to(this.lines, { duration: 0.7, width: '0%', ease: 'power2.out', stagger: 0.15 }, 0)
    tl.to(this.h, { duration: 0.5, opacity: 0, ease: 'power2.out' }, 0)
    tl.to(this.h2, { duration: 0.7, opacity: 0, ease: 'power2.out' }, 0)
    tl.to(this.form, { duration: 0.7, opacity: 0, y: -20, ease: 'power2.out' }, 0)
    tl.to(this.popup, { duration: 1.2, x: '100%', borderRadius: '5%', ease: 'power4.out' }, 0.7)
    tl.to(this.overlay, { duration: 1, opacity: 0, ease: 'power2.inOut' }, 0.8)




  }
}
