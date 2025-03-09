document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('toggleButton');
    const hiddenText = document.querySelectorAll('#hiddenText');
    const heartsContainer = document.querySelector('.hearts');
    const music = document.getElementById('background-music');
    const musicButton = document.getElementById('musicButton');

    // Показать скрытый текст
    button.addEventListener('click', function() {
        hiddenText.forEach(text => {
            text.classList.toggle('show');
        });
        button.textContent = button.textContent === 'Нажми сюда' ? 'Люблю тебя ❤️' : 'Нажми сюда';
    });

    // Анимация сердечек
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-emoji');
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createHeart, 300);

    // Включение и выключение музыки
    musicButton.addEventListener("click", function() {
        if (music.paused) {
            music.play();
            musicButton.textContent = 'Выключить музыку 🔇';
        } else {
            music.pause();
            musicButton.textContent = 'Включить музыку 🎶';
        }
    });
});
