<template>
    <div :style="{
        height: containerHeight,
        overflow: 'hidden',
        position: 'relative'
    }" ref="container">
        <div :style="{
            display: 'inline-block',
            height: '100vh',
            transform: computedTransform,
            position: computedPosition,
            bottom: 0
        }" ref="displayedWrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { nextTick } from 'vue'
const props = defineProps({
    displayed: null,
    height: String
})

const container = ref(null)
const displayedWrapper = ref(null)

const containerHeight = ref('0px')
const wrapperWidth = ref(0)
const progress = ref(0)

const updateProgress = () => {
    const scrollTop = document.documentElement.scrollTop
    const containerTop = container.value.offsetTop
    const containerHeightNumber = container.value.offsetHeight
    const innerHeight = window.innerHeight

   

    const newProgress =
        ((scrollTop - containerTop) * 100) / (containerHeightNumber - innerHeight)

    progress.value = newProgress
}

const computedTransform = computed(() => {
    const innerWidth = window.innerWidth
    const ww = wrapperWidth.value
    const maxTranslate = (100 * (ww - innerWidth)) / ww
    const currentTranslate = progress.value * ((ww - innerWidth) / ww)

    if (progress.value < 0) return 'translateX(0%)'
    if (progress.value > 100) return `translateX(-${maxTranslate}%)`
    return `translateX(-${currentTranslate}%)`
})

//計算畫面開始滾之前不動，開始滾動之後固定位置
const computedPosition = computed(() => {
    if (progress.value < 0) return 'static'
    if (progress.value <= 100) return 'fixed'
    return 'absolute'
})

onMounted(async () => {
    const innerHeight = window.innerHeight
    const innerWidth = window.innerWidth
    const dw = displayedWrapper.value.offsetWidth

    wrapperWidth.value = dw

    if (!props.height) {
        containerHeight.value = `${(innerHeight * dw) / innerWidth}px`
    } else {
        containerHeight.value = props.height
    }

    await nextTick() // 等畫面渲染完畢!!!

    window.scrollTo(0, 1)
    requestAnimationFrame(() => {
    updateProgress()
  })
    window.addEventListener('scroll', updateProgress)
})

onUnmounted(() => {
    window.removeEventListener('scroll', updateProgress)
})
</script>