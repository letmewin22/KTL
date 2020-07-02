export default class ParallaxScroller {

  constructor(selector, speedIndex) {

    this.speed = [speedIndex || 15, 25, 12, 7]
    this.layer = document.querySelectorAll(selector)

    this.newPixel = window.pageYOffset

    this.percent = this.newPixel / ((document.body.getBoundingClientRect().height - window.innerHeight) + document.querySelector('footer').getBoundingClientRect().height) * 100
    
    if (screen.width > 1024) {
      this.looper()
      this.scroller('.full-screen-img__img-wrapper')
      this.footerScroller('.footer')
      window.requestAnimationFrame(() => new ParallaxScroller(selector, speedIndex))
    }

  }

  looper() {

    if (this.newPixel > 0) {

      for (let i = 0; i < this.layer.length; i++) {

        (i + 1) % 2 === 0 ?
          this.layer[i].style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,-${this.newPixel*0.011*this.speed[i]},0,0,1)` :
          this.layer[i].style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${this.newPixel*0.025*this.speed[i]},0,0,1)`

      }
    }

  }

  scroller(selector) {
    if (document.querySelector(selector)) {
      if (this.newPixel > 0) {
        document.querySelector(selector).style.transform = `translateY(${-300 + this.newPixel*0.15}px) scale(${1 + this.newPixel*0.00007})`
      }
    }
  }

  footerScroller(selector) {
    if (document.querySelector(selector)) {
      if (this.newPixel > 0) {
        document.querySelector(selector).style.transform = `translateY(${100 - this.percent}%)`
      }
    }
  }
}
