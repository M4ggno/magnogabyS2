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
    const audio = new Audio(`../music/song${index + 1}.mp3`);
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

    // ========== NOVO: VERIFICAÇÃO DE ANIVERSÁRIO DE 1 ANO ==========
    verificarAniversario();
});

// ========== NOVO: FUNÇÕES PARA ANIVERSÁRIO DE 1 ANO ==========

function verificarAniversario() {
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.getMonth() + 1;

    // Se for 1º/11, mostra a mensagem de 1 ano
    if (dia === 1 && mes === 11) {
        mostrarMensagemAniversario();
    }
}

function mostrarMensagemAniversario() {
    // Atualiza o header
    document.getElementById('header-title').textContent = 'Feliz 1 Ano de Amor!!! ❤️💕';
    
    // Atualiza as mensagens
    document.getElementById('message-title').textContent = 'UM ANO DE AMOR!';
    document.getElementById('message-intro').textContent = 'Meu amor,';
    
    document.getElementById('message-p1').textContent = 'Hoje comemoramos 365 dias incríveis ao seu lado! Um ano cheio de momentos que guardarei para sempre, de risadas, abraços e muito amor. Cada dia ao seu lado me faz enxergar o quanto somos feitos um para o outro.';
    
    document.getElementById('message-p2').textContent = 'Esses 12 meses foram repletos de lembranças especiais que forjaram uma conexão ainda mais profunda entre nós. Você não é apenas meu amor, você é minha melhor amiga, minha inspiração e a razão de tantos sorrisos. Obrigado por cada momento compartilhado.';
    
    document.getElementById('message-p3').textContent = 'Quando olho para trás, não consigo acreditar em tudo que vivemos junto. Desde o primeiro encontro até este momento, cada instante foi especial e único. E agora, com a certeza de um ano vivido, tenho ainda mais certeza de que quero viver todos os próximos anos ao seu lado.';
    
    document.getElementById('message-p4').textContent = 'Te amo infinitamente! Como o universo em expansão, nosso amor cresce a cada dia. Você me completa de uma forma que nunca imaginei ser possível. Que venham muitos outros anos, sempre com essa intensidade, essa paixão e essa certeza de que somos feitos um para o outro. FELIZ 1 ANO DE AMOR, MEU AMOR!';
    
    document.getElementById('message-footer').innerHTML = 'TE AMO MAIS A CADA DIA!!! <span class="heart">💕</span>';

    // Cria e mostra o overlay de celebração
    criarOverlayAniversario();
}

function criarOverlayAniversario() {
    // Cria overlay
    const overlay = document.createElement('div');
    overlay.id = 'overlay-aniversario';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        animation: fadeIn 0.5s ease-in-out;
    `;

    // Cria o card de mensagem
    const card = document.createElement('div');
    card.style.cssText = `
        background: white;
        padding: 60px 40px;
        border-radius: 20px;
        text-align: center;
        max-width: 600px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.7s ease-out;
    `;

    card.innerHTML = `
        <div style="font-size: 80px; margin-bottom: 20px;">💕</div>
        <h1 style="
            font-size: 48px;
            margin: 0 0 20px 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-family: 'Arial', sans-serif;
            font-weight: bold;
        ">UM ANO DE AMOR!</h1>

        <p style="
            font-size: 20px;
            color: #666;
            margin: 20px 0;
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
        ">
            Hoje comemoramos 365 dias de história, risadas, abraços e muito amor! 
            <br><br>
            Obrigado(a) por cada momento ao meu lado. 
            <br><br>
            Te amo mais a cada dia! ❤️
        </p>

        <button onclick="fecharMensagemAniversario()" style="
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 15px 40px;
            font-size: 18px;
            border-radius: 50px;
            cursor: pointer;
            margin-top: 30px;
            transition: transform 0.3s ease;
            font-weight: bold;
            font-family: 'Arial', sans-serif;
        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            Continuar
        </button>
    `;

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    // Adiciona estilos de animação se não existirem
    if (!document.getElementById('estilos-aniversario')) {
        const style = document.createElement('style');
        style.id = 'estilos-aniversario';
        style.innerHTML = `
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function fecharMensagemAniversario() {
    const overlay = document.getElementById('overlay-aniversario');
    if (overlay) {
        overlay.style.animation = 'fadeIn 0.5s ease-in-out reverse';
        setTimeout(() => {
            overlay.remove();
        }, 500);
    }
}