import gsap from 'gsap'

// Initial state
let scrollPos = 0

const navbar = document.querySelector('.navbar')

const showBurger = () => {
  const tl = gsap.timeline()
  tl.to(navbar.querySelector('.navbar__nav'), { duration: 0.3, opacity: 0, ease: 'power1.out' }, 0)
  tl.to(navbar.querySelector('.navbar__lang'), { duration: 0.3, opacity: 0, ease: 'power1.out' }, 0)
  tl.to(navbar.querySelector('.navbar__burger'), { duration: 0.3, opacity: 1, display: 'block', ease: 'power1.out' }, 0)
  tl.to(navbar.querySelector('.navbar__nav'), { duration: 0.3, display: 'none' }, 0.3)
  tl.to(navbar.querySelector('.navbar__lang'), { duration: 0.3, display: 'none' }, 0.3)
}

const hideBurger = () => {
  const tl = gsap.timeline()
  tl.to(navbar.querySelector('.navbar__nav'), { duration: 0.3, opacity: 1, display: 'block', ease: 'power1.out' }, 0)
  tl.to(navbar.querySelector('.navbar__lang'), { duration: 0.3, opacity: 1, display: 'block', ease: 'power1.out' }, 0)
  tl.to(navbar.querySelector('.navbar__burger'), { duration: 0.3, opacity: 0, ease: 'power1.out'}, 0)
  tl.to(navbar.querySelector('.navbar__burger'), { duration: 0.01, display: 'none'}, 0.3)
}

const scrollNav = () => {
  if (document.body.getBoundingClientRect().top > scrollPos)
    document.body.classList.remove('nav-hidden')
  else if (document.body.getBoundingClientRect().top < scrollPos && scrollPos <= 0) {
    document.body.classList.add('nav-hidden')
    window.innerWidth > 960 && showBurger()
  }
  else if (scrollPos === 0)
    window.innerWidth > 960 && hideBurger()

  scrollPos = document.body.getBoundingClientRect().top
  window.requestAnimationFrame(scrollNav)
}

export default scrollNav
