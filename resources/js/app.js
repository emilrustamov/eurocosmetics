import { createApp } from "vue";
import App from "./views/App.vue";
import router from "./router";
import HeaderComponent from "./components/HeaderComponent.vue";
import SocialCircles from "./components/SocialCircles.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ProductCard from "./components/ProductCard.vue";
import AnimatedButton from "./components/AnimatedButton.vue";
import Location from "./components/Location.vue";
import Swiper from "swiper"; // Основной импорт Swiper
import { Navigation, Autoplay, FreeMode } from "swiper/modules"; // Модули из отдельного пути
import { createI18n } from "vue-i18n";
import messages from "./lang";
// import 'lazysizes'

// Стили для Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const i18n = createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages,
});

const app = createApp(App);

// Регистрация компонентов
app.component("animated-button", AnimatedButton);
app.component("social-circles", SocialCircles);
app.component("header-component", HeaderComponent);
app.component("footer-component", FooterComponent);
app.component("product-card", ProductCard);
app.component("location", Location);

app.use(router);
app.use(i18n);
app.mount("#app");

// Функция инициализации всех анимаций и свайперов
function initAnimations() {
    // Инициализация вертикального свайпера
    const initVerticalSwiper = () => {
        const verticalSwipers = document.querySelectorAll(".vertical-swiper");
        verticalSwipers.forEach((swiperEl) => {
            if (!swiperEl.swiper) {
                new Swiper(swiperEl, {
                    modules: [Navigation, Autoplay],
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
            }
        });
    };

    // Инициализация свайперов для логотипов
    const initLogoSwipers = () => {
        // Десктопная версия
        if (window.innerWidth >= 768) {
            const desktopSwipers = document.querySelectorAll(".desktopSwiper");
            desktopSwipers.forEach((swiperEl) => {
                if (!swiperEl.swiper) {
                    new Swiper(swiperEl, {
                        modules: [Navigation, Autoplay],
                        slidesPerView: 6,
                        rows: 2,
                        spaceBetween: 20,
                        slidesPerGroup: 1, // Прокрутка по 1 слайду
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        breakpoints: {
                            1280: {
                                spaceBetween: 30,
                            },
                        },
                        autoHeight: true,
                        observer: true,
                        observeParents: true,
                        speed: 600, // Плавная анимация
                        effect: "slide", // Эффект скольжения
                        autoplay: {
                            delay: 3000, // Adjust delay as needed (in milliseconds)
                            disableOnInteraction: false,
                        },
                    });
                }
            });
        }

        // Мобильная версия
        const mobileSwipers = document.querySelectorAll(".mobileSwiper");
        mobileSwipers.forEach((swiperEl) => {
            if (!swiperEl.swiper) {
                new Swiper(swiperEl, {
                    modules: [FreeMode, Autoplay],
                    slidesPerView: "auto",
                    spaceBetween: 10,
                    freeMode: true,
                    centeredSlides: true, // добавлено для центрирования слайдов
                    centeredSlidesBounds: true, // добавлено для эффекта center mode
                    autoplay: {
                        delay: 3000, // Adjust delay as needed (in milliseconds)
                        disableOnInteraction: false,
                    },
                });
            }
        });
    };

    // Инициализация наблюдателей для анимаций
    const initObservers = () => {
        // Анимация для контейнеров изображений
        const containers = document.querySelectorAll(".image-container");
        const containerObserver = new IntersectionObserver(
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
        containers.forEach((container) => containerObserver.observe(container));

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
                                setTimeout(
                                    () => image.classList.add("active"),
                                    imgIndex * 200
                                );
                            });

                            texts.forEach((text, textIndex) => {
                                setTimeout(
                                    () => text.classList.add("active"),
                                    (images.length + textIndex) * 200
                                );
                            });

                            obs.unobserve(entry.target);
                        }, index * 600);
                    }
                });
            },
            { threshold: 0.5 }
        );
        blocks.forEach((block) => blockObserver.observe(block));
    };

    // Запуск всех инициализаций
    initVerticalSwiper();
    initLogoSwipers();
    initObservers();
}

// Уничтожение свайперов перед повторной инициализацией
function destroySwipers() {
    const allSwipers = document.querySelectorAll(".swiper-initialized");
    allSwipers.forEach((swiperEl) => {
        if (swiperEl.swiper) {
            swiperEl.swiper.destroy(true, true);
        }
    });
}

// Первоначальная загрузка
document.addEventListener("DOMContentLoaded", () => {
    destroySwipers();
    initAnimations();
});

// Перезагрузка при смене страниц
router.afterEach(() => {
    setTimeout(() => {
        destroySwipers();
        initAnimations();
    }, 300);
});

// Экспорт для доступа из других модулей
window.initAnimations = initAnimations;
