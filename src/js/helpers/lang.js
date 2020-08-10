const langCurrentPage = (DOM) => {

  const curLang = DOM.curLang.innerText.replace(/\s/g, '').toLowerCase()
  const links = DOM.links

  const siteUrl = document.documentElement.getAttribute('data-site-url')

  const getLink = (lang, sufix = '') => {
    return document.querySelector('[data-router-view]').getAttribute('data-router-view') === 'home'
      ? '/'
      : location.pathname.replace(`/${lang}`, '').slice(0, -1).replace(`-${lang}`, '').replace('/ktl', '') + sufix
  }

  switch (curLang) {

    case 'ru':

      links[0].setAttribute('href', siteUrl + '/uk' + getLink('ru', '-uk'))
      links[1].setAttribute('href', siteUrl + '/en' + getLink('ru', '-en'))
      break

    case 'ua':

      links[0].setAttribute('href', siteUrl + '/en' + getLink('uk', '-en'))
      links[1].setAttribute('href', siteUrl + getLink('uk'))

      break

    case 'en':

      links[0].setAttribute('href', siteUrl + getLink('en'))
      links[1].setAttribute('href', siteUrl + '/uk' + getLink('en', '-uk'))

      break
  }
}

export default langCurrentPage
