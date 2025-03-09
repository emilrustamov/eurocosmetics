<template>
    <section class="py-20 md:py-50 bg-[#F8ECF3]">
        <div class="container mx-auto flex flex-col lg:flex-row gap-8 pb-50">
            <div class="lg:w-1/2 md:w-full">
                <div class="sticky top-10">
                    <img :src="'/img/store.jpg'" alt="Store Image" class="h-auto max-h-[550px] object-contain rounded-3xl md:mx-auto md:mb-10">
                </div>
            </div>
            <div class="lg:w-1/2 w-full flex flex-col gap-6 items-center">
                <div class="lg:w-1/2 w-full flex flex-col gap-6">
                    <div v-for="(location, index) in locations" :key="index">
                        <div class="flex flex-col items-center bg-white p-4 mb-5 rounded shadow mx-auto animate-block no-scroll w-72">
                            <div class="mb-2 mx-auto w-28 h-28">
                                <img :src="location.image" alt="" class="mx-auto block animate-image">
                            </div>
                            <div class="text-center text-[var(--gold)]">
                                <h2 class="mb-2 text-[26px] tracking-[5px] uppercase py-5 animate-text">{{ $t(location.titleKey) }}</h2>
                                <p class="w-3/4 mx-auto text-justify pb-5 animate-text">{{ $t(location.descriptionKey) }}</p>
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
                { image: '/img/adres.png', titleKey: 'home.Arkach', descriptionKey: 'home.ArkachAddress' },
                { image: '/img/adres.png', titleKey: 'home.Gulzemin', descriptionKey: 'home.GulzeminAddress' },
                { image: '/img/adres.png', titleKey: 'home.Berkarar', descriptionKey: 'home.BerkararAddress' },
                { image: '/img/adres.png', titleKey: 'home.Ashgabad', descriptionKey: 'home.AshgabadAddress' }
            ]
        }
    }
}
</script>
