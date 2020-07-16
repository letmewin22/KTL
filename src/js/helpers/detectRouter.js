const detectRouter = (router, cb) => {
  if (router.length > 0) {
    router.forEach(el => {
      if (document.querySelector('[data-router-view]').getAttribute('data-router-view') !== el) {
        cb()
      }
    })
  }
}

export default detectRouter
