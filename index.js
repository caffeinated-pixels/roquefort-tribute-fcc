const slides = [
  {
    src: 'images/roquefort-wheels.jpg',
    caption: 'Roquefort is ripened in underground caves for four to nine months'
  },
  {
    src: 'images/roquefort-wheels2.jpg',
    caption: 'The cheese is kept at a constant 10°C and 95% while ripening'
  },
  {
    src: 'images/roquefort-cellar.jpg',
    caption:
      "Roquefort Société's undergound facility at Roquefort-sur-Soulzon, France"
  },
  {
    src: 'images/cheesemaker.jpg',
    caption: 'Totally not a real Roquefort production worker!'
  },
  {
    src: 'images/roquefort-wedge.jpg',
    caption:
      "A wedge of delicious Roquefort and some random goat's cheese I bought while in France!"
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
  intervalId = setInterval(() => getNextSlide(true), 5000)
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
  caption.textContent = slides[slidePosition].caption
  image.classList.add('animateImg')
}
