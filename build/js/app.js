document.addEventListener ('DOMContentLoaded', function() {

    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    efectoScroll()
    

})

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', function() {

        if( sobreFestival.getBoundingClientRect().bottom <1){
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })

}

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
   
    // Boton cerrar Modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

   
    modal.appendChild(imagen)
     modal.appendChild(cerrarModalBtn)


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

function resaltarEnlace() {
    document.addEventListener ('scroll', function() {

        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';

        sections.forEach ( section => {
            const sectionTop = section.offsetTop
            const sectionHeight  = section.clientHeight 

            if (window.scrollY >= (sectionTop - sectionHeight / 3) ) {
                actual = section.id ;
            }
  
        })

        navLinks.forEach (link => {
            link.classList.remove('activo')
            if(link.getAttribute('href') === '#' +actual){
                link.classList.add('activo')
            }
        })

    })

}

function efectoScroll() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const seccionnDestino =  e.target.getAttribute('href')
            const seccion = document.querySelector(seccionnDestino)
            
            seccion.scrollIntoView({behavior: 'smooth'})
            
            console.log(seccion) ;

        })
    } )


}