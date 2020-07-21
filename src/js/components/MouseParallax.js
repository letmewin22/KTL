import gsap from 'gsap'

export default class MouseParallax {

  constructor({el, parent}) {
    this.el = el
    this.parent = parent
    this.parent.addEventListener('mousemove', (e) => this.event(e))
  }

  event(e) {
    // const o = this.parent.getBoundingClientRect().width * (e.clientX / this.parent.getBoundingClientRect().width)
    const rect = this.parent.getBoundingClientRect()

    const o = e.pageX - (rect.left + document.body.scrollLeft)
    const w = (o - rect.width / 2) / rect.width * (-rect.width * 0.4)

    gsap.to(this.el, {duration: 1.2, x: w, ease: 'power1.out'})
  }
}


// function parallaxIt(e, target, movement) {
//   var $this = $("#container");
//   var relX = e.pageX - $this.offset().left;
//   var relY = e.pageY - $this.offset().top;

//   TweenMax.to(target, 1, {
//     x: (relX - $this.width() / 2) / $this.width() * movement,
//     y: (relY - $this.height() / 2) / $this.height() * movement
//   });
// }
