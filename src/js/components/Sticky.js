export default class Sticky {
  constructor(el, options) {

    this.el = el
    this.options = options

    this.state = false
    this.mql = window.matchMedia(`(max-width: ${this.options.breakpoint}px)`)
  }

  init() {
    this.createWrapper()
    this.mql.addListener(this.handler.bind(this))
    this.handler()
  }

  createWrapper() {

    const wrapper = document.createElement('div')
    wrapper.classList.add('sticky-wrapper')

    this.el.parentNode.insertBefore(wrapper, this.el)
    wrapper.appendChild(this.el)
  }

  addSticky() {
    this.el.style.position = 'fixed'
    this.el.style.top = this.options.offset + 'px'
    this.state = false
  }

  outerWrapperSticky() {
    this.el.style.position = 'relative'
    this.el.style.top = (-this.el.parentNode.getBoundingClientRect().top + this.options.offset) + 'px'
    this.state = true
  }

  removeSticky() {
    this.el.style.position = ''
    this.el.style.top = 0
  }

  handler() {
    if (!this.mql.matches) {
      if (this.el.parentNode.getBoundingClientRect().y <= this.options.offset) {
        if (this.el.parentNode.parentNode.getBoundingClientRect().bottom - (this.el.scrollHeight + this.options.offset) <= 0) {
          !this.state && this.outerWrapperSticky()
        } else {
          this.addSticky()
        }
      }
      else {
        this.removeSticky()
      }
      this.raf = window.requestAnimationFrame(() => this.handler())
    } else {
      this.removeSticky()
      cancelAnimationFrame(this.raf)
    }
  }
}

