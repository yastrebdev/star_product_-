// Функция для анимации чисел
function animateNumber(element, start, end, duration) {
    let startTime = null;

    function updateNumber(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString('ru-RU'); // Форматирование чисел для читаемости
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

// Intersection Observer для отслеживания появления в области видимости
const observerOptions = {
    root: null,
    threshold: 0.1, // 10% элемента должно быть видно
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target.querySelector('.animated-number');
            const endValue = parseInt(element.getAttribute('data-end'), 10);
            const startValue = parseInt(element.getAttribute('data-start'), 10);
            animateNumber(element, startValue, endValue, 1500); // Анимация за 2 секунды
            observer.unobserve(entry.target); // Прекращаем наблюдение после активации
        }
    });
}, observerOptions);

// Применение Observer к элементу
document.querySelectorAll('.animated-number-slide').forEach(slide => {
    observer.observe(slide);
});