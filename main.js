const menu = document.querySelector('header');
const burgerButtom = document.querySelector('.icon');
const more = document.querySelector('.more');
const ventana = document.querySelector('aside');
const img = document.querySelectorAll('img');

    burgerButtom.addEventListener('click', mostrar);
    more.addEventListener('click', aside)

    function mostrar() {
        menu.classList.toggle('active')
}

    function aside() {
        ventana.classList.toggle('active');
    }

for (i = 0; i < img.length; i++) {
    img[i].addEventListener('click', aclarar);

    function aclarar() {
        this.classList.toggle('active');
    }

}