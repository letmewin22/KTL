const getExtension = (str) => {
  const matches = str.match(/\..(?!.{5}).+/gm)
  return matches && matches.length > 0 && matches[0].replace(/./, '')
}

export default getExtension

