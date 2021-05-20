import '@/libs/ie-detect'
import '@/libs/sayHello'

import Highway from '@dogstudio/highway'

import '@/libs/smoothscroll'
import cssWebP from '@/libs/testWebP'
import moveEl from '@/libs/moveEl'
import bgWebP from '@/bgWebP'

import { ScrollBar, Sticky, repeatedText, Links, ParallaxScroller } from '@/components'
import FormSubmit from '@/form/FormSubmit.js'
import { cntBtn, footer, Dropdown, NavbarPos, Nav, CntPopup, btnSound, activeLink, moreBtn } from '@/ui'
import ScrollAnimations from '@/scroll/ScrollAnimations'
import { detectRouter, Resize, langCurrentPage, hideLangToogle } from '@/helpers'

import { Home, Service, Services, About, Partners, Documents, Error, News, Post, Contacts } from '@/renderers'
import { Rewealers, Default } from '@/transitions'


process.env.NODE_ENV === 'production' && cssWebP()

const H = new Highway.Core({
  renderers: {
    home: Home,
    service: Service,
    services: Services,
    about: About,
    partners: Partners,
    documents: Documents,
    error: Error,
    news: News,
    post: Post,
    contacts: Contacts
  },
  transitions: {
    default: Rewealers,
    contextual: {
      contacts: Default
    }
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

  moreBtn()

  langCurrentPage({
    curLang: document.querySelector('.navbar__lang-list .dropdown__btn'),
    links: document.querySelectorAll('.navbar__lang-list .dropdown__content a')
  })

  langCurrentPage({
    curLang: document.querySelector('.menu__lang-list .dropdown__btn'),
    links: document.querySelectorAll('.menu__lang-list .dropdown__content a')
  })

  hideLangToogle()

  bgWebP()
  activeLink()
  new Links(document.querySelectorAll('.navbar__link'))
  new Links(document.querySelectorAll('.footer__nav-link'))
  new Links(document.querySelectorAll('.menu__link'))

  document.querySelectorAll('.form').forEach(el => new FormSubmit(el))
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


  const resize = new Resize(() => {
    winH()
    footer()
  })
  resize.init()

  moveEl()

  document.querySelectorAll('.a-sticky').forEach(el => {
    const sticky = new Sticky(el, { breakpoint: 960, offset: 60 })
    sticky.init()
  })

  btnSound()

  detectRouter(['contacts', 'error'], () => {
    const parralax = new ParallaxScroller()
    parralax.footer()
  })
})



H.on('NAVIGATE_IN', () => {
  moveEl()
  activeLink()
  bgWebP()
})

H.on('NAVIGATE_END', () => {

  moreBtn()

  const navbarPos = new NavbarPos()
  navbarPos.destroy()
  navbarPos.init()

  langCurrentPage({
    curLang: document.querySelector('.navbar__lang-list .dropdown__btn'),
    links: document.querySelectorAll('.navbar__lang-list .dropdown__content a')
  })

  langCurrentPage({
    curLang: document.querySelector('.menu__lang-list .dropdown__btn'),
    links: document.querySelectorAll('.menu__lang-list .dropdown__content a')
  })

  hideLangToogle()
  
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

  detectRouter(['contacts', 'error'], () => {
    const parralax = new ParallaxScroller()
    parralax.footer()
  })

})

