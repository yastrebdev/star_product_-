document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-popup-trigger]').forEach(button => {
        button.addEventListener('click', () => {
            const popupId = button.getAttribute('data-popup-trigger');
            const popupOverlay = document.querySelector(`[data-popup="${popupId}"]`);
            if (popupOverlay) {
                popupOverlay.classList.add('show');
            }
            console.log(popupId)
        });
    });

    document.querySelectorAll('[data-popup]').forEach(popupOverlay => {
        const closeButton = popupOverlay.querySelector('.popup-close');
        closeButton.addEventListener('click', () => {
            popupOverlay.classList.remove('show');
        });

        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.classList.remove('show');
            }
        });
    });
});