const botonColor = document.getElementById('boton-color');

let colorActual = 0; 

botonColor.addEventListener('click', () => {
  if (colorActual === 0) {
    document.body.style.backgroundColor = 'darkgray';
    colorActual = 1;
  } else {
    document.body.style.backgroundColor = 'white';
    colorActual = 0;
  }
});

const botonToggle = document.getElementById('boton-toggle');
const contenedor = document.getElementById('contenedor');

botonToggle.addEventListener('click', () => {
  if (contenedor.style.display === 'none') {
    contenedor.style.display = 'block';
  } else {
    contenedor.style.display = 'none';
  }
});


const btnToggle = document.getElementById('btnToggle');
const contndr = document.getElementById('contndr');

btnToggle.addEventListener('click', () => {
  if (contndr.style.display === 'none') {
    contndr.style.display = 'block';
  } else {
    contndr.style.display = 'none';
  }
});


const textoACambiar = document.getElementById('cambiar-texto');
textoACambiar.addEventListener('click', () => {
  textoACambiar.textContent = '¡Bienvenidos!';
});


