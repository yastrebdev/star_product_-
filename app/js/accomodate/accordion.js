const accordion = document.getElementById('cases__accordion');
const items = document.querySelectorAll('.cases__accordion_item');
const paginationItems = document.querySelectorAll('.cases__accordion_pagination_item');

images = [
    img1 = './images/acc_slide_1.webp',
    img2 = './images/acc_slide_2.webp',
    img3 = './images/acc_slide_3.webp',
    img4 = './images/acc_slide_4.webp',
    img5 = './images/acc_slide_5.webp',
]

// Функция для переключения активного блока
function setActive(index) {
items.forEach((item, i) => {
    item.classList.toggle('active', i + 1 === index);
});

// Обновляем пагинацию
paginationItems.forEach((paginationItem) => {
    const isActive = parseInt(paginationItem.dataset.index) === index;
    paginationItem.classList.toggle('active', isActive);
});
}

// Клик по блоку аккордеона
items.forEach((item, i) => {
    item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);

        // Устанавливаем активный элемент
        setActive(index);

        // Применяем стили для всех элементов
        items.forEach((otherItem, otherIndex) => {
            if (otherItem === item) {
                // Добавляем градиент для текущего активного элемента
                otherItem.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)), url('/images/acc_slide_${otherIndex + 1}.webp')`;
            } else {
                // Убираем градиент для остальных элементов
                otherItem.style.backgroundImage = `url('/images/acc_slide_${otherIndex + 1}.webp')`;
            }
        });
    });

    if (item.classList.contains('active')) {
        // Добавляем градиент для текущего активного элемента
        item.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)), url('/images/acc_slide_${i + 1}.webp')`;
    } else {
        // Убираем градиент для остальных
        item.style.backgroundImage = `url('/images/acc_slide_${i + 1}.webp')`;
    }

    item.style.backgroundSize = 'cover';
    item.style.backgroundPosition = 'center';
    item.style.backgroundRepeat = 'no-repeat';
});

// Клик по пагинации
paginationItems.forEach((paginationItem) => {
paginationItem.addEventListener('click', (e) => {
    e.stopPropagation(); // Останавливаем всплытие, чтобы не срабатывал клик по блоку
    const index = parseInt(paginationItem.dataset.index);
    setActive(index);
});
});