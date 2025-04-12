<template>
  <header class="bg-[#f8f9fa] sticky top-0 shadow-md z-99">
    <link rel="stylesheet" href="/css/all.min.css">
    <div class="container mx-auto px-4 flex items-center justify-between">
      <div class="md:hidden flex items-center">
      <button @click="toggleMenu" class="text-[var(--gold)] focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      </div>
      <div class="logo">
      <span class="text-[24px] text-[var(--gold)] font-bold uppercase tracking-[8px] p-4">
        EUROCOSMETICS
      </span>
      </div>
      <!-- Десктопное меню -->
      <nav class="menu flex-1 hidden md:flex justify-center">
      <ul class="flex justify-center space-x-10 text-[var(--gold)]">
        <li>
        <router-link to="/" class="menu-link text-[16px] font-normal uppercase">{{ $t('menu.home') }}</router-link>
        </li>
        <li>
        <a href="https://eurocosmetics.com.tm/" target="_blank"
          class="menu-link text-[16px] font-normal uppercase">{{ $t('menu.products') }}</a>
        </li>
        <li>
        <router-link to="/about" class="menu-link text-[16px] font-normal uppercase">{{ $t('menu.about')
          }}</router-link>
        </li>
        <li>
        <router-link to="/contact" class="menu-link text-[16px] font-normal uppercase">{{ $t('menu.contacts')
          }}</router-link>
        </li>
      </ul>
      </nav>
      <!-- Блок с выбором языка и контактной информацией (только для десктопа) -->
      <div class="hidden md:flex items-center ml-auto gap-6">
      <select v-model="currentLanguage" @change="changeLanguage" class="bg-transparent text-[var(--gold)] font-bold">
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="tm">Türkmen</option>
      </select>
      <div class="flex items-center gap-4">
        <a href="tel:+99363593663" class="flex items-center gap-1 text-[var(--gold)] hover:underline">
        <i class="fa fa-phone"></i>
        <span>+99363593663</span>
        </a>
        <a href="mailto:sales@eurocosmeticstm.com" class="flex items-center gap-1 text-[var(--gold)] hover:underline">
        <i class="fa fa-envelope"></i>
        <span>sales@eurocosmeticstm.com</span>
        </a>
        <a href="https://www.instagram.com/eurocosmetics.tm/?hl=ru" target="_blank" rel="noopener noreferrer"
        class="flex items-center gap-1 text-[var(--gold)] hover:underline">
        <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@eurocosmetics.tm" target="_blank" rel="noopener noreferrer"
        class="flex items-center gap-1 text-[var(--gold)] hover:underline">
        <i class="fab fa-tiktok"></i>
        </a>
      </div>
      </div>
    </div>
    <!-- Мобильное меню -->
    <transition name="slide">
      <div v-if="isMenuOpen"
        class="fixed inset-y-0 right-0 w-4/5 bg-[#f8f9fa] z-50 p-4 border-l-2 border-[var(--gold)]">
        <div class="flex justify-between mb-4">
          <div class="w-full">
            <select v-model="currentLanguage" @change="changeLanguage"
              class="bg-transparent text-[var(--gold)] font-bold">
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="tm">Türkmen</option>
            </select>
          </div>
          <button @click="toggleMenu" class="text-[var(--gold)] focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul class="flex flex-col space-y-4 text-[var(--gold)]">
          <li>
            <router-link to="/" class="menu-link text-[16px] font-normal uppercase" @click="toggleMenu">
              {{ $t('menu.home') }}
            </router-link>
          </li>
          <li>
            <a href="https://eurocosmetics.com.tm/" target="_blank" class="menu-link text-[16px] font-normal uppercase"
              @click="toggleMenu">
              {{ $t('menu.products') }}
            </a>
          </li>
          <li>
            <router-link to="/about" class="menu-link text-[16px] font-normal uppercase" @click="toggleMenu">
              {{ $t('menu.about') }}
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="menu-link text-[16px] font-normal uppercase" @click="toggleMenu">
              {{ $t('menu.contacts') }}
            </router-link>
          </li>
        </ul>
        <!-- Контактная информация в мобильном меню -->
        <div class="mt-6">
          <a href="tel:+99363593663" class="flex items-center gap-2 text-[var(--gold)] hover:underline">
            <i class="fa fa-phone"></i> +99363593663
          </a>
          <a href="mailto:sales@eurocosmeticstm.com"
            class="flex items-center gap-2 text-[var(--gold)] hover:underline mt-2">
            <i class="fa fa-envelope"></i> sales@eurocosmeticstm.com
          </a>
          <div class="flex items-center gap-4 mt-2">
            <a href="https://www.instagram.com/eurocosmetics.tm/?hl=ru" target="_blank" rel="noopener noreferrer"
              class="text-[var(--gold)] hover:underline flex items-center">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@eurocosmetics.tm" target="_blank" rel="noopener noreferrer"
              class="text-[var(--gold)] hover:underline flex items-center">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>