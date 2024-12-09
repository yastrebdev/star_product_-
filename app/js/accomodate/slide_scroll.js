document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);

    const navigations = document.querySelectorAll(".main_link")
    const sections = document.querySelectorAll("section");
    let currentSection = 0;
    let isScrolling = false;

    navigations.forEach(link => {
        link.addEventListener('click', e => {
            cs = Number(e.target.dataset.cs)
            currentSection = cs
        })
    })

    const scrollToSection = (index) => {
        if (index >= 0 && index < sections.length) {
            isScrolling = true;
            sections[index].scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                isScrolling = false;
            }, 1000);
        }
    };

    window.addEventListener("wheel", (event) => {
        if (!isScrolling) {
            if (event.deltaY > 0 && currentSection < sections.length - 1) {
                currentSection++;
            } else if (event.deltaY < 0 && currentSection > 0) {
                currentSection--;
            }
            scrollToSection(currentSection);
        }
    });

    // Для поддержки мобильных устройств
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener("touchstart", (event) => {
        touchStartY = event.changedTouches[0].screenY;
    });

    document.addEventListener("touchend", (event) => {
        touchEndY = event.changedTouches[0].screenY;
        handleSwipe();
    });

    const handleSwipe = () => {
        if (!isScrolling) {
            if (touchStartY > touchEndY && currentSection < sections.length - 1) {
                currentSection++;
            } else if (touchStartY < touchEndY && currentSection > 0) {
                currentSection--;
            }
            scrollToSection(currentSection);
        }
    };
});