export default class ParallaxScroller {

  constructor(selector, speedIndex) {

    this.speed = [speedIndex || 15, 25, 12, 7]
    this.layer = document.querySelectorAll(selector)

    this.newPixel = document.getElementById('scroll-container').scrollTop

    this.percent = this.newPixel / ((document.getElementById('scroller').getBoundingClientRect().height - window.innerHeight) + document.querySelector('footer').getBoundingClientRect().height) * 100

    this.looper()
    screen.width > 1024 && this.scroller('.full-screen-img__img-wrapper')
    this.footerScroller('.footer')
    window.requestAnimationFrame(() => new ParallaxScroller(selector, speedIndex))

  }

  looper() {

    if (this.newPixel > 0) {
      
      if(document.querySelector('.scroller-parallax')) document.querySelector('.scroller-parallax').style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,-${this.newPixel * 0.011 * this.speed[0]},0,1)` 
      for (let i = 0; i < this.layer.length; i++) {
        
        (i + 1) % 2 === 0 ?
          this.layer[i].style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,-${this.newPixel * 0.011 * this.speed[i]},0,0,1)` :
          this.layer[i].style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${this.newPixel * 0.025 * this.speed[i]},0,0,1)`

      }
    } else {
      if(document.querySelector('.scroller-parallax')) document.querySelector('.scroller-parallax').style.transform = 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)'
      for (let i = 0; i < this.layer.length; i++) {
        (i + 1) % 2 === 0 ?
          this.layer[i].style.transform = 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)' :
          this.layer[i].style.transform = 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)'

      }
    }

  }

  scroller(selector) {
    if (document.querySelector(selector)) {
      if (this.newPixel > 0) {
        document.querySelector(selector).style.transform = `matrix3d(${1 + this.newPixel * 0.00007},0,0.00,0,0.00,${1 + this.newPixel * 0.00007},0.00,0,0,0,1,0,0,${-document.querySelector(selector).getBoundingClientRect().height / 3 + this.newPixel * 0.15},0,1)`
      }
    }
  }

  footerScroller(selector) {
    if (document.querySelector(selector)) {
      if (this.newPixel > 0) {
        document.querySelector(selector).style.transform = `translateY(${100 -this.percent}%)`
      }
    }
  }
}
