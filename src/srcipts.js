function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    
    heart.style.left = Math.random() * 100 + 'vw';

    
    document.body.appendChild(heart);

    
    setTimeout(() => {
        heart.remove();
    }, 10000);
}


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


const playButtons = document.querySelectorAll('.play');

playButtons.forEach((button, index) => {
    const audio = new Audio(`music/song${index + 1}.mp3`);
    let isPlaying = false;

    button.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            button.innerHTML = ('<img src="img/play.png" alt="Ícone" width="20" height="20"></img>'); 
        } else {
            audio.play();
            button.innerHTML = ('<img src="img/pause.png" alt="Ícone" width="20" height="20"></img>');
        }
        isPlaying = !isPlaying;
    });

    audio.addEventListener("ended", () => {
        button.innerHTML = ('<img src="img/play.png" alt="Ícone" width="20" height="20"></img>');
        isPlaying = false;
    });
});



window.addEventListener('resize', () => {
    updateCarousel();
});


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
        flipCardInner.offsetHeight;
        flipCardInner.style.animation = 'flip 1s ease-in-out';
        flipCardInner.textContent = value;
    }
}

setInterval(updateTimer, 1000);

document.addEventListener("DOMContentLoaded", function () {
    
    const photoCarousel = document.querySelector('.photo-carousel');
    const photos = document.querySelectorAll('.photo-carousel img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let photoIndex = 0;
    const totalPhotos = photos.length;

    
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
                photoIndex = 0;
            }
            updatePhotoCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (photoIndex > 0) {
                photoIndex--;
            } else {
                photoIndex = totalPhotos - 1; 
            }
            updatePhotoCarousel();
        });

        
        setInterval(() => {
            nextBtn.click();
        }, 3000);

        
        updatePhotoCarousel();
    }
});
