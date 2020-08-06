const btnSound = () => {
  const href = document.documentElement.getAttribute('data-site-url') + '/wp-content/themes/ktl/'
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
