// JavaScript para la ventana emergente
const galeria = document.querySelector('.galeria');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

galeria.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
        lightbox.innerHTML = `<img src="${e.target.src}" alt="${e.target.alt}">`;
        lightbox.style.display = 'flex';
    }
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.style.display = 'none';
});
