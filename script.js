
const mostrarBtn = document.getElementById('mostrarBtn');
const listaDesplegable = document.getElementById('listaDesplegable');

// Agregar un event listener al botón
mostrarBtn.addEventListener('click', () => {
    // Cambiar el estilo de la lista para mostrarla o esconderla
    if (listaDesplegable.style.display === 'none') {
        listaDesplegable.style.display = 'block';
    } else {
        listaDesplegable.style.display = 'none';
    }
});





