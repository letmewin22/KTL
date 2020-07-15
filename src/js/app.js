import '@/libs/ie-detect'

import Highway from '@dogstudio/highway'
import gsap from 'gsap'

import '@/libs/smoothscroll'
import cssWebP from '@/libs/testWebP'
import moveEl from '@/libs/moveEl'
import bgWebP from '@/bgWebP'

import { ScrollBar, Sticky, repeatedText, Links } from '@/components'
import FormSubmit from '@/form/FormSubmit.js'
import { cntBtn, footer, Dropdown, NavbarPos, Nav, CntPopup, btnSound, activeLink } from '@/ui'
import ScrollAnimations from '@/scroll/ScrollAnimations'


import { Home, Service } from '@/renderers'
import { Rewealers } from '@/transitions'


// cssWebP()
const H = new Highway.Core({
  renderers: {
    home: Home,
    service: Service
  },
  transitions: {
    default: Rewealers
  }
})

repeatedText('btn', 'btn__text-wrapper', 8)

const winH = () => {
  let vh = window.innerHeight * 0.01
  document.body.style.setProperty('--vh', `${vh}px`)
}

// 
window.addEventListener('beforeunload', () => {
  document.body.style.opacity = 0
  document.body.style.position = 'fixed'
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  window.resizeTo(window.innerWidth, window.innerHeight)
})

window.addEventListener('load', () => {

  bgWebP()
  activeLink()
  new Links(document.querySelectorAll('.navbar__link'))
  new Links(document.querySelectorAll('.footer__nav-link'))
  new Links(document.querySelectorAll('.menu__link'))

  document.querySelectorAll('.form').forEach(el => new FormSubmit(el))
  footer()
  cntBtn()
  new ScrollAnimations()
  new Nav()
  new ScrollBar()
  document.querySelectorAll('.custom:not(html):not(#scroll-container)').forEach(el => {
    new ScrollBar(el)
  })

  new CntPopup()

  const dropdown = new Dropdown({ btn: '.dropdown__btn', items: '.dropdown__content', parent: '.dropdown' })
  dropdown.init()

  const navbarPos = new NavbarPos()
  navbarPos.init()

  winH()
  moveEl()

  document.querySelectorAll('.a-sticky').forEach(el => {
    const sticky = new Sticky(el, { breakpoint: 960, offset: 60 })
    sticky.init()
  })

  btnSound()
})


window.addEventListener('resize', footer)
window.addEventListener('resize', winH)




H.on('NAVIGATE_IN', () => {
  moveEl()
  activeLink()
})

H.on('NAVIGATE_END', () => {

  bgWebP()

  const navbarPos = new NavbarPos()
  navbarPos.destroy()
  navbarPos.init()

  footer()

  const dropdown = new Dropdown({ btn: '.dropdown__btn', items: '.dropdown__content', parent: '.dropdown' })
  dropdown.init()

  new Links(document.querySelectorAll('.footer__nav-link'))

  new ScrollBar()
  new ScrollAnimations()

  document.querySelectorAll('.custom:not(html):not(#scroll-container)').forEach(el => {
    new ScrollBar(el)
  })

  document.querySelectorAll('.form:not(.activated)').forEach(el => new FormSubmit(el))
  btnSound()
  repeatedText('btn:not(.repeat-activated)', 'btn__text-wrapper', 8)

  document.querySelectorAll('.a-sticky').forEach(el => {
    const sticky = new Sticky(el, { breakpoint: 960, offset: 60 })
    sticky.init()
  })

})




const btn = document.querySelector('.form .btn')
const rewealers = document.querySelector('.form__rewealers')
const rewealersItems = rewealers.querySelectorAll('.form__rewealer')


const audio = new Audio('/audio/succes.mp3')
audio.volume = 0.1

btn.addEventListener('click', () => {
  setTimeout(() => {
    document.body.classList.add('e-fixed')
    rewealers.style.display = 'block'
    const tl = gsap.timeline()
    tl.to(rewealersItems, { duration: 0.8, x: '0%', ease: 'expo.out', stagger: 0.2 })
  
    const styles = {
      top: btn.getBoundingClientRect().top,
      left: btn.getBoundingClientRect().left,
      width: btn.getBoundingClientRect().width,
      height: btn.getBoundingClientRect().height,
      backgroundColor: window.getComputedStyle(btn).backgroundColor,
    }
  
    const duplicate = document.createElement('div')
  
    duplicate.classList.add('btn__suc')
  
    duplicate.style.cssText = `
    position: absolute;
    top: ${styles.top}px;
    left: ${styles.left}px;
    width: ${styles.width}px;
    height: ${styles.height}px;
    background-color: ${styles.backgroundColor};
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    `
    duplicate.innerHTML = `<svg width="98" class="succes-svg" height="68" viewBox="0 0 98 68" stroke="white" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.4374 58.8116L35.1441 59.5183L35.8512 58.812L92.5004 2.22715C92.9216 1.87771 93.4574 1.69571 94.0051 1.71687C94.5644 1.73847 95.0949 1.97032 95.4906 2.36609C95.8864 2.76185 96.1183 3.29238 96.1399 3.85166C96.161 4.39931 95.9791 4.93502 95.6297 5.3562L35.2084 65.8093L2.33796 32.9704C1.98874 32.5492 1.80686 32.0136 1.82801 31.4661C1.84962 30.9068 2.08146 30.3763 2.47723 29.9805C2.873 29.5848 3.40353 29.3529 3.96281 29.3313C4.5104 29.3102 5.04607 29.4921 5.46723 29.8414L34.4374 58.8116Z"stroke-width="2"/>
    </svg>
    `
  
    document.body.appendChild(duplicate)
    gsap.to(duplicate, { duration: 0.5, backgroundColor: '#00C853' })
  
    btn.style.cssText = `
    opacity: 0;
    visibility: hidden;
    `
  
    gsap.to(duplicate, {
      duration: 0.8,
      left: rewealers.getBoundingClientRect().left + 36,
      top: rewealers.getBoundingClientRect().top + rewealers.getBoundingClientRect().height / 2,
      y: '-50%',
      width: 230,
      height: 230,
      borderRadius: '50%',
      ease: 'expo.inOut'
    })
    gsap.to(document.querySelector('.succes-svg'), {duration: 0.7, strokeDashoffset: 0, ease: 'power1.out', delay: 0.6})
    gsap.to(document.querySelector('.succes-svg'), {duration: 0.4, fill: 'white', ease: 'power1.Out', delay: 0.9})
    gsap.to(rewealers.querySelector('.form__thankyou-h5'), {duration: 0.5, opacity: 1, y: 0, ease: 'expo.out', delay: 0.8})
    gsap.to(rewealers.querySelectorAll('.form__thankyou-line'), {duration: 0.5, width: '100%', ease: 'expo.out', delay: 0.8, stagger: 0.15})
    audio.play()
  }, 500)

  setTimeout(() => {
    gsap.to(rewealers, {duration: 0.5, opacity: 0, ease: 'expo.out'})
    gsap.to(rewealers.querySelector('.form__thankyou'), {duration: 0.5, opacity: 0, ease: 'expo.out'})
    gsap.to(document.querySelector('.btn__suc'), {duration: 0.5, opacity: 0, ease: 'expo.out'})
    btn.style.cssText = `
    visibility: visible;
    opacity: 1;
    `
    document.body.classList.remove('e-fixed')
  }, 4500)
  
})


