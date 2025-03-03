import { createApp } from "vue";
import App from "./views/App.vue";
import router from "./router";

import HeaderComponent from "./components/HeaderComponent.vue";
import SocialCircles from "./components/SocialCircles.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ProductCard from "./components/ProductCard.vue";
import AnimatedButton from "./components/AnimatedButton.vue";
import LocationCard from "./components/LocationCard.vue";
import Swiper from "swiper/bundle";
import { createI18n } from "vue-i18n";
import messages from "./lang";

const i18n = createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages,
});

const app = createApp(App);

app.component("animated-button", AnimatedButton);
app.component("social-circles", SocialCircles);
app.component("header-component", HeaderComponent);
app.component("footer-component", FooterComponent);
app.component("product-card", ProductCard);
app.component("location-card", LocationCard);

app.use(router);
app.use(i18n);
app.mount("#app");

function initAnimations() {
    // Инициализация Swiper
    const swiper = new Swiper(".swiper", {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    window.initAnimations = initAnimations;
    // Анимация для контейнеров изображений
    const containers = document.querySelectorAll(".image-container");
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );
    containers.forEach((container) => observer.observe(container));

    // Анимация появления блоков
    const blocks = document.querySelectorAll(".animate-block");
    const blockObserver = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("active");
                        const images =
                            entry.target.querySelectorAll(".animate-image");
                        const texts =
                            entry.target.querySelectorAll(".animate-text");
                        images.forEach((image, imgIndex) => {
                            setTimeout(() => {
                                image.classList.add("active");
                            }, imgIndex * 200);
                        });
                        texts.forEach((text, textIndex) => {
                            setTimeout(() => {
                                text.classList.add("active");
                            }, (images.length + textIndex) * 200);
                        });
                        obs.unobserve(entry.target);
                    }, index * 600);
                }
            });
        },
        { threshold: 0.5 }
    );
    blocks.forEach((block) => blockObserver.observe(block));
}

// Первоначальная инициализация анимаций при загрузке страницы
document.addEventListener("DOMContentLoaded", initAnimations);

// Перезапуск анимаций при каждом переходе между страницами (SPA)
router.afterEach(() => {
    // Немного задерживаем вызов, чтобы новый контент успел отрендериться
    setTimeout(initAnimations, 300);
});
