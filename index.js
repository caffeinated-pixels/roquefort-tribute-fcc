const slides = [
  {
    src: 'images/roquefort-wheels.jpg',
    caption:
      'Roquefort is ripened in underground caves for four to nine months',
    alt: 'wheels of roquefort cheese maturing in a cave'
  },
  {
    src: 'images/roquefort-wheels2.jpg',
    caption:
      'The cheese is kept at a constant 10°C and 95% humidity while ripening',
    alt: 'wheels of roquefort cheese maturing in a cave'
  },
  {
    src: 'images/roquefort-cellar.jpg',
    caption:
      "Roquefort Société's undergound facility at Roquefort-sur-Soulzon, France",
    alt: 'the undergound cheese ripening caves at Roquefort Société'
  },
  {
    src: 'images/cheesemaker.jpg',
    caption: "A cardboard cutout of one of Société's cave managers",
    alt: "a cardboard cutout of one of Société's cave managers"
  },
  {
    src: 'images/roquefort-wedge.jpg',
    caption:
      "A wedge of delicious Roquefort and some random goat's cheese I bought while in France!",
    alt: 'a wedge of ready-to-eat Roquefort cheese'
  }
]

let slidePosition = 0

const image = document.getElementById('image')
const caption = document.getElementById('img-caption')
const lastSlideIndex = slides.length - 1
let intervalId

document.getElementById('prevSlide').addEventListener('click', getPrevSlide)
document
  .getElementById('nextSlide')
  .addEventListener('click', () => getNextSlide())

document.addEventListener('animationend', () =>
  image.classList.remove('animateImg')
)

startInterval()

function startInterval() {
  intervalId = setInterval(() => getNextSlide(true), 10000)
}

function resetInterval() {
  clearInterval(intervalId)
  startInterval()
}

function getPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = lastSlideIndex
  } else {
    slidePosition--
  }

  changeSlide()
  resetInterval()
}

function getNextSlide(isAutoCarousel = false) {
  console.log(isAutoCarousel)

  if (slidePosition === lastSlideIndex) {
    slidePosition = 0
  } else {
    slidePosition++
  }

  changeSlide()

  !isAutoCarousel && resetInterval()
}

function changeSlide() {
  image.src = slides[slidePosition].src
  image.alt = slides[slidePosition].alt
  caption.textContent = slides[slidePosition].caption
  image.classList.add('animateImg')
}
