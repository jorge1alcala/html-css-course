const openEl = document.getElementById('open')
const closeEl = document.getElementById('close')

openEl.addEventListener("click", () => {
  el_close = document.querySelector(".header")
  closeIcon(el_close)
})

function closeIcon(iconType){
  iconType.classList.add('nav-open')
}

closeEl.addEventListener("click", () => {
  el_close = document.querySelector(".header")
  openIcon(el_close)
})

function openIcon(iconType){
  iconType.classList.remove('nav-open')
}
