let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}
let user = document.querySelector('.user');

document.querySelector('#user-icon').onclick = () =>{
    user.classList.toggle('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}
window.onscroll = () => {
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.toggle('active');
}
let header = document.querySelector('header');

windows.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});