export default class ParallaxScroller {

  constructor(speedIndex) {

    this.speed = [speedIndex || 15, 25, 12, 7]

    this.looperState = false
    this.scrollerState = false
    this.footerState = false

    cancelAnimationFrame(this.raf)

    this.callbacks = []

    this.rafhandler = () => {

      this.newPixel = document.getElementById('scroll-container').scrollTop

      this.callbacks.map(el => {
        el()
      })

      this.raf = window.requestAnimationFrame(this.rafhandler.bind(this))
    }

    this.rafhandler()
  }

  looper(selector) {

    this.layer = document.querySelectorAll(selector)

    if (this.newPixel > 0) {

      if (document.querySelector('.scroller-parallax')) document.querySelector('.scroller-parallax').style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,-${this.newPixel * 0.011 * this.speed[0]},0,1)`

      for (let i = 0; i < this.layer.length; i++) {

        (i + 1) % 2 === 0 ?
          this.layer[i].style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,-${this.newPixel * 0.011 * this.speed[i]},0,0,1)` :
          this.layer[i].style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${this.newPixel * 0.025 * this.speed[i]},0,0,1)`

      }
    } else {

      if (document.querySelector('.scroller-parallax')) document.querySelector('.scroller-parallax').style.transform = 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)'

      for (let i = 0; i < this.layer.length; i++) {
        (i + 1) % 2 === 0 ?
          this.layer[i].style.transform = 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)' :
          this.layer[i].style.transform = 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)'

      }
    }

    !this.looperState && this.callbacks.push(this.looper.bind(this, selector))
    this.looperState = true
  }

  scroller(selector) {

    if (document.querySelector(selector)) {

      if (this.newPixel > 0) {

        document.querySelector(selector).style.transform = `matrix3d(${1 + this.newPixel * 0.00007},0,0.00,0,0.00,${1 + this.newPixel * 0.00007},0.00,0,0,0,1,0,0,${-document.querySelector(selector).getBoundingClientRect().height / 3 + this.newPixel * 0.15},0,1)`
      }
    }

    !this.scrollerState && this.callbacks.push(this.scroller.bind(this, selector))
    this.scrollerState = true
  }

  footer() {
    
    if (document.querySelector('footer')) {

      this.percent = this.newPixel / ((document.getElementById('scroller').getBoundingClientRect().height - window.innerHeight) + document.querySelector('footer').getBoundingClientRect().height) * 100

      if (this.newPixel > 0) {
        document.querySelector('footer').style.transform = `translateY(${100 - this.percent}%)`
      }
    }

    !this.footerState && this.callbacks.push(this.footer.bind(this))
    this.footerState = true
  }
}
