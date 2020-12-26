const menu = document.querySelector('header');
const burgerButtom = document.querySelector('.icon');
const img = document.querySelectorAll('img');

    burgerButtom.addEventListener('click', mostrar);
    // img.addEventListener('click', aclarar)

    function mostrar() {
        menu.classList.toggle('active')
}

for (i = 0; i < img.length; i++) {
    img[i].addEventListener('click', aclarar);

    function aclarar() {
        this.classList.toggle('active');
    }

}