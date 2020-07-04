const sticky = (el, mq, offset) => {

  const wrapper = document.createElement('div')
  wrapper.classList.add('sticky-wrapper')

  el.parentNode.insertBefore(wrapper, el)
  // move el into wrapper
  wrapper.appendChild(el)

  let state = false
  const handler = () => {
    // document.documentElement.scrollTop >= rel.getBoundingClientRect().top - window.innerHeight
    if (screen.width >= mq) {
      if (el.parentNode.getBoundingClientRect().y <= offset) {
        if (el.parentNode.parentNode.getBoundingClientRect().bottom - (el.scrollHeight + offset) <= 0) {
          if (!state) {
            el.style.position = 'relative'
            el.style.top = (-el.parentNode.getBoundingClientRect().top + offset) + 'px'
            state = true
          }
        } else {
          el.style.position = 'fixed'
          el.style.top = offset + 'px'
          state = false
        }
      }
      else {
        el.style.position = ''
        el.style.top = 0
      }
    } else {
      el.style.position = ''
      el.style.top = 0
    }
    window.requestAnimationFrame(() => handler())
  }

  handler()

}

NodeList.prototype.sticky = function(mq, offset) {
  this.forEach(el => sticky(el, mq, offset))
}

export default sticky
