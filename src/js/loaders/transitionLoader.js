import gsap from 'gsap'

const transitionLoader = (delay) => {

  const spans = document.querySelectorAll('.transition-span')
  const text = document.querySelector('.transition-text')
  const other = document.querySelectorAll('.transition-other')


  const tl = gsap.timeline()

  spans.length > 0 && tl.to(spans, { duration: 1, y: '0%', opacity: 1, ease: 'power4.out', stagger: 0.15 }, delay)
  text && tl.to(text, { duration: 1, opacity: 1, ease: 'power2.out' }, delay + 0.3)
  other.length > 0 && tl.to(other, { duration: 1, opacity: 1, ease: 'power2.out' }, delay + 0.3)
}

export default transitionLoader
