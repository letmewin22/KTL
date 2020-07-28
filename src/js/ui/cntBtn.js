const cntBtn = () => {
  if(-document.getElementById('scroller').getBoundingClientRect().y + window.innerHeight >= document.getElementById('scroller').getBoundingClientRect().height * 0.88) {
    document.querySelector('.cnt-btn').classList.add('disabled')
  } else {
    document.querySelector('.cnt-btn').classList.remove('disabled')
  }
  window.requestAnimationFrame(cntBtn)
}

export default cntBtn
