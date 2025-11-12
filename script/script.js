let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // kopatibilita napříč prohlížečemi
    if (scrollTop > lastScrollTop) {
        // scroll dolů
        navbar.classList.add('navbar-hide');
    } else {
        // scroll nahoru
        navbar.classList.remove('navbar-hide');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // pro iOS scrollování
});
