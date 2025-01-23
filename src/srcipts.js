function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Posicionamento horizontal aleatório
    heart.style.left = Math.random() * 100 + 'vw';

    // Adiciona o coração ao body
    document.body.appendChild(heart);

    // Remove o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 10000); // Deve ser igual ao tempo da animação
}

// Gera corações em intervalos de 1 segundo
setInterval(createHeart, 1000);