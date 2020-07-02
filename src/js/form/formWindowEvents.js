class FormWindowEvents {

  constructor() {

    this.openBtns = document.querySelectorAll('.form-handler')
    this.formPopUp = document.querySelector('.pop-up-form')
    this.closeBtn = this.formPopUp.querySelector('.close-form-icon')

    this.openBtns.forEach(elem => elem.addEventListener('click', () => this.openEvent()))
    this.closeBtn.addEventListener('click', () => this.closeEvent())
  }

  openEvent() {

    this.formPopUp.classList.add('opened')
    document.body.style.overflowY = 'hidden'
    document.body.style.marginRight = `${this.calcScroll()}px`

  }

  closeEvent() {

    this.formPopUp.classList.remove('opened')
    setTimeout(() => {
      document.body.style.marginRight = '0px'
      document.body.style.overflowY = 'initial'
    }, 1000)
  }

  calcScroll() {

    const div = document.createElement('div')

    div.style.width = '50px'
    div.style.height = '50px'
    div.style.overflowY = 'scroll'
    div.style.visibility = 'hidden'

    document.body.appendChild(div)
    const scrollWidth = div.offsetWidth - div.clientWidth
    div.remove()

    return scrollWidth
  }
}



export default FormWindowEvents
