


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


// Функционал модального окна
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('product-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close-modal');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageSrc = item.querySelector('img').src;
        const title = item.querySelector('img').getAttribute('data-title');
        const description = item.querySelector('img').getAttribute('data-description');

        modalImage.src = imageSrc;
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});