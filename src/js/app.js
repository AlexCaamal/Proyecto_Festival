//alert('hola al grupos de ISC');

document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
    darkMode();
   // eventListener();
   navegacionResponsive();
});

function iniciarApp() {
    crearGaleria();
    scrollNav(); //Para ir navegando pausadamene en las secciones del sitio
    navegacionFija();
}


function crearGaleria() {
   //galeria.textContent='Vamos por la galeria, vienes o nop...';
    const galeria = document.querySelector('.galeria-imagenes');
      for(let i = 1; i <= 16; i++ ) {
        const imagen = document.createElement('picture');
      //console.log(i); //comillas inertidas simples a la izquierda      //Para buscar las imágenes pequeñas...
      imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
        `;
        imagen.onclick = function() {
            mostrarImagen(i);
        }        //console.log(imagen);
        galeria.appendChild(imagen);
    }
}  

function mostrarImagen(id) {    //console.log('Mostrando imágenes...',id);
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" 
        src="build/img/grande/${id}.jpg" alt="imagen galeria">
    `;    // Crea el Overlay con la imagen oscureser
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);//agreagar la imagen
    overlay.classList.add('overlay');    // Inyectar o Añadirlo al HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');//para fijar o eliminar el scroll anexar el globales del body, lineas 19 a la 21
    // Boton para cerrar el Modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    overlay.appendChild(cerrarModal);
    cerrarModal.onclick = function() {
    const body = document.querySelector('body');
        body.classList.remove('fijar-body');//eliminar la class y se pueda usar el scroll
        overlay.remove();//cerrar el boton de cerrar X
    }
    overlay.onclick = function() { //Para cerrar la imagen dando clic afuera de esta misma
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }     
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e) {
            //console.log(e.target);

            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth"});
        });
    });
}

function navegacionFija() {
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.lineup');
    const body = document.querySelector('body');


    window.addEventListener('scroll', function() {
        if( sobreFestival.getBoundingClientRect().top < 0  ) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}

function darkMode(){
    const botondarkMode = document.querySelector('.dark-mode');
    botondarkMode.addEventListener('click', function(){
        document.body.classList.toggle('dark-modo')
    });
}

function eventListener(){
    const mobileMenu = document.querySelector('.img_hambur');

    mobileMenu.addEventListener('click', navegacionResponsive);

}


/*function navegacionResponsive(){
    
    const navegacion=document.querySelector('.navegacion-principal');

    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
    }else{
        navegacion.classList.add('mostrar');
    }
}*/

function navegacionResponsive(){
    const mobileMenu = document.querySelector('.img_hambur');
    const navegacion=document.querySelector('.navegacion-principal');
    mobileMenu.addEventListener('click', function(){
        navegacion.classList.toggle('mostrar')
    });
}




