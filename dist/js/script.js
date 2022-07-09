//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
};

//bt-nav
const btnav = document.querySelector('#btnav');
const navMenu = document.querySelector('#nav-menu')

btnav.addEventListener('click', function() {
    btnav.classList.toggle('btnav-active');
    navMenu.classList.toggle('hidden');
});