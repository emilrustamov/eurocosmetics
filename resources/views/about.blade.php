<!-- filepath: /d:/OSPanel/domains/eurocosmetics/resources/views/about.blade.php -->
<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <title>О нас</title>
  @vite(['resources/css/app.css', 'resources/js/app.js'])
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  <div id="app">
    <header-component></header-component>

    <!-- Banner Section with centered text -->
    <section class="relative w-full h-screen max-h-[1200px] overflow-hidden animate-block">
      <img src="/img/about-banner.jpeg" alt="Banner" 
           class="w-full h-full object-cover object-center animate-image">
      <div class="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-white lg:text-[80px] text-4xl font-light uppercase tracking-[2px] animate-text"
            style="font-family: 'Mont', sans-serif;">
          О нас
        </h1>
      </div>
    </section>

    <!-- Section: Image left & animated numbers right -->
    <section class="py-20 bg-white">
      <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <!-- Left: Image (aligned left) -->
        <div class="md:w-1/2">
          <img src="/img/about-left.jpg" alt="About Image Left" class="w-full object-cover">
        </div>
        <!-- Right: Vertical numbers -->
        <div class="md:w-1/2 flex flex-col items-start space-y-6">
          <div class="text-4xl font-bold text-[#1E1927] animate-number" data-target="1000">0+</div>
          <div class="text-4xl font-bold text-[#1E1927] animate-number" data-target="20000">0+</div>
          <div class="text-4xl font-bold text-[#1E1927] animate-number" data-target="4">0</div>
          <p class="text-lg text-gray-700 mt-4">товаров, клиентов, магазинов</p>
        </div>
      </div>
    </section>

    <!-- Section: Text left & image right -->
    <section class="py-20 bg-[#F8ECF3]">
      <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <!-- Left: Text block -->
        <div class="md:w-1/2">
          <h2 class="text-4xl font-bold text-[#1E1927] mb-4">Наша история</h2>
          <p class="text-lg text-gray-700">
            Мы начинали как небольшая компания, а благодаря инновациям, качеству и преданности клиентов, выросли 
            в лидера отрасли. Наша история – история успеха и постоянного развития.
          </p>
        </div>
        <!-- Right: Image block -->
        <div class="md:w-1/2">
          <img src="/img/about-right.jpg" alt="Our History" class="w-full object-cover">
        </div>
      </div>
    </section>

    <!-- Centered banner section -->
    <section class="py-20 bg-[#1E1927]">
      <div class="container mx-auto text-center">
        <h2 class="text-white text-4xl font-bold mb-4">Мы – лидеры в своей сфере</h2>
        <p class="text-white text-lg">
          Наша миссия – обеспечить лучшее качество и инновации для наших клиентов.
        </p>
      </div>
    </section>

    <!-- Social circles component -->
    <social-circles></social-circles>

    <footer-component></footer-component>
  </div>

  <script>
    // Simple running number animation for counters
    document.addEventListener('DOMContentLoaded', () => {
      const counters = document.querySelectorAll('.animate-number');
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText.replace('+','');
          const increment = target / 200;
          if(count < target) {
            counter.innerText = Math.ceil(count + increment) + (target === 4 ? '' : '+');
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target + (target === 4 ? '' : '+');
          }
        }
        updateCount();
      });
    });
  </script>
</body>

</html>