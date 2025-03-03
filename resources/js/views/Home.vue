<template>
  <div>
    <div v-if="loading" class="loader-overlay">
      <div class="loader"></div>
    </div>
    <div v-else>
      <section class="relative w-full h-screen max-h-[1200px] overflow-hidden animate-block">
        <img :src="'/img/mainbanner.jpeg'" alt="Banner"
          class="w-full h-full object-cover object-[center_35%] animate-image">
        <div class="absolute inset-0 bg-[linear-gradient(57.99deg,_#FCE7F3_0%,_#E8C4E6_47.5%)] opacity-70"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <span class="text-white text-[14px] font-normal transform rotate-[-2.53deg] uppercase py-10 animate-text">
            Eurocosmetics
          </span>
          <h1
            class="text-white text-[80px] font-light uppercase transform rotate-[-2.53deg] tracking-[2px] animate-text"
            style="line-height: 105.6px; font-family: 'Mont', sans-serif;">
            {{ $t("home.createBeauty") }} <br> {{ $t("home.together") }}
          </h1>
        </div>
      </section>

      <section class="relative">
        <div class="container mx-auto px-5">
          <div
            class="relative mx-auto max-w-[400px] text-center transform -translate-y-1/2 z-30 p-[20px] bg-[#fff] rounded shadow animate-block">
            <video autoplay muted loop class="w-full max-h-[660px] object-contain">
              <source :src="'/img/video.mp4'" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
      </section>

      <section class="pb-50 bg-[var(--pink)] -mt-30">
        <div class="container mx-auto px-5">
          <div class="flex flex-col md:flex-row justify-around items-start gap-5">
            <div class="text-center flex-1 animate-block">
              <div class="mx-auto mb-2 w-28 h-28 animate-image">
                <img :src="'/img/border1.png'" alt="1" class="mx-auto block">
              </div>
              <p class="text-[var(--gold)] text-[20px] animate-text">
                {{ $t("home.officialDistributors") }} <br>
                {{ $t("home.bestEuropeanBrands") }}
              </p>
            </div>
            <div class="text-center flex-1 animate-block">
              <div class="mx-auto mb-2 w-28 h-28 animate-image">
                <img :src="'/img/border2.png'" alt="2" class="mx-auto block">
              </div>
              <p class="text-[var(--gold)] text-[20px] animate-text">
                {{ $t("home.wideRange") }} <br>
                {{ $t("home.cosmeceuticalProducts") }}
              </p>
            </div>
            <div class="text-center flex-1 animate-block">
              <div class="mx-auto mb-2 w-28 h-28 animate-image">
                <img :src="'/img/border3.png'" alt="3" class="mx-auto block">
              </div>
              <p class="text-[var(--gold)] text-[20px] animate-text">
                {{ $t("home.reputation") }} <br>
                {{ $t("home.reliability") }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Секция с изображениями и текстом "О нас" -->
      <section class="pb-50 bg-[var(--pink)]">
        <div class="container mx-auto px-5 space-y-10 circle relative">
          <div class="flex flex-col md:flex-row items-center justify-evenly gap-5 image-container">
            <div class="relative">
              <div
                class="rounded-3xl background-overlay lg:max-w-[740px] lg:max-h-[800px] w-auto h-auto md:max-w-[400px] md:max-h-[600px] sm:max-w-[300px] sm:max-h-[400px] left-0">
              </div>
              <img :src="'/img/left.jpeg'" alt="Feature 1"
                class="rounded-3xl slide-image lg:max-w-[740px] lg:max-h-[800px] w-auto h-auto md:max-w-[400px] md:max-h-[600px] sm:max-w-[300px] sm:max-h-[400px]">
            </div>
            <div class="text-center text-[20px] text-[var(--gold)] animate-block">
              <div class="mb-2 mx-auto w-28 h-28">
                <img :src="'/img/star.png'" alt="" class="mx-auto block animate-image">
              </div>
              <h2 class="mb-2 lg:text-[40px] md:text-3xl tracking-[5px] uppercase py-5 animate-text">
                {{ $t("about.title") }}
              </h2>
              <p class="w-1/2 sm:w-3/4 mx-auto text-justify pb-5 animate-text">
                {{ $t("home.aboutUsDescription") }}
              </p>
              <animated-button :link="'/about'" :label="$t('home.moreInfo')"></animated-button>
            </div>
          </div>

          <div class="flex flex-col md:flex-row-reverse items-center justify-evenly gap-5 image-container">
            <div class="relative">
              <div
                class="rounded-3xl background-overlay lg:max-w-[740px] lg:max-h-[800px] w-auto h-auto md:max-w-[400px] md:max-h-[600px] sm:max-w-[300px] sm:max-h-[400px]">
              </div>
              <img :src="'/img/right.jpeg'" alt="Feature 1"
                class="rounded-3xl slide-image lg:max-w-[740px] lg:max-h-[800px] w-auto h-auto md:max-w-[400px] md:max-h-[600px] sm:max-w-[300px] sm:max-h-[400px]">
            </div>
            <div class="text-center text-[20px] text-[var(--gold)] animate-block">
              <div class="mb-2 mx-auto w-28 h-28">
                <img :src="'/img/star.png'" alt="" class="mx-auto block animate-image">
              </div>
              <h2 class="mb-2 lg:text-[40px] md:text-3xl tracking-[5px] uppercase py-5 animate-text">
                {{ $t("home.cooperation") }}
              </h2>
              <p class="w-1/2 sm:w-3/4 mx-auto text-justify pb-5 animate-text">
                {{ $t("home.cooperationDescription") }}
              </p>
              <animated-button :link="'/about'" :label="$t('home.moreInfo')"></animated-button>
            </div>
          </div>
        </div>
      </section>

      <!-- Секция продукции -->
      <section class="pt-10 pb-2 bg-[var(--pink)]">
        <div class="px-1">
          <h2 class="mb-2 lg:text-[40px] md:text-3xl tracking-[5px] uppercase pb-10 text-[var(--gold)] text-center">
            {{ $t("home.products") }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div v-for="(product, index) in products" :key="index" class="relative overflow-hidden animate-block">
              <div class="relative h-full">
                <img :src="product.image" :alt="product.title" class="w-full h-full object-cover animate-image">
                <div
                  class="absolute inset-0 bg-gradient-to-b from-[rgba(10,3,24,0.2)] via-[rgba(17,12,35,0.8)] to-[#15112A] z-10">
                </div>
              </div>
              <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
                <h2 class="mb-2 lg:text-[40px] md:text-3xl tracking-[5px] uppercase py-5 animate-text">
                  {{ product.title }}
                </h2>
                <p class="w-1/2 sm:w-3/4 mx-auto text-center pb-5 animate-text hidden md:block">
                  {{ product.description }}
                </p>
                <animated-button :link="'https://eurocosmetics.com.tm/'" :label="$t('home.moreInfo')"></animated-button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Секция логотипов -->
      <section class="py-30 bg-[#1E1927]">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div v-for="n in 17" :key="n" class="swiper-slide flex items-center justify-center">
              <div class="w-40 h-40 flex items-center justify-center">
                <img :src="`/img/logo/logo${n}.png`" :alt="`Logo ${n}`"
                  class="w-full h-full object-contain object-center">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Секция локаций -->
      <section class="py-50 bg-[#F8ECF3]">
        <div class="container mx-auto flex flex-col lg:flex-row gap-8 pb-50">
          <div class="lg:w-1/2 md:w-full">
            <div class="sticky top-10">
              <img :src="'/img/store.jpg'" alt="Store Image"
                class="w-2/3 h-auto max-h-[550px] object-contain rounded-full md:mx-auto md:pb-10">
            </div>
          </div>
          <div class="lg:w-1/2 w-full flex flex-col gap-6 items-center">
            <div class="lg:w-1/2 w-full flex flex-col gap-6">
              <location-card v-for="(location, index) in locations" :key="index" :image="location.image"
                :title="location.title" :description="location.description"></location-card>
            </div>
          </div>
        </div>
      </section>

      <social-circles></social-circles>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    const titleArkach = this.$t('home.Arkach');
    const titleGulzemin = this.$t('home.Gulzemin');
    const titleBerkarar = this.$t('home.Berkarar');
    const titleAshgabat = this.$t('home.Ashgabad');

    return {
      loading: true,
      products: [
        {
          image: '/img/cat/cat1.jpg',
          title: this.$t('home.careCosmetics'),
          description: this.$t('home.careCosmeticsDescription'),
        },
        {
          image: '/img/cat/cat2.jpg',
          title: this.$t('home.perfumes'),
          description: this.$t('home.perfumesDescription'),
        },
        {
          image: '/img/cat/cat3.jpg',
          title: this.$t('home.decorativeCosmetics'),
          description: this.$t('home.decorativeCosmeticsDescription'),
        },
        {
          image: '/img/cat/cat4.jpg',
          title: this.$t('home.forChildren'),
          description: this.$t('home.forChildrenDescription'),
        },
        {
          image: '/img/cat/cat5.jpg',
          title: this.$t('home.forMen'),
          description: this.$t('home.forMenDescription'),
        },
        {
          image: '/img/cat/cat6.jpg',
          title: this.$t('home.hairCare'),
          description: this.$t('home.hairCareDescription'),
        },
      ],
      locations: [
        {
          image: '/img/adres.png',
          title: titleArkach,
          description: this.$t('home.locationDescription'),
        },
        {
          image: '/img/adres.png',
          title: titleGulzemin,
          description: this.$t('home.locationDescription'),
        },
        {
          image: '/img/adres.png',
          title: titleBerkarar,
          description: this.$t('home.locationDescription'),
        },
        {
          image: '/img/adres.png',
          title: titleAshgabat,
          description: this.$t('home.locationDescription'),
        },
      ]
    }
  },
  mounted() {
    console.log("Component mounted");
    this.hideLoader();
  },
  methods: {
  hideLoader() {
    console.log("Preloader active, waiting 10 sec before hiding...");
    setTimeout(() => {
      this.loading = false;
      this.$nextTick(() => {
        console.log("Loader hidden after 10 seconds");
        if (typeof initAnimations === "function") {
          initAnimations();
        }
      });
    }, 3000);
  }
}
}
</script>

<style>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fce7f3; /* розовый фон */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  transition: opacity 0.5s ease;
}

/* HTML: <div class="loader"></div> */
.loader {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  background: radial-gradient(circle closest-side, #BA9666 94%, #0000) right/calc(200% - 1em) 100%;
  animation: l24 1s infinite alternate linear;
}
.loader::before {
  content: "Loading...";
  line-height: 1em;
  color: #0000;
  background: inherit;
  background-image: radial-gradient(circle closest-side, #fff 94%, #BA9666);
  -webkit-background-clip: text;
          background-clip: text;
}

@keyframes l24{
  100%{background-position: left}
}
</style>