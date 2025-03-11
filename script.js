
let btnOpen = document.getElementById('btnOpen')
let mobile = document.getElementById('mobile')
let close = document.getElementById('closeMenu')

btnOpen.addEventListener('click',()=>{
    mobile.classList.add('openMenu')
})

closeMenu.addEventListener('click',()=>{
    mobile.classList.remove('openMenu')
})