const btnSound = () => {
  const audio = new Audio('/audio/btn.mp3')

  const btn = [...document.querySelectorAll('.btn:not(.activated)')]

  btn.forEach(el => {
    el.classList.add('activated')
    el.addEventListener('click', () => {
      audio.play()
    })
  })
}

export default btnSound
