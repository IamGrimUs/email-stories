<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script>
import './CallToAction.css'
import { reactive, computed } from 'vue'

export default {
  name: 'CallToAction',

  props: {
    label: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'desktop',

      validator: function (value) {
        return ['mobile', 'desktop'].indexOf(value) !== -1
      }
    },
    buttonType: {
      type: String,
      required: true,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'secondary', 'tertiary', 'login'].indexOf(value) !== -1
      }
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        'storybook-button': true,
        [`storybook-button--${props.size || 'desktop'}`]: true,
        [`storybook-button--${props.buttonType || 'primary'}`]: true
      })),
      onClick() {
        emit('click')
      }
    }
  }
}
</script>
