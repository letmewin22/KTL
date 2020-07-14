const activeLink = () => {

  const links = document.querySelectorAll('a')
  // Check Active Link
  for (let i = 0; i < links.length; i++) {
    const link = links[i]

    // Clean class
    link.classList.remove('is-current')

    // Active link
    if (link.href === window.location.href) {
      link.classList.add('is-current')
    }
  }
}

export default activeLink

