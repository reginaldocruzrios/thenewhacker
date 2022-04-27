
document.addEventListener('DOMContentLoaded' , function() {
    mostrarBuscador();
})


function mostrarBuscador() {
    const btnBuscar = document.querySelector('#busq');

    btnBuscar.addEventListener('click' , function () {
    const buscador = document.querySelector('#buscador');
    buscador.classList.toggle('mostrar');

    });
}
