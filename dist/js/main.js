document.addEventListener('DOMContentLoaded', function () {
    const parallaxSection = document.getElementById('parallaxMouse');

    parallaxSection.addEventListener('mousemove', function (e) {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (clientX - centerX) / 30;
        const moveY = (clientY - centerY) / 30;
        parallaxSection.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
    });

});
