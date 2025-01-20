<template>
    <div class="flex flex-row-reverse transition-transform duration-1000 ease-out h-screen">
        <div v-for="(image, index) in images" :key="index"
            :class="index == currentIndex ? 'h-auto w-full bg-cover bg-center bg-no-repeat' 
                : 'h-0 w-0'"
            :style="{ backgroundImage: `url(${image})`, transitionDuration: '1s', transitionTimingFunction: 'ease-in-out'}">
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        images: {
            type: Array,
            required: true,
            default: []
        }
    },
    mounted() {
        this.interval();
    },
    methods: {
        interval() {
            this.intervalId = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
            }, 8000);
        },
    },
    data() {
        const currentIndex = ref(0);

        return {

            currentIndex,
        }
    }
}
</script>

<style scoped>

</style>