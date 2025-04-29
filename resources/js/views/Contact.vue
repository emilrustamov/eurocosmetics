<template>
  <div>
    <section class="relative w-full h-screen max-h-[1200px] overflow-hidden animate-block">
      <img :src="'/img/contact-banner.jpg'" alt="Banner"
        class="w-full h-full object-cover object-[center_35%] animate-image">
      <div class="absolute inset-0 opacity-70" style="background: #15112A96;"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-white lg:text-[80px] text-4xl font-light uppercase tracking-[2px] animate-text"
          style="font-family:'Mont'">
          {{ $t("header.contacts") }}
        </h1>
      </div>
    </section>

    <section class="relative">
      <div class="container mx-auto px-5">
        <div
          class="relative mx-auto max-w-[400px] text-center transform -translate-y-1/2 z-30 p-5 bg-white rounded shadow animate-block">
          <img :src="'/img/contact-image.jpg'" alt="Contact Center" class="w-full max-h-[660px] object-contain">
        </div>
      </div>
    </section>

    <section class="py-20" style="background-color: #15112A;">
      <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2">
          <p class="text-sm uppercase mb-2" style="color: #F0C8E0;">{{ $t("form.contactForm") }}</p>
          <h2 class="text-4xl font-bold uppercase" style="color: #F0C8E0;">
            {{ $t("form.focusOnPartners") }}
          </h2>
          <p class="text-lg mt-4" style="color: #F0C8E0B2;">
            {{ $t("form.description") }}
          </p>
            <div class="flex flex-col items-start justify-center gap-4 mt-3">
            <a href="tel:+99312964949" class="text-[#F0C8E0] hover:underline flex items-center gap-2">
              <i class="fa fa-phone"></i> +99312964949
            </a>
            <a href="tel:+99312964949" class="text-[#F0C8E0] hover:underline flex items-center gap-2">
              <i class="fa fa-phone"></i> +993 12 96-48-67
            </a>
            <a href="tel:+99312964866" class="text-[#F0C8E0] hover:underline flex items-center gap-2">
              <i class="fa fa-phone"></i> +993 12 96-48-66
            </a>
            <a href="mailto:sales@eurocosmeticstm.com" class="text-[#F0C8E0] hover:underline flex items-center gap-2">
              <i class="fa fa-envelope"></i> sales@eurocosmeticstm.com
            </a>
            <a href="https://www.instagram.com/eurocosmetics.tm/?hl=ru" target="_blank" rel="noopener noreferrer"
              class="text-[#F0C8E0] hover:underline flex items-center gap-2">
              <i class="fab fa-instagram"></i>instagram.com/eurocosmetics.tm
            </a>
            <a href="https://www.tiktok.com/@eurocosmetics.tm" target="_blank" rel="noopener noreferrer"
              class="text-[#F0C8E0] hover:underline flex items-center gap-2">
              <i class="fab fa-tiktok"></i> tiktok.com/@eurocosmetics.tm
            </a>
            </div>
        </div>
        <div class="lg:w-1/2 w-full">
          <form @submit.prevent="submitForm" class="space-y-4 p-6"
            style="background-color: #20193D5C; border: 2px solid #4D4181; border-radius: 0.5rem;">
            <div>
              <input type="text" v-model="name" :placeholder="$t('form.name')"
                class="w-full p-2 bg-transparent text-[#C07CA5] border-b-2 border-[#C07CA5] focus:outline-none" />
            </div>
            <div>
              <input type="email" v-model="email" :placeholder="$t('form.email')"
                class="w-full p-2 bg-transparent text-[#C07CA5] border-b-2 border-[#C07CA5] focus:outline-none" />
            </div>
            <div>
              <input type="tel" v-model="phone" :placeholder="$t('form.phone')"
                class="w-full p-2 bg-transparent text-[#C07CA5] border-b-2 border-[#C07CA5] focus:outline-none" />
            </div>
            <div>
              <textarea v-model="message" :placeholder="$t('form.message')"
                class="w-full p-2 bg-transparent text-[#C07CA5] border-b-2 border-[#C07CA5] focus:outline-none"></textarea>
            </div>
            <button type="submit" class="flex items-center justify-center bg-white text-[#C07CA5] px-4 py-2 rounded">
              {{ $t("form.send") }} <span class="ml-2">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <location> </location>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    submitForm() {
      axios.post('/contact/send', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      })
        .then(response => {
          alert('Сообщение отправлено успешно!');
          this.name = '';
          this.email = '';
          this.phone = '';
          this.message = '';
        })
        .catch(error => {
          alert('Ошибка при отправке сообщения');
          console.error(error);
        });
    },
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
