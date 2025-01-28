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

const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

document.querySelectorAll('.prev').forEach((button) => {
    button.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });
});

document.querySelectorAll('.next').forEach((button) => {
    button.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });
});

// Seleciona os botões de play
const playButtons = document.querySelectorAll('.play');

playButtons.forEach((button, index) => {
    const audio = new Audio(`music/song${index + 1}.mp3`); // Ajusta o caminho do áudio
    let isPlaying = false;

    button.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            button.innerHTML = "▶️"; // Ícone de play
        } else {
            audio.play();
            button.innerHTML = "⏸️"; // Ícone de pause
        }
        isPlaying = !isPlaying;
    });

    // Reseta o botão quando a música termina
    audio.addEventListener("ended", () => {
        button.innerHTML = "▶️";
        isPlaying = false;
    });
});


// Responsividade para o carrossel
window.addEventListener('resize', () => {
    updateCarousel();
});

// Centraliza o carrossel na inicialização
updateCarousel();

function updateTimer() {
    const startDate = new Date('2024-11-01T00:00:00');
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    updateFlipCard('days', days);
    updateFlipCard('hours', hours);
    updateFlipCard('minutes', minutes);
    updateFlipCard('seconds', seconds);
}

function updateFlipCard(id, value) {
    const flipCard = document.getElementById(id);
    const flipCardInner = flipCard.querySelector('.flip-card-inner');
    const currentValue = flipCardInner.textContent.trim();

    if (currentValue !== value.toString()) {
        flipCardInner.style.animation = 'none';
        flipCardInner.offsetHeight; // Força o reflow para reiniciar a animação
        flipCardInner.style.animation = 'flip 1s ease-in-out';
        flipCardInner.textContent = value;
    }
}

setInterval(updateTimer, 1000);

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona elementos do carrossel de fotos
    const photoCarousel = document.querySelector('.photo-carousel');
    const photos = document.querySelectorAll('.photo-carousel img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let photoIndex = 0;
    const totalPhotos = photos.length;

    // Garante que as imagens estão lado a lado
    photoCarousel.style.display = "flex";
    photoCarousel.style.transition = "transform 0.5s ease-in-out";

    function updatePhotoCarousel() {
        const offset = -photoIndex * 100; 
        photoCarousel.style.transform = `translateX(${offset}%)`;
    }

    if (prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (photoIndex < totalPhotos - 1) {
                photoIndex++;
            } else {
                photoIndex = 0; // Reinicia ao chegar no fim
            }
            updatePhotoCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (photoIndex > 0) {
                photoIndex--;
            } else {
                photoIndex = totalPhotos - 1; // Volta para a última imagem
            }
            updatePhotoCarousel();
        });

        // Alternância automática de imagens a cada 3 segundos
        setInterval(() => {
            nextBtn.click();
        }, 3000);

        // Inicia com a posição correta
        updatePhotoCarousel();
    }
});
