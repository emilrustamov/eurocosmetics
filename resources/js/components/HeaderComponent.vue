<template>
  <header class="bg-[#f8f9fa]">
    <div class="mx-auto flex items-center justify-between">
      <div class="md:hidden flex items-center">
        <button @click="toggleMenu" class="text-[var(--gold)] focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div class="logo">
        <span class="text-[24px] text-[var(--gold)] font-bold uppercase tracking-[8px] p-4">EUROCOSMETICS</span>
      </div>
      <nav class="menu flex-1 hidden md:flex">
        <ul class="flex justify-center space-x-10 text-[var(--gold)]">
          <li>
            <router-link to="/" class="menu-link text-[16px] font-normal uppercase">{{ $t('menu.home') }}</router-link>
          </li>
          <li>
            <a href="https://eurocosmetics.com.tm/" target="_blank" class="menu-link text-[16px] font-normal uppercase">{{ $t('menu.products') }}</a>
          </li>
          <li>
            <router-link to="/about" class="menu-link text-[16px] font-normal uppercase">{{ $t('menu.about') }}</router-link>
          </li>
          <li>
            <router-link to="/contact" class="menu-link text-[16px] font-normal uppercase">{{ $t('menu.contacts') }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="hidden md:flex items-center bg-rose p-4 cursor-pointer ml-auto">
        <select v-model="currentLanguage" @change="changeLanguage" class="bg-transparent text-[var(--gold)] font-bold">
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="tm">Türkmen</option>
        </select>
      </div>
    </div>
    <transition name="slide">
      <div v-if="isMenuOpen" class="fixed inset-y-0 right-0 w-4/5 bg-[#f8f9fa] z-50 p-4 border-l-2 border-[var(--gold)]">
        <div class="flex justify-between mb-4">
          <div class="w-full">
            <select v-model="currentLanguage" @change="changeLanguage" class=" bg-transparent text-[var(--gold)] font-bold">
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="tm">Türkmen</option>
            </select>
          </div>
          <button @click="toggleMenu" class="text-[var(--gold)] focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul class="flex flex-col space-y-4 text-[var(--gold)]">
          <li>
            <router-link to="/" class="menu-link text-[16px] font-normal uppercase" @click="toggleMenu">{{ $t('menu.home') }}</router-link>
          </li>
          <li>
            <a href="https://eurocosmetics.com.tm/" target="_blank" class="menu-link text-[16px] font-normal uppercase" @click="toggleMenu">{{ $t('menu.products') }}</a>
          </li>
          <li>
            <router-link to="/about" class="menu-link text-[16px] font-normal uppercase" @click="toggleMenu">{{ $t('menu.about') }}</router-link>
          </li>
          <li>
            <router-link to="/contact" class="menu-link text-[16px] font-normal uppercase" @click="toggleMenu">{{ $t('menu.contacts') }}</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      currentLanguage: this.$i18n.locale,
      isMenuOpen: false,
    };
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.currentLanguage;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
</style>