const menu = document.querySelector('header');
const burgerButtom = document.querySelector('.icon');
const more = document.querySelector('.more');
const ventana = document.querySelector('aside');
const img = document.querySelectorAll('img');
const btnInicio = document.querySelector('#btn-inicio');
const btnMenu = document.querySelector('#btn-menu');
const btnGaleria = document.querySelector('#btn-galeria');
const icons = window.matchMedia('screen and (max-width: 850px)')

    icons.addEventListener('change', off)


    function off(event) {
        if (event.matches) {
            burgerButtom.addEventListener('click', mostrar);
            btnInicio.addEventListener('click', mostrar);
            btnMenu.addEventListener('click', mostrar);
            btnGaleria.addEventListener('click', mostrar);
            more.addEventListener('click', aside);
        } else {
            burgerButtom.removeEventListener('click', mostrar)
            btnInicio.removeEventListener('click', mostrar);
            btnMenu.removeEventListener('click', mostrar);
            btnGaleria.removeEventListener('click', mostrar);
            more.removeEventListener('click', aside);
        }
    }

    function mostrar() {
        menu.classList.toggle('active');
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

    off(icons)