<template>
    <div>
        <section class="px-5 py-10 pb-20">
            <div class="container mx-auto ">
                <div class="flex justify-center space-x-4 mb-10">
                    <button v-for="category in categories" :key="category" @click="filterProducts(category)"
                        class="px-4 py-2 bg-[var(--gold)] text-white rounded bg-opacity-75 hover:bg-opacity-100">
                        {{ category }}
                    </button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div v-for="product in filteredProducts" :key="product.id" class="bg-white p-4 rounded shadow">
                        <img :src="product.image" :alt="product.title" class="w-full h-48 object-cover rounded mb-4">
                        <h3 class="text-lg font-bold">{{ product.title }}</h3>
                        <p class="text-sm text-gray-500">{{ product.category }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
export default {
    name: 'Products',
    data() {
        return {
            categories: [],
            products: [],
            filteredProducts: [],
        };
    },
    created() {
        this.setCategories();
        this.fetchProducts();
    },
    watch: {
        '$i18n.locale'() {
            this.setCategories();
            this.fetchProducts();
        }
    },
    methods: {
        setCategories() {
            this.categories = [
                this.$t('home.careCosmetics'),
                this.$t('home.perfumes'),
                this.$t('home.decorativeCosmetics'),
                this.$t('home.forChildren'),
                this.$t('home.forMen'),
                this.$t('home.hairCare'),
            ];
        },
        fetchProducts() {
            // Simulate an AJAX request
            setTimeout(() => {
                this.products = [
                    {
                        id: 1,
                        image: '/img/products/product1.jpg',
                        title: this.$t('home.careCosmetics'),
                        category: this.$t('home.careCosmetics'),
                    },
                    {
                        id: 2,
                        image: '/img/products/product2.jpg',
                        title: this.$t('home.perfumes'),
                        category: this.$t('home.perfumes'),
                    },
                    {
                        id: 3,
                        image: '/img/products/product3.jpg',
                        title: this.$t('home.decorativeCosmetics'),
                        category: this.$t('home.decorativeCosmetics'),
                    },
                    {
                        id: 4,
                        image: '/img/products/product4.jpg',
                        title: this.$t('home.forChildren'),
                        category: this.$t('home.forChildren'),
                    },
                    {
                        id: 5,
                        image: '/img/products/product5.jpg',
                        title: this.$t('home.forMen'),
                        category: this.$t('home.forMen'),
                    },
                    {
                        id: 6,
                        image: '/img/products/product6.jpg',
                        title: this.$t('home.hairCare'),
                        category: this.$t('home.hairCare'),
                    },
                    {
                        id: 7,
                        image: '/img/products/product7.jpg',
                        title: this.$t('home.careCosmetics'),
                        category: this.$t('home.careCosmetics'),
                    },
                    {
                        id: 8,
                        image: '/img/products/product8.jpg',
                        title: this.$t('home.perfumes'),
                        category: this.$t('home.perfumes'),
                    },
                    {
                        id: 9,
                        image: '/img/products/product9.jpg',
                        title: this.$t('home.decorativeCosmetics'),
                        category: this.$t('home.decorativeCosmetics'),
                    },
                    {
                        id: 10,
                        image: '/img/products/product10.jpg',
                        title: this.$t('home.forChildren'),
                        category: this.$t('home.forChildren'),
                    },
                    {
                        id: 11,
                        image: '/img/products/product11.jpg',
                        title: this.$t('home.forMen'),
                        category: this.$t('home.forMen'),
                    },
                    {
                        id: 12,
                        image: '/img/products/product12.jpg',
                        title: this.$t('home.hairCare'),
                        category: this.$t('home.hairCare'),
                    },
                ];
                this.filteredProducts = this.products;
            }, 1000);
        },
        filterProducts(category) {
            this.filteredProducts = this.products.filter(product => product.category === category);
        },
    },
};
</script>
