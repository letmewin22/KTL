const sticky = (item, rel) => {

  if (item.getBoundingClientRect().top <= 100) {
    item.classList.add('e-fixed')
  } else {
    item.classList.remove('e-fixed')
  }

  // item.style.top = rel.getBoundingClientRect().top + 'px'

  window.requestAnimationFrame(() => sticky(item, rel))
}

export default sticky
