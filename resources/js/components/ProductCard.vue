<template>
    <div class="relative overflow-hidden">
      <div class="relative">
        <img :src="image" :alt="title" class="w-full block">
        <div class="absolute inset-0 bg-gradient-to-b from-[rgba(10,3,24,0.2)] via-[rgba(17,12,35,0.8)] to-[#15112A] z-10"></div>
      </div>
      <div class="absolute bottom-2 left-2 right-2 z-20 text-center text-[var(--gold)]">
        <h3 class="mb-1 text-[20px]">{{ title }}</h3>
        <p class="text-[20px] mb-2">{{ description }}</p>
        <button class="bg-[#F0C8E0] text-[var(--gold)] text-[20px] px-5 py-2 transition-colors duration-300 hover:bg-[var(--gold)] hover:text-[#F0C8E0]">
          Подробнее
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      title: {
        type: String,
        default: 'Название продукта'
      },
      description: {
        type: String,
        default: 'Описание продукта'
      },
      image: {
        type: String,
        default: '/img/right.jpeg'
      }
    }
  }
  </script>