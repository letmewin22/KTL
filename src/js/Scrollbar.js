import gsap from 'gsap'

export default class ScrollBar {
  constructor() {
    this.scrollbar = document.createElement('aside')
    this.scrollbar.classList.add('scrollbar')

    this.scrollbar.innerHTML = '<span class="scrollbar__thumb"></span>'
    this.scrolling = false

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
    this.mql.addListener(this.media.bind(this))
    this.media()
  }

  setHeight() {
    if(document.documentElement.scrollHeight === window.innerHeight) this.height = 0
    this.height = window.innerHeight * (window.innerHeight / document.documentElement.scrollHeight)

    this.thumb.style.height = this.height + 'px'
  }

  scrollPos() {

    this.thumb.classList.add('scrolling')
    const scrollPos = document.documentElement.scrollTop
    const percent = 100 * scrollPos / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

    this.thumb.style.top = percent + '%'
    this.thumb.style.transform = `translateY(-${percent}%)`

    this.active()
  }


  events() {

    const progressUpdate = (event) => {
      const h = this.scrollbar.offsetHeight
      const o = event.clientY
      gsap.to(document.documentElement, { duration: 0.3, scrollTop: document.documentElement.scrollHeight * (o / h), ease: 'none' })
    }

    const mousedown = () => {
      document.body.addEventListener('mousemove', progressUpdate)
    }

    this.scrollbar.addEventListener('mousedown', mousedown)

    const mouseUp = () => {
      document.body.removeEventListener('mousemove', progressUpdate)
      console.log('mouseUp')

    }

    document.body.addEventListener('mouseup', mouseUp)
    document.body.addEventListener('mouseleave', mouseUp)

    // this.scrollbar.addEventListener('click', progressUpdate)

    window.addEventListener('scroll', this.scroll)
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

      document.body.appendChild(this.scrollbar)
      this.thumb = document.querySelector('.scrollbar__thumb')
      this.setHeight()
      window.addEventListener('resize', this.setHeight.bind(this))


      this.detectInactivity()
      this.events()
    } else {
      document.querySelector('.scrollbar') && document.body.removeChild(document.querySelector('.scrollbar'))
      window.removeEventListener('scroll', this.scroll)
    }
  }
}
