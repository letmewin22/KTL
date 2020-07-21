import Splitting from 'splitting'

const splitLines = (elem) => {

  Splitting({ target: elem, by: 'lines' })

  const getLines = () => {
    let lines = []
    let line
    let words = elem.querySelectorAll('.word')
    let lastTop
    for (let i = 0; i < words.length; i++) {
      let word = words[i]
      if (word.offsetTop !== lastTop) {
        lastTop = word.offsetTop
        line = []
        lines.push(line)
      }
      line.push(word)
    }
    return lines
  }

  const showLines = () => {
    let lines = getLines()
    return lines.map(function(line) {
      return line.map(function(span) {
        return span.innerText
      }).join(' ')
    })
  }

  const showLine = showLines()

  elem.innerHTML = ''
  for (let i = 0; i < showLine.length; i++) {

    elem.innerHTML += `<span class="line-wrapper"><span class="splitted-line">${showLine[i]}</span></span>`
  }
  elem.classList.add('done')
}

export default splitLines
