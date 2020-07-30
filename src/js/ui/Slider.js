import { Resize } from '@/helpers/index'
import swipedetect from '@/libs/swipe'

export default class Slider {

  constructor(el) {
    this.el = el

    this.slides = this.el.querySelector('.slider__slides')
    this.slide = [...this.el.querySelectorAll('.slider__slide')]

    this.nav = {
      left: this.el.querySelector('.slider__nav-item--left'),
      right: this.el.querySelector('.slider__nav-item--right'),
      counterCurrent: this.el.querySelector('.slider__counter-cur'),
      counterTotal: this.el.querySelector('.slider__counter-total'),
    }

    this.counter = 0

    this.render()
  }

  render() {

    // document.body.style.overflow = 'hidden'
    this.slides.style.transition = 'transform 0.5s ease'

    this.resize = new Resize(() => this.calculate())
    this.resize.init()

    this.moveL = this.move.bind(this, 'left')
    this.moveR = this.move.bind(this, 'right')

    this.nav.left.addEventListener('click', this.moveL)
    this.nav.right.addEventListener('click', this.moveR)
    this.nav.counterTotal.innerHTML = this.slide.length

    swipedetect(this.el, 20, (swipedir) => {
      swipedir === 'left' && this.moveL()
      swipedir === 'right' && this.moveR()
    })
  }

  calculate() {
    this.sizes = {
      fullW: this.slides.scrollWidth,
      slideW: this.slide[0].getBoundingClientRect().width,
      maxSize: this.slide.length - 1
    }
  }

  move(dir) {

    if (dir === 'left')
      this.counter > 0 ? this.counter-- : this.counter = this.sizes.maxSize
    else if (dir === 'right')
      this.counter < this.sizes.maxSize ? this.counter++ : this.counter = 0

    this.slides.style.transform = `translateX(-${this.sizes.slideW * this.counter}px)`

    this.slide.forEach(el => el.classList.remove('slide--active'))
    this.slide[this.counter].classList.add('slide--active')
    this.nav.counterCurrent.innerHTML = this.counter + 1
  }

  destroy() {
    this.nav.left.removeEventListener('click', this.moveL)
    this.nav.right.removeEventListener('click', this.moveR)

    this.slide.forEach(el => el.classList.remove('slide--active'))
    this.counter = 0
    this.resize.destroy()
  }
}
