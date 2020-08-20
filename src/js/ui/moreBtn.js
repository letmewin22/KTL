const moreBtn = () => {
  const items = [...document.querySelectorAll('.form-section__contact:not(.contacts-pop-up-section__contact)')]
  if (items.length <= 0) return

  const btns = [...document.querySelectorAll('.form-section__more-btn')]
  if (btns.length <= 0) return
  
  let state = false
  
  items.forEach(el => el.classList.add('js-hide'))

  const show = (length) => {
    for (let i = 0; i < length; i++) {
      items[i].style.setProperty('--sh', `${items[i].scrollHeight}px`)
      items[i].classList.remove('js-hide')
    }
  }
  show(4)

  const btnHandler = (btn) => {
    if(!state) {
      show(items.length)
      btn.innerText = btn.getAttribute('data-hide')
      state = true
    } else {
      items.forEach(el => el.classList.add('js-hide'))
      show(4)
      btn.innerText = btn.getAttribute('data-show')
      state = false
    }

  }

  btns.forEach(btn => {
    btn.addEventListener('click', btnHandler.bind(null, btn))   
  })

}

export default moreBtn
