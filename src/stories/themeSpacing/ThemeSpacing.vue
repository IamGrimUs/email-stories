<template>
  <div :class="classes" :style="style">{{ `${spacing}px` }}</div>
</template>

<script>
import './ThemeSpacing.css'
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
        height: `${props.spacing}px`,
        fontSize: `${props.spacing / 2}px`
      }))
    }
  }
}
</script>
