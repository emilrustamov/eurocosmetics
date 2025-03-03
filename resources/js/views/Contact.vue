<template>
  <div>
    <!-- Баннер (как на главной) -->
    <section class="relative w-full h-screen max-h-[1200px] overflow-hidden animate-block">
      <img :src="'/img/contact-banner.jpg'" alt="Banner"
        class="w-full h-full object-cover object-[center_35%] animate-image">
      <div class="absolute inset-0 opacity-70" style="background: #15112A96;"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-white lg:text-[80px] text-4xl font-light uppercase tracking-[2px] animate-text"
          style="font-family:'Mont', sans-serif;">
          {{ $t("header.contacts") }}
        </h1>
      </div>
    </section>

    <!-- Блок с видео, которое перекрывает баннер -->
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
        <!-- Левая часть: надпись "Контактная форма", затем заголовок и текст -->
        <div class="md:w-1/2">
          <p class="text-sm uppercase mb-2" style="color: #F0C8E0;">{{ $t("form.contactForm") }}</p>
          <h2 class="text-4xl font-bold uppercase" style="color: #F0C8E0;">
            {{ $t("form.focusOnPartners") }}
          </h2>
          <p class="text-lg mt-4" style="color: #F0C8E0B2;">
            {{ $t("form.description") }}
          </p>
        </div>
        <!-- Правая часть: форма с нижней линией для полей -->
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

    <!-- Секция локаций -->
    <section class="py-50 bg-[#F8ECF3]">
      <div class="container mx-auto flex flex-col lg:flex-row gap-8 pb-50">
        <div class="lg:w-1/2 w-full">
          <div class="sticky top-10">
            <img :src="'/img/store.jpg'" alt="Store Image"
              class="lg:w-2/3 w-full h-auto max-h-[550px] object-contain rounded-full md:mx-auto md:pb-10">
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


  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Contact',
  data() {
    const titleArkach = this.$t('home.Arkach');
    const titleGulzemin = this.$t('home.Gulzemin');
    const titleBerkarar = this.$t('home.Berkarar');
    const titleAshgabat = this.$t('home.Ashgabad');

    return {
      name: '',
      email: '',
      phone: '',
      message: '',
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
          // можно очистить форму:
          this.name = '';
          this.email = '';
          this.phone = '';
          this.message = '';
        })
        .catch(error => {
          alert('Ошибка при отправке сообщения');
          console.error(error);
        });
    }
  }
}
</script>
