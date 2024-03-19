<template>
  <span>{{ `${spacing}px` }}</span>
  <div :class="classes" :style="style"></div>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'CallToAction',

  props: {
    spacing: {
      type: Number
    }
  },
  setup(props) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        'storybook-spacing': true,
        [`storybook-button--${props.spacing || 10}`]: true
      })),
      style: computed(() => ({
        height: `${props.spacing}px`
      }))
    }
  }
}
</script>

<style scoped>
@import './ThemeSpacing.css';
span {
  font-weight: 700;
  display: inline-block;
  margin-top: 0.25em;
}
</style>
