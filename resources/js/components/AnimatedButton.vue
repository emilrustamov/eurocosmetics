<template>
    <a :href="link" class="animated-border-button px-4">
        {{ label }}
        <span class="border top"></span>
        <span class="border left"></span>
        <span class="border bottom"></span>
        <span class="border right"></span>
    </a>
</template>

<script>
export default {
    name: 'AnimatedButton',
    props: {
        link: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.animated-border-button {
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    display: inline-flex;
    align-items: center;
}
</style>