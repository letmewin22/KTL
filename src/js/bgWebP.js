const bgWebP = () => {
  const items = document.querySelectorAll('[data-bg]')
  
  items.forEach(el => {

    const url = el.getAttribute('data-bg')

    if (document.body.classList.contains('webp')) {
      el.style.backgroundImage = `url(${url.slice(0, -3)}webp)`
    } else {
      el.style.backgroundImage = `url(${url})`
    }
  })

}

export default bgWebP
