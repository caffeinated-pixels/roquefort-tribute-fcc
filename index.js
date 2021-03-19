const slides = [
  {
    id: 0,
    src: 'images/roquefort-wheels.jpg',
    caption: 'Roquefort is ripened in underground caves for four to nine months'
  },
  {
    id: 1,
    src: 'images/roquefort-cellar.jpg',
    caption:
      "Roquefort Société's undergound facility at Roquefort-sur-Soulzon, France"
  },
  {
    id: 2,
    src: 'images/cheesemaker.jpg',
    caption: 'Totally not a real Roquefort production worker!'
  }
]

let slidePosition = 0

const image = document.getElementById('image')
const caption = document.getElementById('img-caption')
const lastSlideIndex = slides.length - 1

const getPrevSlide = () => {
  if (slidePosition === 0) {
    slidePosition = lastSlideIndex
  } else {
    slidePosition--
  }

  // console.log(slidePosition)

  image.src = slides[slidePosition].src
}

const getNextSlide = () => {
  if (slidePosition === lastSlideIndex) {
    slidePosition = 0
  } else {
    slidePosition++
  }

  // console.log(slidePosition)
  // image.classList.remove('animateImg')
  image.src = slides[slidePosition].src
  caption.textContent = slides[slidePosition].caption
  image.classList.add('animateImg')
}

document.getElementById('prevSlide').addEventListener('click', getPrevSlide)
document.getElementById('nextSlide').addEventListener('click', getNextSlide)

// remove class when CSS animation finishes
document.addEventListener('animationend', () =>
  image.classList.remove('animateImg')
)

setInterval(getNextSlide, 10000)

// image.src = slides[0].src
