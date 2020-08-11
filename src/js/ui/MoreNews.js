class MoreNews {

  constructor() {
    this.allNews = [...document.querySelectorAll('.news__list-item')]
    this.btn = document.querySelector('.news-btn')

    this.init()
  }

  init() {
    this.reset()
    this.setBtn()
    this.showNews = this.showNews.bind(this)

    this.btn.addEventListener('click', this.showNews)
  }

  reset() {

    if (this.allNews.length > 3) {

      this.allNews.forEach(el => el.classList.add('hidden'))
      
      for (let i = 0; i < 3; i++) {
        this.allNews[i].classList.remove('hidden')
      }
    }
  }

  setBtn() {

    if (this.allNews.length > 3) {
      this.btn.classList.add('news-visible')
    } else {
      this.btn.classList.remove('news-visible')
    }
  }
  showNews() {

    const hiddenNews = [...document.querySelectorAll('.news__list-item.hidden')]

    if (hiddenNews.length > 3) {
      for (let i = 0; i < 3; i++) {
        hiddenNews[i].classList.remove('hidden')
      }
    } else {
      hiddenNews.forEach(el => el.classList.remove('hidden'))
      this.btn.classList.remove('news-visible')
    }
  }
}

export default MoreNews
