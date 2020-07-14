import FormInputs from './FormInputs.js'
import serialize from './formSend.js'

export default class FormSubmit extends FormInputs {

  constructor(form) {
    super(form)
  
    this.form.onsubmit = (e) => this.submit(e)

  }

  validation() {

    this.validateText.querySelector('.koef-inp').innerHTML = this.koef
    this.validateText.querySelector('.koef-outp').innerHTML = this.koef - this.phone.value.trim('').length
    this.validateText.style.opacity = '1'
    this.label.classList.add('red')
    this.formButton.classList.add('red')
    this.phone.focus()
  }

  requestLoad() {

    this.form.reset()
    document.body.classList.remove('form-focused')
    for (let input of this.input) {
      input.classList.remove('focus')
    }

    // dataLayer.push({ 'event': 'otpravka_form' })
  }


  async requestSend() {

    const URL = this.form.getAttribute('data-url')

    try {

      await fetch(URL, {
        method: 'POST',
        body: serialize(this.form),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
        .then(response => response.status >= 200 && response.status < 400 ?
          this.requestLoad() : alert('При отправке произошла ошибка:('))
      // this.requestLoad() : this.requestLoad())

    } catch (e) {
      console.log(e)
    }
  }



  submit(e) {
    e.preventDefault()
    if (this.phone.value.trim('').length < this.koef) {
      this.validation()
    } else {
      this.requestSend()
    }


    return false
  }
}
