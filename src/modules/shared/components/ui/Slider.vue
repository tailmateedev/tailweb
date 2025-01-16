<template lang="">
    <div>
        <div class="flex flex-row w-full">
            <button class="border-solid focus:outline-none border-r-[#11113A] border-r-[23px] border-y-transparent border-y-[17px] border-l-0" @click.prevent="prev" ></button>
            <template  v-for="(element,index) in countElements" :key="index" >
                <button @click.prevent="select" :id="index"
                :class="`rounded-full size-5 mx-2 my-2 focus:outline-none bg-${idCard === index ? 'black' : 'gray-400'}`">
                </button>
            </template>
            <button class="border-solid focus:outline-none border-l-[#11113A] border-l-[23px] border-y-transparent border-y-[17px] border-r-0" @click.prevent="next" ></button>
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
        }
    },
    setup(props) {
        const { idCard } = toRefs(props);
        return {
            idCard
        }
    }
}
</script>
<style lang="">

</style>