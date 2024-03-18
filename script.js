const navLinks = document.querySelectorAll('.nav-links li')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuLi = document.querySelectorAll('.mobile-list-links li')
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const overflow = document.querySelector(".overflow");

navLinks.forEach((link) => {
  const menuList = link.querySelector('.menu-list')
  link.addEventListener('click', () => {
    link.classList.toggle('active')
    menuList.classList.toggle('active-menu')  
  })
})

mobileMenuBtn.addEventListener('click', () => {
  const icon = document.querySelector('.mobile-menu-btn img')
  mobileMenuBtn.classList.toggle("active-btn");
  mobileMenu.classList.toggle('active-menu')
  if (mobileMenuBtn.classList.contains('active-btn')) {
    icon.src = './images/icon-close-menu.svg'
  } else {
    icon.src = './images/icon-menu.svg'
  }
})

mobileMenuLi.forEach((link) => {
  const mobileMenuList = link.querySelector('.mobile-item-list')
  link.addEventListener('click', () => {
    link.classList.toggle('active')
    mobileMenuList.classList.toggle('active-menu')
  })
})