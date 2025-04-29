<template>
    <section class="py-20 md:py-50">
        <h2 class="md:mb-10 mb-5 lg:text-[40px] text-3xl tracking-[5px] uppercase py-5 text-[var(--gold)] text-center">
            {{ $t('home.stores') }}
        </h2>

        <!-- ======== Mobile only slider ======== -->
        <div class="lg:hidden mb-10"> <!-- скрыто на ≥ lg -->
            <div class="swiper mobileLocationSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(loc, i) in locations" :key="'m-' + i">
                        <img :src="loc.image" :alt="$t(loc.titleKey)" class="w-full h-[70vh] object-contain rounded" />
                        <!-- текстовый блок -->
                        <div class="px-4 mt-4 text-[var(--gold)] text-center">
                            <h3 class="text-xl tracking-[3px] uppercase mb-2">
                                {{ $t(loc.titleKey) }}
                            </h3>
                            <p class="text-sm leading-snug">
                                {{ $t(loc.descriptionKey) }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- точечки-пагинация -->
                <div class="swiper-pagination !bottom-1 hidden lg:block"></div>
            </div>
        </div>
        <!-- ======== /Mobile slider ======== -->

        <!-- ======== Старая раскладка для ≥ lg ======== -->
        <div class="container mx-auto gap-8 pb-50 hidden lg:flex flex-col lg:flex-row">
            <div class="lg:w-1/2 md:w-full">
                <div class="sticky top-[150px] md:top-[100px] sm:top-[50px]">
                    <img :src="currentImage" alt="Store Image"
                        class="h-auto max-h-[550px] object-contain rounded md:mx-auto md:mb-10 transition-all duration-500" />
                </div>
            </div>

            <div class="lg:w-1/2 w-full flex flex-col md:gap-40 gap-5 items-center">
                <div class="lg:w-1/2 w-full flex flex-col md:gap-40 gap-5">
                    <div v-for="(location, index) in locations" :key="index" ref="cards" class="location-card">
                        <div
                            class="flex flex-col items-center p-4 mb-10 bg-[#F8ECF3] rounded mx-auto animate-block no-scroll w-86">
                            <div class="mb-2 mx-auto w-28 h-28">
                                <i class="fas fa-store text-[var(--gold)] text-6xl !flex justify-center"></i>
                            </div>
                            <div class="text-center text-[var(--gold)]">
                                <h2 class="mb-2 text-[26px] tracking-[5px] uppercase py-5 animate-text">
                                    {{ $t(location.titleKey) }}
                                </h2>
                                <p class="w-3/4 mx-auto text-justify pb-5 animate-text">
                                    {{ $t(location.descriptionKey) }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ======== /≥lg ======== -->
    </section>
</template>

<script>
import { Swiper as SwiperClass } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

export default {
    name: 'Location',
    data() {
        return {
            locations: [
                { image: '/img/arkcach.png', titleKey: 'home.Arkach', descriptionKey: 'home.ArkachAddress' },
                { image: '/img/gulzemin.jpg', titleKey: 'home.Gulzemin', descriptionKey: 'home.GulzeminAddress' },
                { image: '/img/berkarar.png', titleKey: 'home.Berkarar', descriptionKey: 'home.BerkararAddress' },
                { image: '/img/ashgabatmall.jpg', titleKey: 'home.Ashgabad', descriptionKey: 'home.AshgabadAddress' },
                { image: '/img/zielinskiy.jpg', titleKey: 'home.Zielinskiy', descriptionKey: 'home.ZielinskiyAddress' }
            ],
            currentImage: '/img/arkcach.png'
        };
    },
    mounted() {
        // десктоп-обсервер
        this.observeCards();

        // мобильный свайпер
        if (window.innerWidth < 1024) {              // lg-breakpoint Tailwind
            // не забываем, что модули уже глобально зарегистрированы в main.js
            new SwiperClass('.mobileLocationSwiper', {
                modules: [Autoplay, Pagination],
                slidesPerView: 1,
                loop: true,
                pagination: { el: '.swiper-pagination', clickable: true },
                autoplay: { delay: 2000, disableOnInteraction: false },
                speed: 2000
            });
        }
    },
    methods: {
        observeCards() {
            if (window.innerWidth < 1024) return;      // отключаем на мобиле

            const options = { root: null, threshold: 0.5 };
            const observer = new IntersectionObserver((entries) => {
                let maxRatio = 0;
                let maxEntry = null;

                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        maxEntry = entry;
                    }
                });

                if (maxEntry) {
                    const index = Array.from(this.$refs.cards).indexOf(maxEntry.target);
                    if (index !== -1) {
                        this.currentImage = this.locations[index].image;
                    }
                }
            }, options);

            this.$refs.cards.forEach((card) => observer.observe(card));
        }
    }
};
</script>
