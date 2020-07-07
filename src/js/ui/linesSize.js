const linesSize = (el, axis) => {
  if(!axis) {
    el.style.height = document.querySelector('.main-header__content').getBoundingClientRect().height + 'px'
    el.style.width = document.querySelector('.main-header__content').getBoundingClientRect().width + 'px'
  } else if (axis === 'y') 
    el.style.height = document.querySelector('.main-header__content').getBoundingClientRect().height + 'px'
  else 
    el.style.width = document.querySelector('.main-header__content').getBoundingClientRect().width + 'px'
}

export default linesSize
