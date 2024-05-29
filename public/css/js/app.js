let resMenu = document.querySelector('#responsive-menu')
let hamMenu = document.querySelector('#hamburger-menu')
let closeMenu = document.querySelector('#close-menu')

hamMenu.addEventListener('click', function () {
  resMenu.classList.add("right-0")
  resMenu.classList.remove("-right-full")
})
closeMenu.addEventListener('click', function () {
    resMenu.classList.add("-right-full")
    resMenu.classList.remove("right-0")
  })