export default function SmoothScroll(target, speed, smooth) {
  if (target === document)
    target = (document.scrollingElement
      || document.documentElement
      || document.body.parentNode
      || document.body) // cross browser support for document scrolling

  var moving = false
  var pos = target.scrollTop
  var frame = target === document.body
    && document.documentElement
    ? document.documentElement
    : target // safari is the new IE

  target.addEventListener('mousewheel', scrolled, { passive: false })
  target.addEventListener('DOMMouseScroll', scrolled, { passive: false })


  function scrolled(e) {
    e.preventDefault() // disable default scrolling

    var delta = normalizeWheelDelta(e)

    pos += -delta * speed
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

    if (!moving) update()
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
      else
        return -e.detail / 3 // Firefox
    } else
      return e.wheelDelta / 120 // IE,Safari,Chrome
  }

  function update() {
    moving = true

    var delta = (pos - target.scrollTop) / smooth

    target.scrollTop += delta

    if (Math.abs(delta) > 0.5 && document.querySelector('.scrollbar:not(.block-scrollbar) .scrollbar__thumb').classList.contains('scrolling'))
      requestFrame(update)
    else
      moving = false
  }

  var requestFrame = function() { // requestAnimationFrame cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(func) {
        window.setTimeout(func, 1000 / 50)
      }
    )
  }()
}


// window.addEventListener('load', () => {
//   const sc = document.querySelector('#scroll-container')
//   const s = document.querySelector('#scroller')
  
//   const height =  s.scrollHeight - window.innerHeight
//   let pos = 0
  
//   window.addEventListener('mousewheel', (e) => {
//     e.preventDefault()
//     console.log(e)
//     let delta = e.wheelDelta * 0.9
    
//     pos += delta

//     if(Math.abs(pos) >= height) {
//       pos = -height

//     } else if(pos >= 0) {
//       pos = 0
//     }
//     gsap.to(sc, { duration: 0.5, scrollTop: -pos})
    
//   }, {passive: false})
// })