const options = {
  root: null,
  rootMargin: '0px 0px 50px 0px',
  threshold: 0,
}

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src
      observer.unobserve(entry.target)
    }
  })
}, options)

const lazyLoadImage = (img) => intersectionObserver.observe(img)

export default lazyLoadImage
