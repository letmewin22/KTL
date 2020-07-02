const linesSize = () => {
  document.querySelector('.main-header__line-wrapper').style.height = document.querySelector('.main-header__content').getBoundingClientRect().height + 'px'
  document.querySelector('.main-header__line-wrapper').style.width = document.querySelector('.main-header__content').getBoundingClientRect().width + 'px'
}

export default linesSize
