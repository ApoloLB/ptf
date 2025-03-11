
let btnOpen = document.getElementById('btnOpen')
let mobile = document.getElementById('mobile')
let close = document.getElementById('closeMenu')

btnOpen.addEventListener('click',()=>{
    mobile.classList.add('openMenu')
    
})

closeMenu.addEventListener('click',()=>{
    mobile.classList.remove('openMenu')
    
})

btnOpen.addEventListener('click', ()=>{
    btnOpen.classList.add('invisible')
})

closeMenu.addEventListener('click', ()=>{
    btnOpen.classList.remove('invisible')
})