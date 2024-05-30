const checkbox = document.querySelector('#checkbox')

checkbox.addEventListener('change', function (e) {
  if (this.checked) {
    document.body.classList.remove('is-light')
    document.body.classList.add('is-dark')
  } else {
    document.body.classList.remove('is-dark')
    document.body.classList.add('is-light')
  }
})
