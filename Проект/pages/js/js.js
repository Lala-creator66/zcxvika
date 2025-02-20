// Функция смены темы
const toggleThemeButton = document.getElementById('theme-toggle');
const body = document.body;

toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Сохранение темы в localStorage
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});

// Загрузка темы при загрузке страницы
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(savedTheme === 'dark' ? 'dark-theme' : 'light-theme');
});


let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    // Скрыть все слайды
    slides.forEach(slide => slide.style.opacity = 0);
    
    // Увеличить индекс слайда
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Показать текущий слайд
    slides[slideIndex].style.opacity = 1;

    // Переход на следующий слайд каждые 3 секунды
    setTimeout(showSlides, 3000);
}

// Инициализация слайдера
showSlides();


// Можно использовать для дополнительной анимации или обработки событий, например:
document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product-item');
    
    // Добавим задержку анимации для каждого продукта при прокрутке
    window.addEventListener('scroll', function () {
        products.forEach(product => {
            const productTop = product.getBoundingClientRect().top;
            const windowBottom = window.innerHeight;
            if (productTop < windowBottom - 100) {
                product.style.animationPlayState = 'running';
            }
        });
    });
});
