const footer = () => {
  if(document.querySelector('footer')) {
    const height = document.querySelector('footer').getBoundingClientRect().height

    document.querySelector('main').style.marginBottom = height + 'px'
  }
}

export default footer
