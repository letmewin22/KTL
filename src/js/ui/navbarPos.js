import gsap from 'gsap'

export default class NavbarPos {

  constructor() {
    this.mouseFunc = (e) => {
      this.mouseHandler(e)
    }
  }

  init() {

    this.scrollPos = 0
    this.scrollNav()
  }

  showBurger() {

    const tl = gsap.timeline()

    tl.to(document.querySelector('.navbar__nav'), { duration: 0.3, opacity: 0, ease: 'power1.out' }, 0)
    tl.to(document.querySelector('.navbar__lang'), { duration: 0.3, opacity: 0, ease: 'power1.out' }, 0)
    tl.to(document.querySelector('.navbar__burger'), { duration: 0.3, opacity: 1, display: 'block', ease: 'power1.out' }, 0)
    tl.to(document.querySelector('.navbar__nav'), { duration: 0.3, display: 'none' }, 0.3)
    tl.to(document.querySelector('.navbar__lang'), { duration: 0.3, display: 'none' }, 0.3)

  }

  hideBurger() {

    const tl = gsap.timeline()

    tl.to(document.querySelector('.navbar__nav'), { duration: 0.3, opacity: 1, display: 'block', ease: 'power1.out' }, 0)
    tl.to(document.querySelector('.navbar__lang'), { duration: 0.3, opacity: 1, display: 'block', ease: 'power1.out' }, 0)
    tl.to(document.querySelector('.navbar__burger'), { duration: 0.3, opacity: 0, ease: 'power1.out' }, 0)
    tl.to(document.querySelector('.navbar__burger'), { duration: 0.01, display: 'none' }, 0.3)

  }

  mouseHandler(e) {
    if (e.screenY <= document.querySelector('.navbar').scrollHeight + 100)
      document.body.classList.remove('nav-hidden')
    else
      document.body.classList.add('nav-hidden')
  }

  scrollNav() {
    if (document.getElementById('scroller').getBoundingClientRect().top > this.scrollPos) {
      document.body.classList.remove('nav-hidden')
      document.removeEventListener('mousemove', this.mouseFunc)
    }
    else if (document.getElementById('scroller').getBoundingClientRect().top < this.scrollPos && this.scrollPos <= 0) {
      document.body.classList.add('nav-hidden')
      document.querySelector('.navbar').classList.remove('remove-bg')
      document.addEventListener('mousemove', this.mouseFunc)
      window.innerWidth > 960 && this.showBurger()
    }
    else if (this.scrollPos === 0) {
      window.innerWidth > 960 && this.hideBurger()
      document.querySelector('.navbar').classList.add('remove-bg')
    }
    window.innerWidth < 960 && this.showBurger()

    this.scrollPos = document.getElementById('scroller').getBoundingClientRect().top

    this.raf = window.requestAnimationFrame(this.scrollNav.bind(this))
  }

  destroy() {
    this.scrollPos = 0
    cancelAnimationFrame(this.raf)
  }
}
