const slides = [
  {
    id: 0,
    src: 'images/roquefort-wheels.jpg',
    caption:
      'The famous blue cheese maturing in the underground caves at Roquefort Société in Roquefort-sur-Soulzon, France '
  },
  {
    id: 1,
    src: 'images/roquefort-cellar.jpg',
    caption:
      'The famous blue cheese maturing in the underground caves at Roquefort Société in Roquefort-sur-Soulzon, France '
  },
  {
    id: 2,
    src: 'images/cheesemaker.jpg',
    caption:
      'The famous blue cheese maturing in the underground caves at Roquefort Société in Roquefort-sur-Soulzon, France '
  }
]

let slidePosition = 0

const image = document.getElementById('image')
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

  image.src = slides[slidePosition].src
}

document.getElementById('prevSlide').addEventListener('click', getPrevSlide)
document.getElementById('nextSlide').addEventListener('click', getNextSlide)

// image.src = slides[0].src
