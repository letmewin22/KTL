const detectRouter = (router, cb) => {
  const isEqual = (element) => {
    return document.querySelector('[data-router-view]').getAttribute('data-router-view') !== element
  }
  if (router.length > 0) {
    router.every(isEqual) ? cb() : () => {}
  }
}

export default detectRouter
