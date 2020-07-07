import gsap from 'gsap'

export default class ScrollBar {
  constructor(el) {

    this.el = el || document.documentElement
    this.scrollElem = el || window
    this.wrapper = el || document.body

    this.scrollbar = document.createElement('aside')
    el ? this.scrollbar.classList.add('scrollbar', 'block-scrollbar') : this.scrollbar.classList.add('scrollbar')

    this.scrollbar.innerHTML = '<span class="scrollbar__thumb"></span>'

    this.inactiveDelay = 2
    this.timer = 0

    this.active = () => {
      this.timer = 0
    }

    this.scroll = () => {
      this.scrollPos()
    }

    this.mql = window.matchMedia('(max-width: 1024px')

    this.init()
  }

  init() {
    this.media()
    this.mql.addListener(this.media.bind(this))
  }

  setHeight() {
    if (this.el.scrollHeight === window.innerHeight) this.height = 0
    this.height = window.innerHeight * (window.innerHeight / this.el.scrollHeight)

    this.thumb.style.height = this.height + 'px'
  }

  scrollPos() {
    this.thumb.classList.add('scrolling')
    const scrollPos = this.el.scrollTop
    const percent = 100 * scrollPos / (this.el.scrollHeight - document.documentElement.clientHeight)

    this.thumb.style.top = percent + '%'
    this.thumb.style.transform = `translateY(-${percent}%)`

    this.active()
  }


  events() {

    const progressUpdate = (event) => {
      const h = this.scrollbar.offsetHeight
      const o = event.clientY
      gsap.to(this.el, { duration: 0.3, scrollTop: this.el.scrollHeight * (o / h), ease: 'none' })
    }

    const mousedown = () => {
      this.wrapper.addEventListener('mousemove', progressUpdate)
    }

    this.scrollbar.addEventListener('mousedown', mousedown)

    const mouseUp = () => {
      this.wrapper.removeEventListener('mousemove', progressUpdate)

    }

    this.wrapper.addEventListener('mouseup', mouseUp)
    this.wrapper.addEventListener('mouseleave', mouseUp)

    this.scrollbar.addEventListener('click', progressUpdate)

    this.scrollElem.addEventListener('scroll', this.scroll)
  }

  controlsEvent() {

    if (this.timer >= this.inactiveDelay) {
      this.thumb.classList.remove('scrolling')
      return
    } else {
      this.thumb.classList.add('scrolling')
    }
  }

  detectInactivity() {

    this.timerTicker = setInterval(() => { this.timer++ }, 1000)
    this.interval = setInterval(this.controlsEvent.bind(this), 120)

    this.scrollbar.addEventListener('mouseenter', this.active)
  }

  media() {
    if (!this.mql.matches) {
      this.scrollbar.ondragstart = function() {
        return false
      }

      this.wrapper.appendChild(this.scrollbar)
      this.scrollbar.classList.remove('hidden')
      this.thumb = this.scrollbar.querySelector('.scrollbar__thumb')
      this.setHeight()
      window.addEventListener('resize', this.setHeight.bind(this))


      this.detectInactivity()
      this.events()
    } else {
      document.querySelectorAll('.scrollbar').length > 0 && 
      document.querySelectorAll('.scrollbar').forEach(el => {
        el.classList.add('hidden')
        el.parentNode.removeChild(el)
      })
        
      window.removeEventListener('scroll', this.scroll)
    }
  }
}
