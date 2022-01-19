const slides = [
  {
    src: 'images/roquefort-wheels.jpg',
    caption:
      'Roquefort is ripened in underground caves for four to nine months',
    alt: 'wheels of roquefort cheese maturing in a cave',
  },
  {
    src: 'images/roquefort-wheels2.jpg',
    caption:
      'The cheese is kept at a constant 10°C and 95% humidity while ripening',
    alt: 'wheels of roquefort cheese maturing in a cave',
  },
  {
    src: 'images/roquefort-cellar.jpg',
    caption:
      "Roquefort Société's undergound facility at Roquefort-sur-Soulzon, France",
    alt: 'the undergound cheese ripening caves at Roquefort Société',
  },
  {
    src: 'images/cheesemaker.jpg',
    caption: "A cardboard cutout of one of Société's cave managers",
    alt: "a cardboard cutout of one of Société's cave managers",
  },
  {
    src: 'images/roquefort-wedge.jpg',
    caption:
      "A wedge of delicious Roquefort and some random goat's cheese I bought while in France!",
    alt: 'a wedge of ready-to-eat Roquefort cheese',
  },
]

const carousel = document.getElementById('carousel')
const carouselTrack = document.getElementById('carousel-track')
const prevSlideBtn = document.getElementById('prevSlide')
const nextSlideBtn = document.getElementById('nextSlide')

let slidePosition = 0
const finalSlide = slides.length - 1

window.onresize = correctOffsetsOnResize

prevSlideBtn.addEventListener('click', (e) => {
  if (slidePosition === 0) slidePosition = finalSlide + 1

  const prevSlideId = `slide-${slidePosition - 1}`
  const prevSlide = document.getElementById(prevSlideId)
  slidePosition--

  moveToSlide(prevSlide)
})

nextSlideBtn.addEventListener('click', (e) => {
  if (slidePosition === finalSlide) slidePosition = -1

  const nextSlideId = `slide-${slidePosition + 1}`
  const nextSlide = document.getElementById(nextSlideId)
  slidePosition++

  moveToSlide(nextSlide)
})

initializeCarousel()

function initializeCarousel() {
  const fragment = document.createDocumentFragment()
  const slideWidth = carousel.getBoundingClientRect().width

  slides.forEach((slide, index) => {
    const li = document.createElement('li')
    if (index === 0) li.classList.add('current-slide')

    li.id = `slide-${index}`
    li.classList.add('carousel__slide')
    li.style.left = slideWidth * index + 'px'

    const figure = document.createElement('figure')

    const img = document.createElement('img')
    img.className = 'carousel__image'
    img.src = slide.src
    img.alt = slide.alt

    const caption = document.createElement('figcaption')
    caption.textContent = slide.caption
    caption.className = 'img-caption center-text'

    figure.appendChild(img)
    figure.appendChild(caption)
    li.appendChild(figure)
    fragment.appendChild(li)
  })

  carouselTrack.appendChild(fragment)
}

function moveToSlide(targetSlide) {
  carouselTrack.style.transform = `translateX(-${targetSlide.style.left})`
  carouselTrack.style.removeProperty('transition')
}

function correctOffsetsOnResize() {
  const slideWidth = carousel.getBoundingClientRect().width
  const slides = carouselTrack.querySelectorAll('.carousel__slide')
  slides.forEach(
    (slide, index) => (slide.style.left = slideWidth * index + 'px')
  )

  const currentSlideId = `slide-${slidePosition}`
  const currentSlide = document.getElementById(currentSlideId)

  carouselTrack.style.transition = 'none'
  carouselTrack.style.transform = `translateX(-${currentSlide.style.left})`
}

// let slidePosition = 0

// const image = document.getElementById('image')
// const caption = document.getElementById('img-caption')
// const lastSlideIndex = slides.length - 1
// let intervalId

// document.getElementById('prevSlide').addEventListener('click', getPrevSlide)
// document
//   .getElementById('nextSlide')
//   .addEventListener('click', () => getNextSlide())

// document.addEventListener('animationend', () =>
//   image.classList.remove('animateImg')
// )

// // startInterval()

// function startInterval() {
//   intervalId = setInterval(() => getNextSlide(true), 10000)
// }

// function resetInterval() {
//   clearInterval(intervalId)
//   // startInterval()
// }

// function getPrevSlide() {
//   if (slidePosition === 0) {
//     slidePosition = lastSlideIndex
//   } else {
//     slidePosition--
//   }

//   changeSlide()
//   // resetInterval()
// }

// function getNextSlide(isAutoCarousel = false) {
//   // console.log(isAutoCarousel)

//   if (slidePosition === lastSlideIndex) {
//     slidePosition = 0
//   } else {
//     slidePosition++
//   }

//   changeSlide()

//   // !isAutoCarousel && resetInterval()
// }

// function changeSlide() {
//   image.src = slides[slidePosition].src
//   image.alt = slides[slidePosition].alt
//   caption.textContent = slides[slidePosition].caption
//   image.classList.add('animateImg')
// }
