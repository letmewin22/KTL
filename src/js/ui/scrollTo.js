import gsap from 'gsap'

const scrollTo = (el) => {
  el.addEventListener('click', () => {

    gsap.to(document.getElementById('scroll-container'), { duration: 1, scrollTop: window.innerHeight * 1.1 })
  })
}

export default scrollTo
