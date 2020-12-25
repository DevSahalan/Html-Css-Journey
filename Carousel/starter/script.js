const slides = document.querySelector('.slider').children
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const indicator = document.querySelector('.indicator')

let index = 0

const circleIndicator = () => {
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement('div')
    div.innerHTML = i + 1
    div.setAttribute('onclick', 'indicateSlide(this)')
    div.id = i
    if (i === 0) {
      div.classList.add('active')
    }
    indicator.appendChild(div)
  }
}

circleIndicator()

const indicateSlide = (element) => {
  index = element.id
  changeSlide()
  updateCircleIndicator()
  resetTimer()
}
const updateCircleIndicator = () => {
  for (let i = 0; i < indicator.children.length; i++) {
    indicator.children[i].classList.remove('active')
  }
  indicator.children[index].classList.add('active')
}

prev.addEventListener('click', () => {
  console.log(index)
  prevSlide()
  console.log(index)
  updateCircleIndicator()
  resetTimer()
})

next.addEventListener('click', () => {
  nextSlide()
  updateCircleIndicator()
  resetTimer()
})

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1
  } else {
    index--
  }
  changeSlide()
}

const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0
  } else {
    index++
  }

  changeSlide()
}

const changeSlide = () => {
  console.log(index)
  Array.from(slides).forEach((element) => {
    element.classList.remove('active')
  })
  slides[index].classList.add('active')
}

// autoplay
const resetTimer = () => {
  clearInterval(timer)
  timer = setInterval(autoplay, 4000)
}
const autoplay = () => {
  nextSlide()
  updateCircleIndicator()
}

let timer = setInterval(autoplay, 4000)
