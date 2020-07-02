const cntBtn = () => {
  if(-document.body.getBoundingClientRect().y >= document.body.getBoundingClientRect().height * 0.88) {
    document.querySelector('.cnt-btn').classList.add('disabled')
  } else {
    document.querySelector('.cnt-btn').classList.remove('disabled')
  }
  window.requestAnimationFrame(cntBtn)
}

export default cntBtn
