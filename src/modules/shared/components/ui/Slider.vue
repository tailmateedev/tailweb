<template lang="">
    <div>
        <div class="flex flex-row w-full">
            <button class="border-solid focus:outline-none border-r-[23px] border-y-transparent border-y-[17px] border-l-0"
                @click.prevent="prev" :class="` border-r-${colorBg} `"></button>
            <template  v-for="(element,index) in countElements" :key="index" >
                <button @click.prevent="select" :id="index"
                :class="`rounded-full size-5 mx-2 my-2 focus:outline-none ${idCard === index ? `${colorFocus}` : `${colorInactive}`}`">
                </button>
            </template>
            <button class="border-solid focus:outline-none border-l-[23px] border-y-transparent border-y-[17px] border-r-0" 
                @click.prevent="next" :class="` border-l-${colorBg} `"></button>
        </div>
    </div>
</template>
<script>
import { toRefs } from 'vue';
export default {
    props: {
        countElements: {
            type: Number,
            required: true,
            default: 0
        },
        select: {
            type: Function,
            required: true
        },
        prev: {
            type: Function,
            required: true
        },
        next:{
            type: Function,
            required: true
        },
        idCard:{
            type: Number,
            required: true
        },
        colorBg:{
            type: String,
            required: true,
            default: "slate-700"
        },
        colorFocus:{
            type: String,
            required: true,
            default: "bg-black"
        },
        colorInactive:{
            type: String,
            required: true,
            default: "#ffffff"
        }
    },
    setup(props) {
        const { idCard,colorBg, colorFocus, colorInactive } = toRefs(props);
        return {
            idCard,
            colorBg,
            colorFocus,
            colorInactive
        }
    }
}
</script>
<style lang="">

</style>