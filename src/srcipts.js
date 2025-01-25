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

// Play button functionality
const playButtons = document.querySelectorAll('.play');
playButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        alert(`Playing: ${cards[index].querySelector('.info h3').innerText}`);
    });
});

// Responsividade para o carrossel
window.addEventListener('resize', () => {
    // Ajusta o carrossel para garantir que os cartões estejam corretamente centralizados
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

    // Atualizando os valores
    updateFlipCard('days', days);
    updateFlipCard('hours', hours);
    updateFlipCard('minutes', minutes);
    updateFlipCard('seconds', seconds);
}

// Função para atualizar a rotação do flip card
function updateFlipCard(id, value) {
    const flipCard = document.getElementById(id);
    const flipCardInner = flipCard.querySelector('.flip-card-inner');
    
    // Se o valor já for o mesmo, não faz a animação
    if (flipCardInner.textContent !== value.toString()) {
        // Reinicia a animação de flip
        flipCardInner.style.animation = 'none';
        flipCardInner.offsetHeight; // Força o reflow para reiniciar a animação
        flipCardInner.style.animation = 'flip 1s ease-in-out'; // Aplica a animação
        flipCardInner.textContent = value; // Atualiza o número
    }
}

setInterval(updateTimer, 1000);


// Carrossel de fotos
const photoCarousel = document.querySelector('.photo-gallery .carousel');
const photos = document.querySelectorAll('.photo-gallery img');
let photoIndex = 0;

function updatePhotoCarousel() {
    const offset = -photoIndex * 100;
    photoCarousel.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    photoIndex = (photoIndex + 1) % photos.length;
    updatePhotoCarousel();
}, 3000); // Troca de fotos a cada 3 segundos