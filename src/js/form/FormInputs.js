export default class FormInputs {

  constructor(form) {
  
    this.form = form
    this.input = this.form.querySelectorAll('.form__input-wrapper input')
    this.phone = this.form.querySelector('[type=tel]')
    this.validateText = this.form.querySelector('.form__validate-text')
    this.formButton = this.form.querySelector('.btn')
    this.label = this.form.querySelector('.required')

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
      this.label.classList.remove('red')
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
      this.label.classList = 'form__label-content'
      this.label.classList.remove('red')
    }

    this.phone.oninput = () => {
      this.validateText.style.opacity = '0'
      this.label.classList.remove('red')
    }
  }

}
