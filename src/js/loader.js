import imagesLoaded from 'imagesloaded'
import Splitting from 'splitting'
import gsap from 'gsap'

import { linesSize } from '@/ui'


export default class Loader {
  constructor() {

    this.pli = document.querySelectorAll('.pli')

    this.countImages = this.pli.length

    this.h1 = document.querySelector('.main-header__h1')
    this.bigText = document.querySelectorAll('.main-header__scroller span')
    this.train = document.querySelector('.main-header__train')
    this.navbar = document.querySelector('.navbar')

    this.loader = document.querySelector('.loader')
    this.overlay = this.loader.querySelector('.loader__overlay')

    this.percentHTML = this.loader.querySelector('.loader__progress-percent')
    this.progressHTML = this.loader.querySelector('.loader__progress-bar')
    this.lineWrapper = this.loader.querySelector('.loader__line-wrapper')
    this.lines = this.loader.querySelectorAll('.loader__line')

    this.num = { num: 0 }
    this.state = false

    this.init()
  }

  init() {
    document.documentElement.classList.remove('loading')
    document.body.classList.add('e-fixed')
    this.imgLoad = imagesLoaded(document.querySelectorAll('.pli'), { background: true })

    this.imgLoad.on('progress', (instance, image) => this.onProgress(image))
    this.imgLoad.on('fail', () => {
      setTimeout(() => {
        this.counter(100)
      }, 650)

    })
  }

  afterLoad() {
    if (!this.state) {

      this.state = true
      this.clone = this.percentHTML.cloneNode(true)

      this.percentHTML.parentNode.insertBefore(this.clone, this.percentHTML)
      this.percentHTML.parentNode.removeChild(this.percentHTML)

      Splitting({ target: this.clone, by: 'chars' })
      this.animation()
    }
  }

  counter(count) {

    return new Promise(resolve => {

      gsap.to(this.num, {
        duration: 0.3, num: count, ease: 'power1.out', onUpdate: () => {
          this.percentHTML.innerHTML = this.num.num.toFixed(0) + '%'
          this.progressHTML.style.width = this.num.num.toFixed(0) + '%'
        },
        onComplete: () => {
          resolve()
          this.num.num === 100 && this.afterLoad()
        }
      })
    })
  }

  onProgress(image) {

    if (image.isLoaded) {

      image.element ? image.element.classList.add('loaded') : image.img.classList.add('loaded')
      const countLoadedImages = document.querySelectorAll('.pli.loaded').length

      this.width = new Number(100 * (countLoadedImages / this.countImages))
      
      this.counter(this.width).then(() => {
        this.counter(this.width)
      })
    }
  }

  animation() {

    const tl = gsap.timeline({
      onComplete: () => {
        this.loader.parentNode.removeChild(this.loader)
        document.body.classList.remove('e-fixed')
      }
    })

    tl.set(this.h1, { opacity: 0 })
    tl.set(this.bigText, { opacity: 0, y: '100%' })
    tl.set(this.train, { opacity: 0 })

    tl.to([...this.clone.querySelectorAll('.char')].reverse(),
      {
        duration: 0.7,
        y: '100%',
        ease: 'expo.inOut',
        stagger: 0.1,
        onComplete: linesSize(this.lineWrapper, 'y')
      }, 0.5)


    tl.to(this.lines,
      {
        duration: 0.5,
        width: '100%',
        ease: 'expo.inOut',
        stagger: 0.1,
        onComplete: () => {
          this.loader.style.justifyContent = 'center'
          this.progressHTML.style.opacity = 0
        }
      }, 1)

    tl.to(this.lineWrapper,
      {
        duration: 1,
        width: document.querySelector('.main-header__content').getBoundingClientRect().width,
        ease: 'expo.inOut',
        stagger: 0,
      }, 1.01)
    tl.to(this.overlay,
      {
        duration: 1,
        y: '-100%',
        ease: 'expo.inOut',
        stagger: 0,
      }, 2.1)

    tl.to(this.bigText, { duration: 1, y: '0%', opacity: 1, ease: 'power4.out', stagger: 0.15 }, 2.7)
    tl.to(this.train, { duration: 1, opacity: 1, ease: 'power2.out' }, 2.7)
    tl.to(this.h1, { duration: 1, opacity: 1, ease: 'power2.out' }, 2.7)
  }
}
