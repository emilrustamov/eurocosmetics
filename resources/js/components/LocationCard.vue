<template>
    <div class="flex flex-col items-center bg-white p-4 mb-5 rounded shadow mx-auto animate-block">
        <div class="mb-2 mx-auto w-28 h-28 ">
            <img :src="image" alt="" class="mx-auto block animate-image">
        </div>
        <div class="text-center text-[var(--gold)] ">
            <h2 class="mb-2 text-[26px] tracking-[5px] uppercase py-5 animate-text">{{ title }}</h2>
            <p class="lg:w-1/2 sm:w-3/4 mx-auto text-justify pb-5 animate-text">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LocationCard',
    props: {
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>
