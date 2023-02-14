const hamburgerIcon=document.querySelector('.hamburger-icon');
const mobileMenu=document.querySelector('.mobile-menu');

hamburgerIcon.addEventListener("click",function() {
    hamburgerIcon.classList.toggle("close-icon");
    mobileMenu.classList.toggle("active");
})