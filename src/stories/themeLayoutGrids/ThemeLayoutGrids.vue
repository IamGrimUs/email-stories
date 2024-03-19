<template>
  <section class="grid-container">
    <div class="column-container">
      <template v-if="numOfColumns === 0 || numOfColumns === 1">
        <div :class="classes">
          {{ numOfColumns }}
        </div>
      </template>
      <template v-if="numOfColumns === 2">
        <div :class="classes">
          {{ numOfColumns }}
        </div>
        <div class="column-spacer"></div>
        <div :class="classes">
          {{ numOfColumns }}
        </div>
      </template>
      <template v-if="numOfColumns === 3">
        <div :class="classes">
          {{ numOfColumns }}
        </div>
        <div class="column-spacer"></div>
        <div :class="classes">
          {{ numOfColumns }}
        </div>
        <div class="column-spacer"></div>
        <div :class="classes">
          {{ numOfColumns }}
        </div>
      </template>
      <template v-if="numOfColumns === 4">
        <div class="column-spacer"></div>
        <div :class="classes">
          {{ numOfColumns }}
        </div>
        <div class="column-spacer"></div>
        <div :class="classes">
          {{ numOfColumns }}
        </div>
        <div class="column-spacer"></div>
        <div :class="classes">
          {{ numOfColumns }}
        </div>
        <div class="column-spacer"></div>
        <div :class="classes">
          {{ numOfColumns }}
        </div>
        <div class="column-spacer"></div>
      </template>
    </div>
  </section>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  props: ['numOfColumns'],
  setup(props) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        [`column-${props.numOfColumns || 0}`]: true
      }))
    }
  }
}
</script>

<style scoped>
@import './ThemeLayoutGrids.css';
</style>
