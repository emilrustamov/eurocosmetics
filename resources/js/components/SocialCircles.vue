<template>
  <section class="lg:py-50 py-5 bg-gradient-to-b from-[#F8ECF3] to-[#F0C8E0]">
    <div class="container circle-container mx-auto text-center relative lg:h-[650px] h-auto flex items-center justify-center">
      <div class="relative z-10">
        <div class="text-4xl font-bold text-[var(--gold)] mb-4 tracking-[5px]">
          {{ $t("social.followUs") }} 
          <span id="social-text" class="text-2xl inline"></span>
        </div>
      </div>
      <!-- Плавающие картинки вокруг текста -->
      <img :src="'/img/circle1.jpg'" alt="Image 1" class="absolute animate-float rounded-3xl hidden md:block"
           style="top:65%; left:15%; transform: translate(-50%, -50%); z-index:10; max-width:400px; height:200px; width:100%; object-fit:cover">
      <img :src="'/img/circle4.jpg'" alt="Image 4" class="absolute animate-float rounded-3xl hidden md:block"
           style="top:55%; right:10%; transform: translate(50%, -50%); z-index:10; max-width:250px; height:150px; width:100%; object-fit:cover">
      <img :src="'/img/circle2.jpg'" alt="Image 3" class="w-30 h-30 absolute animate-float rounded-3xl hidden md:block"
           style="bottom:55%; left:25%; transform: translate(-50%, 50%); z-index:10;">
      <img :src="'/img/circle3.jpg'" alt="Image 4" class="w-50 h-50 absolute animate-float rounded-3xl hidden md:block"
           style="bottom:60%; right:20%; transform: translate(50%, 50%); z-index:10;">
    </div>
  </section>
</template>

<script>
export default {
  name: 'SocialCircles',
  data() {
    return {}
  },
  mounted() {
    // The text options and corresponding hyperlinks
    const texts = ["Telegram", "Instagram", "TikTok"];
    const links = {
      "Telegram": "https://t.me",
      "Instagram": "https://instagram.com",
      "TikTok": "https://www.tiktok.com"
    };
    let textIndex = 0;
    let charIndex = 0;
    const element = document.getElementById("social-text");
    const typingDelay = 150;
    const erasingDelay = 75;
    const newTextDelay = 1500;

    function type() {
      const currentText = texts[textIndex];
      if (charIndex < currentText.length) {
        // Update innerHTML, wrapping the current text in an anchor tag with the new style class.
        element.innerHTML = `<a href="${links[currentText]}" target="_blank" class="social-link">${currentText.substring(0, charIndex + 1)}</a>`;
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      const currentText = texts[textIndex];
      if (charIndex > 0) {
        element.innerHTML = `<a href="${links[currentText]}" target="_blank" class="social-link">${currentText.substring(0, charIndex - 1)}</a>`;
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, typingDelay);
      }
    }
    type();
  }
}
</script>

<style scoped>
/* Новый стиль для ссылок, чтобы текст был белым */
.social-link {
  color: #ffffff !important;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .animate-float {
    display: none;
  }
}
</style>