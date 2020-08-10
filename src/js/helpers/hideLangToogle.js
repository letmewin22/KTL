const hideLangToogle = () => {
  const langToogle = [...document.querySelectorAll('.lang')]
  if (document.querySelector('[data-router-view]').getAttribute('data-router-view') === 'post') {
    langToogle.forEach(el => el.classList.add('hidden'))
  } else {
    langToogle.forEach(el => el.classList.remove('hidden'))
  }
}

export default hideLangToogle
