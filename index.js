function calcularCotizacion() {
    const metrosCuadrados = parseFloat(document.getElementById('metros-cuadrados').value);
    const plantas = parseFloat(document.getElementById('plantas').value);

    if (!isNaN(metrosCuadrados) && !isNaN(plantas)) {
        const costoPorMetroCuadrado = 372;
        const totalSinPlantas = metrosCuadrados * costoPorMetroCuadrado;
        const totalConPlantas = totalSinPlantas * plantas;

        const resultado = (plantas > 0) ? `Total con plantas: $${totalConPlantas.toFixed(2)}` : `Total sin plantas: $${totalSinPlantas.toFixed(2)}`;

        document.getElementById('resultado-cotizacion').textContent = resultado;
    }
}



document.addEventListener('DOMContentLoaded', () => {
    // Bloque 2: Configuración para iniciar el slider
    const slider = document.querySelector('.slider');
    const sliderImages = document.querySelectorAll('.slider img');

    let currentIndex = 0;
    const slideWidth = sliderImages[0].clientWidth;

    function slide() {
        currentIndex = (currentIndex + 1) % sliderImages.length;
        slider.style.transition = 'transform 1s ease-in-out';
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    setInterval(slide, 5000);
});
