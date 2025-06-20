document.addEventListener('DOMContentLoaded', function() {
  const sobre = document.getElementById('sobre');
  const tapa = sobre.querySelector('.tapa');
  const formulario = document.getElementById('formulario');
  const brillo = document.getElementById('brillo');

  sobre.addEventListener('click', function abrirSobre() {
    // Efecto de brillo mágico
    brillo.classList.add('activo');

    // Animación: levanta la tapa como si se abriera el sobre
    tapa.style.transform = 'rotateX(85deg)';
    tapa.style.transformOrigin = 'top center';
    sobre.style.pointerEvents = 'none';

    // Después de la animación, muestra el formulario y oculta el brillo
    setTimeout(() => {
      sobre.style.opacity = 0;
      brillo.style.opacity = 0;
      setTimeout(() => {
        sobre.style.display = 'none';
        brillo.classList.remove('activo');
        formulario.classList.remove('oculto');
        formulario.style.opacity = 1;
      }, 400);
    }, 800);
  });
});