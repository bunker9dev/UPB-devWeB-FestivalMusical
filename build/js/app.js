document.addEventListener ('DOMContentLoaded', function() {
    crearGaleria()

})

function   crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')

    for (let i = 1; i <= 16; i++) {
        const imagen = document.createElement('IMG')
        imagen.src =  `src/img/gallery/full/${i}.jpg`
        imagen.alt =  `Imagen Galeria`

        //Event Handler 
        
        imagen.onclick = function () {
           mostrarImagen( i )
        }

        galeria.appendChild(imagen)

    }

}

function mostrarImagen( i ) {
    const imagen = document.createElement('IMG')
        imagen.src =  `src/img/gallery/full/${i}.jpg`
        imagen.alt =  `Imagen Galeria`

      // General ventana mmodal
    const modal = document.createElement("DIV")
    modal.classList.add("modal")
    modal.onclick = cerrarModal
    modal.appendChild(imagen)


    // Agregar al HTML
    const body = document.querySelector('body')
    body.classList.add('overFlow-hidden')
    body.appendChild(modal)

    // console.log( modal);

}

function cerrarModal(){

    const modal  = document.querySelector('.modal')
    modal.classList.add ('fadeOut')

    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overFlow-hidden')


    }, 500);


   
}