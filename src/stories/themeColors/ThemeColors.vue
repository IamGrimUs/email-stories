<template>
  <h2>{{ sectionHeadline }}</h2>
  <section>
    <div v-for="n in numberOfColors" :key="n">
      <p>{{ backgroundColor[n - 1].colorName.split('-').slice(1).join('-') }}</p>
      <p>{{ backgroundColor[n - 1].colorValue }}</p>
      <div
        class="box"
        :style="{ backgroundColor: `var(--${backgroundColor[n - 1].colorName})` }"
      ></div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  numberOfColors: Number,
  sectionHeadline: String,
  backgroundColor: Array
})
</script>

<style scoped>
@import './ThemeColors.css';
</style>
