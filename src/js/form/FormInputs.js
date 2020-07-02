export default class FormInputs {

  constructor() {

    this.input = document.querySelectorAll('.form__input-wrapper input')
    this.form = document.querySelector('form')
    this.phone = document.getElementById('phone')
    this.validateText = document.querySelector('.form__validate-text')
    this.formButton = document.querySelector('.form .btn')
    this.label = document.querySelectorAll('label')[2]

    this.koef = +this.validateText.getAttribute('data-value')

    this.focus()
    this.blur()
    this.reset()

    this.phone.oninput = () => this.onInput()

  }

  onInput() {
    this.phone.value = this.phone.value.replace(/[A-z]|[А-я]|[*!@#$%^&{}[\]~""\/\|=]/g, '').replace( /  +/g, ' ' )
    if (this.phone.value.length < this.koef) {
      this.validation()
    } else {
      this.validateText.style.opacity = '0'
      this.label.pseudoStyle().classList = 'form__label'
    }
  }

  focus() {

    let that = this

    function focus() {
      this.classList.add('focus')
      document.body.classList.add('form-focused')
    }

    for (let input of that.input) {
      input.addEventListener('focus', focus)
    }
  }

  blur() {

    let that = this

    function blur() {
      if (this.value === '') {
        this.classList.remove('focus')
        document.body.classList.remove('form-focused')
      }
    }

    for (let input of that.input) {
      input.addEventListener('blur', blur)
    }
  }

  reset() {

    document.body.onclick = () => {
      this.validateText.style.opacity = '0'
      this.label.classList = 'form__label'
    }

    this.phone.oninput = () => {
      this.validateText.style.opacity = '0'
      this.label.pseudoStyle().classList = 'form__label'

    }
  }

}
