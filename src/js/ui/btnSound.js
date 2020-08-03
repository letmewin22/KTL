const btnSound = () => {
  const href = window.location.origin + '/ktl/wp-content/themes/ktl/'
  const audio = new Audio(href + 'audio/btn.mp3')

  const btn = [...document.querySelectorAll('.btn:not(.activated)')]

  btn.forEach(el => {
    el.classList.add('activated')
    el.addEventListener('click', () => {
      audio.play()
    })
  })
}

export default btnSound
