export default class Resize {

  constructor(cb) {
    this.cb = cb || function() {} 

    this.resizeHandler = () => {
      this.cb()
    }
  }

  init() {
    this.cb()
    window.addEventListener('resize', this.resizeHandler)
  }

  destroy() {
    window.removeEventListener('resize', this.resizeHandler)
    this.cb = function() {} 
  }
}
