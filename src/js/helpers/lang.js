const langCurrentPage = () => {

  const curLang = document.querySelector('.navbar__lang-list a').innerText.replace(/\s/g, '').toLowerCase()
  
  let otherLinks
  let getLink = function() { }

  switch (curLang) {
    case 'ru':

      otherLinks = document.querySelectorAll('.navbar__lang-list .dropdown__content a')

      document.querySelector('.navbar__lang-list a').setAttribute('href', window.location.href)

      getLink = (sufix) => {
        return document.querySelector('[data-router-view]').getAttribute('data-router-view') === 'home'
          ? '/'
          : location.pathname.replace(/\/ru/gi, '') + '-' + sufix
      }


      otherLinks[0].setAttribute('href', location.origin + '/ktl' + '/uk' + getLink('uk'))
      otherLinks[1].setAttribute('href', location.origin + '/ktl' + '/en' + getLink('en'))
      // langBtn.setAttribute('hreflang', 'ua')
      break

    case 'ua':

      otherLinks = document.querySelectorAll('.navbar__lang-list .dropdown__content a')

      document.querySelector('.navbar__lang-list a').setAttribute('href', window.location.href)

      getLink = (sufix) => {
        return document.querySelector('[data-router-view]').getAttribute('data-router-view') === 'home'
          ? '/'
          : location.pathname.replace(/\/uk/gi, '') + '-' + sufix
      }

      otherLinks[0].setAttribute('href', location.origin + '/ktl' + '/en' + getLink('en'))
      otherLinks[1].setAttribute('href', location.origin + '/ktl' + getLink('ru'))

      break
    case 'en':

      otherLinks = document.querySelectorAll('.navbar__lang-list .dropdown__content a')
      document.querySelector('.navbar__lang-list a').setAttribute('href', window.location.href)

      getLink = (sufix) => {
        return document.querySelector('[data-router-view]').getAttribute('data-router-view') === 'home'
          ? '/'
          : location.pathname.replace(/\/en/gi, '') + '-' + sufix
      }

      otherLinks[0].setAttribute('href', location.origin + '/ktl' + getLink('ru'))
      otherLinks[1].setAttribute('href', location.origin + '/ktl' + '/uk' + getLink('uk'))

      break
  }
}

export default langCurrentPage
