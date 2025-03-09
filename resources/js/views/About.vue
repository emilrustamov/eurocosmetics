<template>
  <div>
    <section class="relative w-full h-screen max-h-[1200px] overflow-hidden animate-block">
      <img :src="'/img/aboutbanner.jpg'" alt="Banner"
        class="w-full h-full object-cover object-center animate-image">
      <div class="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_0%,_rgba(252,_231,_243,_0.8)_75%,_#FCE7F3_100%)]"></div>
      <div class="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-white lg:text-[80px] text-4xl font-light uppercase tracking-[2px] animate-text"
          style="font-family: 'Mont'">
          Eurocosmetics
        </h1>
        <div class="flex items-center">
          <img :src="'/img/flowers.jpg'" alt="Flowers" class="mr-2 rounded md:w-24 md:h-16 ">
          <h1 class="text-white lg:text-[80px] text-4xl font-light uppercase tracking-[2px] animate-text"
            style="font-family: 'Mont'">
            {{ $t("hero.of_your") }}
          </h1>
        </div>
        <h1 class="text-white lg:text-[80px] text-4xl font-light uppercase tracking-[2px] animate-text"
          style="font-family: 'Mont'">
          {{ $t("hero.beauty_and_style") }}
        </h1>
      </div>
      <div class="absolute bottom-0 w-full h-16 bg-gradient-to-t from-[#FCE7F3] to-transparent"></div>
    </section>

    <!-- Section: Image left & animated numbers right -->
    <section class="relative">
      <div class="container mx-auto flex flex-col md:flex-row items-start gap-8 self-start lg:-translate-y-1/3 md:-translate-y-1/4 md:pb-10">

        <div class="lg:w-1/2 w-full flex items-center image-container ">
          <div class="relative">
            <div
              class="rounded-3xl background-overlay lg:max-w-[740px] lg:max-h-[800px] w-auto h-auto md:max-w-[400px] md:max-h-[600px] sm:max-w-[300px] sm:max-h-[400px] left-0">
            </div>
            <img :src="'/img/about-left.jpg'" alt="Feature 1"
              class="rounded-3xl slide-image lg:max-w-[740px] lg:max-h-[800px] w-auto h-auto md:max-w-[400px] md:max-h-[600px] sm:max-w-[300px] sm:max-h-[400px]">
          </div>
        </div>

        <div class="lg:w-1/2 w-full flex flex-col items-center lg:space-y-50 space-y-10">
          <div class="flex flex-col items-center text-[var(--gold)]">
            <div class="text-4xl md:lg:text-[80px] text-4xl font-bold animate-number" data-target="1000">0+</div>
            <div class="text-lg">{{ $t("about.products") }}</div>
          </div>
          <div class="flex flex-col items-center text-[var(--gold)] relative smcircle">
            <div class="text-4xl md:lg:text-[80px] text-4xl font-bold animate-number" data-target="20000">0+</div>
            <div class="text-lg">{{ $t("about.clients") }}</div>
          </div>
          <div class="flex flex-col items-center text-[var(--gold)]">
            <div class="text-4xl md:lg:text-[80px] text-4xl font-bold animate-number" data-target="4">0</div>
            <div class="text-lg">{{ $t("about.stores") }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Text left & image right -->
    <section class="pb-20 lg:pt-1 pt-20">
      <div class="container mx-auto flex flex-col md:flex-row items-center gap-8 ">
        <!-- Left: Text block -->
        <div class="lg:w-1/2 md:w-full text-[var(--gold)]">
          <h2 class="text-4xl font-bold uppercase mb-4 lg:text-start text-center">{{ $t("about.ourHistory") }}</h2>
          <p class="text-lg ">
            {{ $t("about.description") }}
          </p>
        </div>

        <div class="lg:w-1/2 md:w-full  image-container">
          <div class="relative">
            <div
              class="rounded-3xl background-overlay lg:max-w-[740px] lg:max-h-[800px] w-auto h-auto md:max-w-[400px] md:max-h-[600px] sm:max-w-[300px] sm:max-h-[400px] ">
            </div>
            <img :src="'/img/about-right.jpg'" alt="Feature 1"
              class="rounded-3xl slide-image lg:max-w-[740px] lg:max-h-[800px] w-auto h-auto md:max-w-[400px] md:max-h-[600px] sm:max-w-[300px] sm:max-h-[400px]">
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-[#1E1927]">
      <div class="container mx-auto text-center">
        <h2 class="  text-lg font-bold mb-4 tracking-[8px] text-[var(--gold)] "> EUROCOSMETICS</h2>
        <p class="text-white text-4xl">
          {{ $t("about.revolution") }}
        </p>
      </div>
    </section>

    <section class="pt-20 pb-50 bg-[#F8ECF3] animate-block">
      <div class="container mx-auto">
        <img :src="'/img/about-center.jpg'" alt="Center Banner" class="mx-auto w-full object-cover rounded-3xl">
      </div>
    </section>

    <social-circles></social-circles>
  </div>
</template>

<script>
export default {
  name: "About",
  mounted() {
    // Running number animation for counters
    const counters = document.querySelectorAll('.animate-number');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace('+', '');
        const increment = target / 200;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment) + (target === 4 ? '' : '+');
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + (target === 4 ? '' : '+');
        }
      }
      updateCount();
    });
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() { // or beforeUnmount in Vue 3
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.innerWidth < 768) return; // disable scroll-based transformation on mobile devices
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      document.querySelectorAll('.animate-block').forEach(el => {
        el.style.transform = `translateY(${scrollTop * 0.03}px)`;
      });
    }
  }
}
</script>
