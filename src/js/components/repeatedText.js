import gsap from 'gsap'

const repeatedText = (el, elLines, duration) => {

  const element = document.querySelectorAll('.' + el)

  element.forEach(elem => {
    elem.classList.add('repeat-activated')
    const tl = gsap.timeline({repeat: -1})
    tl.to(elem.querySelector('.' + elLines), { duration, x: '-50%', ease: 'none' })
    tl.to(elem.querySelector('.' + elLines), { duration: 0, x: '0%', ease: 'none' })
  })

}

export default repeatedText

