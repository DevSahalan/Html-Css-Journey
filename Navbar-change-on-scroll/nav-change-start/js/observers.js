const header = document.querySelector('header')
const sectionOne = document.querySelector('.home-intro')

const sectionOneObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      //   console.log(entry.target)
      if (!entry.isIntersecting) {
        header.classList.add('nav-scrolled')
      } else {
        header.classList.remove('nav-scrolled')
      }
    })
  },
  {
    // threshold: 0.2,
    rootMargin: '-150px ',
  }
)

sectionOneObserver.observe(sectionOne)
