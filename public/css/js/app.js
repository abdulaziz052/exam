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
let header = document.querySelector('#header')
let logo = document.querySelector('#logo')
let fixed_logo = document.querySelector('#fixed-logo')
let fonta = document.querySelectorAll('#text')
let fix_btn = document.querySelector('#fix-btn')
let gamburger = document.querySelector('#gamburger')
let fix_gamburger = document.querySelector('#fixed-gamburger')
let section = document.querySelectorAll('.section')
let body = document.querySelector('body')

gamburger.addEventListener('click' , function(){
    body.classList.add('overflow-hidden')
})
closeMenu.addEventListener('click' , function(){
  body.classList.remove('overflow-hidden')  
})

window.addEventListener('scroll' , function(){
  if (window.scrollY > 200) {
    header.classList.add('active')
    logo.classList.add('hidden')
    fixed_logo.classList.remove('hidden')
    fix_btn.classList.add('text-white')
    fix_btn.classList.add('border-white')
    gamburger.classList.add('hidden')
    fix_gamburger.classList.remove('hidden')


  }else{
    header.classList.remove('active')
    logo.classList.remove('hidden')
    fixed_logo.classList.add('hidden')
    fix_btn.classList.remove('text-white')
    fix_btn.classList.remove('border-white')
    gamburger.classList.remove('hidden')
    fix_gamburger.classList.add('hidden')
  }
  section.forEach(function(item , index) {
    if (item.offsetTop < window.scrollY) {
      fonta.forEach(function (item) {
        item.classList.remove('active-border')
      })
      fonta[index].classList.add('active-border')
    }
  })
})
fonta.forEach(item => {
  window.addEventListener('scroll' , function(){
    if (this.window.scrollY > 200) {
      item.classList.add('text-white')
    }else{
      item.classList.remove('text-white')
    }
  })
});