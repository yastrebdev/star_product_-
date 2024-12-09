document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".categories__list");
    const items = document.querySelectorAll(".categories__item");

    let draggedItem = null; // Текущий перетаскиваемый элемент
    let placeholder = null; // Плейсхолдер для визуализации позиции
    let startIndex = null; // Индекс элемента перед началом перетаскивания

    items.forEach((item, index) => {
        item.draggable = true; // Добавляем возможность перетаскивания
        item.addEventListener("dragstart", (e) => {
            draggedItem = item;
            startIndex = index;

            // Создаем плейсхолдер
            placeholder = document.createElement("li");
            placeholder.className = "categories__item placeholder";
            placeholder.style.width = `${item.offsetWidth}px`;
            placeholder.style.height = `${item.offsetHeight}px`;

            item.classList.add("dragging");
            setTimeout(() => (item.style.display = "none"), 0); // Скрываем элемент
        });

        item.addEventListener("dragend", () => {
            draggedItem.classList.remove("dragging");
            draggedItem.style.display = "flex";

            if (placeholder) {
                list.replaceChild(draggedItem, placeholder);
                placeholder.remove();
            }

            draggedItem = null;
            placeholder = null;
            startIndex = null;
        });

        item.addEventListener("dragover", (e) => {
            e.preventDefault();
            const currentElement = e.target.closest(".categories__item");
            if (currentElement && currentElement !== placeholder && currentElement !== draggedItem) {
                const rect = currentElement.getBoundingClientRect();
                const next =
                    e.clientY > rect.top + rect.height / 2 || e.clientX > rect.left + rect.width / 2;
                if (next) {
                    list.insertBefore(placeholder, currentElement.nextSibling);
                } else {
                    list.insertBefore(placeholder, currentElement);
                }
            }
        });
    });
});