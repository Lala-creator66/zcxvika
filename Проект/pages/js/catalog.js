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

