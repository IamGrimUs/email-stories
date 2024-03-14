<script setup>
defineProps({
  numberOfColors: Number,
  sectionHeadline: String,
  backgroundColor: Array
})
</script>
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
<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2%;
}
.box {
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 158px;
  height: 100px;
  margin: var(--spacing-unit) 0 var(--spacing-unit-x4);
}
</style>
