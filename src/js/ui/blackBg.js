const blackBg = () => {
  const item = document.querySelector('.dark-section')

  if(item.getBoundingClientRect().top <= window.innerHeight * 0.9 && -item.getBoundingClientRect().top <= item.getBoundingClientRect().height / 2) {
    document.body.classList.add('black')
  } else {
    document.body.classList.remove('black')
  }

  window.requestAnimationFrame(blackBg)

}

export default blackBg
