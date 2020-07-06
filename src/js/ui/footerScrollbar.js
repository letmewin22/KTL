const footerScrollbar = () => {
  const thumb =  document.querySelector('.footer__scrollthumb')
  const item =  document.querySelector('.footer__nav')

  const scrollPos = item.scrollLeft
  const percent = 100 *scrollPos / (item.scrollWidth-item.clientWidth)

  thumb.style.left = percent + '%'
  thumb.style.transform = `translateX(-${percent}%)`

  window.requestAnimationFrame(footerScrollbar)
}

export default footerScrollbar
