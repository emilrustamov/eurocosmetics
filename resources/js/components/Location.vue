<template>
    <section class="py-20 md:py-50">
        <h2 class="mb-10 lg:text-[40px] md:text-3xl tracking-[5px] uppercase py-5 text-[var(--gold)] text-center">
            {{ $t("home.stores") }}
        </h2>
        <div class="container mx-auto flex flex-col lg:flex-row gap-8 pb-50">

            <div class="lg:w-1/2 md:w-full">
                <div class="sticky top-[150px] md:top-[100px] sm:top-[50px]">
                    <img :src="currentImage" alt="Store Image"
                        class="h-auto max-h-[550px] object-contain rounded-3xl md:mx-auto md:mb-10 transition-all duration-500">
                </div>
            </div>
            <div class="lg:w-1/2 w-full flex flex-col gap-40 items-center"> <!-- Увеличен gap -->
                <div class="lg:w-1/2 w-full flex flex-col gap-40"> <!-- Увеличен gap -->
                    <div v-for="(location, index) in locations" :key="index" ref="cards" class="location-card">
                        <div
                            class="flex flex-col items-center p-4 mb-10 bg-[#F8ECF3] rounded mx-auto animate-block no-scroll w-86">
                            <!-- Увеличен margin-bottom -->
                            <div class="mb-2 mx-auto w-28 h-28">
                                <i class="fas fa-store text-[var(--gold)] text-6xl !flex justify-center"></i>
                            </div>
                            <div class="text-center text-[var(--gold)]">
                                <h2 class="mb-2 text-[26px] tracking-[5px] uppercase py-5 animate-text">{{
                                    $t(location.titleKey) }}</h2>
                                <p class="w-3/4 mx-auto text-justify pb-5 animate-text">{{ $t(location.descriptionKey)
                                    }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
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
            currentImage: 'img/arkcach.png' // начальное изображение
        };
    },
    mounted() {
        this.observeCards();
    },
    methods: {
        observeCards() {
            const options = {
                root: null,
                threshold: 0.5
            };
            const observer = new IntersectionObserver((entries) => {
                let maxRatio = 0;
                let maxEntry = null;

                // Выбираем карточку с наибольшим intersectionRatio
                entries.forEach(entry => {
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

            this.$refs.cards.forEach(card => observer.observe(card));
        }
    }
};
</script>