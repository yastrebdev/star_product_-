const slider = document.querySelector('.slider');
const track = slider.querySelector('.slider__track');
const slides = Array.from(slider.querySelectorAll('.slider__slide'));
const btnPrev = slider.querySelector('.slider__btn-prev');
const btnNext = slider.querySelector('.slider__btn-next');
const pagination = slider.querySelector('.slider__pagination');

let currentIndex = 0;

slides.forEach((_, index) => {
    const dot = document.createElement('li');
    dot.classList.add('slider__pagination-item');
    if (index === currentIndex) dot.classList.add('active');
    pagination.appendChild(dot);

    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSliderPosition();
        updatePagination();
    });
});

const dots = Array.from(pagination.querySelectorAll('.slider__pagination-item'));

function updateSliderPosition() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
}

function updatePagination() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSliderPosition();
    updatePagination();
});

btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSliderPosition();
    updatePagination();
});

setInterval(() => {
    btnNext.click();
}, 5000);