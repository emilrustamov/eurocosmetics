<template>
  <footer class="bg-[#1E1927] text-white text-center">
    <div class="mb-3 py-10">
      <h2
        class="underline decoration-2 underline-offset-5 text-xl font-semibold uppercase tracking-wider text-[#DFABCA] mb-3">
        Eurocosmetics
      </h2>
    </div>

    <nav class="mb-3">
      <!-- Мобильное меню -->
      <ul class="flex justify-center gap-6 text-[20px] py-10 md:hidden">
        <li>
          <a href="#home" class="text-[#DFABCA] hover:underline">
            <i class="fa fa-home"></i>
          </a>
        </li>
        <li>
          <a href="#about" class="text-[#DFABCA] hover:underline">
            <i class="fa fa-info-circle"></i>
          </a>
        </li>
        <li>
          <a href="#products" class="text-[#DFABCA] hover:underline">
            <i class="fa fa-boxes"></i>
          </a>
        </li>
        <li>
          <a href="#contact" class="text-[#DFABCA] hover:underline">
            <i class="fa fa-phone-alt"></i>
          </a>
        </li>
      </ul>

      <!-- Десктопное меню -->
      <ul class="hidden md:flex justify-center gap-6 text-[20px] py-10">
        <li>
          <a href="/" class="text-[#DFABCA] hover:underline">{{ $t("footer.home") }}</a>
        </li>
        <li>
          <a href="/about" class="text-[#DFABCA] hover:underline">{{ $t("footer.about") }}</a>
        </li>
        <li>
          <a href="https://eurocosmetics.com.tm/" class="text-[#DFABCA] hover:underline">{{ $t("footer.products") }}</a>
        </li>
        <li>
          <a href="/contact" class="text-[#DFABCA] hover:underline">{{ $t("footer.contacts") }}</a>
        </li>
      </ul>
    </nav>

    <!-- Блок с телефоном, email и соцсетями -->
    <div class="mb-6">
      <div class="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
        <!-- Телефон -->
        <a href="tel:+99363593663" class="text-[#DFABCA] hover:underline flex items-center gap-2">
          <i class="fa fa-phone"></i> +99363593663
        </a>
        <!-- Email -->
        <a href="mailto:sales@eurocosmeticstm.com" class="text-[#DFABCA] hover:underline flex items-center gap-2">
          <i class="fa fa-envelope"></i> sales@eurocosmeticstm.com
        </a>
        <!-- Instagram -->
        <a href="https://www.instagram.com/eurocosmetics.tm/?hl=ru"
           class="text-[#DFABCA] hover:underline flex items-center gap-2" 
           target="_blank"
           rel="noopener noreferrer">
          <i class="fab fa-instagram"></i>
        </a>
        <!-- TikTok (требует иконку 'fab fa-tiktok' в новой версии Font Awesome) -->
        <a href="https://www.tiktok.com/@eurocosmetics.tm"
           class="text-[#DFABCA] hover:underline flex items-center gap-2"
           target="_blank"
           rel="noopener noreferrer">
          <i class="fab fa-tiktok"></i>
        </a>
      </div>
    </div>

    <div class="border-t border-[#332864] mt-3 pt-3 relative flex items-center justify-center footer-copy h-[150px]">
      <p class="text-sm px-4 flex gap-4 opacity-50 text-[14px] z-999">
        <a href="https://ltm.studio" class="text-[#DFABCA] hover:underline">{{ $t("footer.poweredBy") }}</a>
        <span class="text-[#DFABCA]">&copy; {{ new Date().getFullYear() }}</span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer-copy {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
}

.footer-copy::before,
.footer-copy::after {
  content: '';
  display: inline-block;
  background-image: url('/img/border-foot.png');
  background-repeat: no-repeat;
  width: 100%;
  height: 120px;
  vertical-align: middle;
}

.footer-copy::before {
  margin-right: 4px;
  position: absolute;
  left: 0;
  bottom: 0;
}

.footer-copy::after {
  transform: rotate(180deg);
  margin-left: 4px;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
