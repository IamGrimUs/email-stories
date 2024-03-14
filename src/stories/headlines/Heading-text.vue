<template>
  <h1 v-if="variant === 'h1'">{{ label }}</h1>
  <h2 v-else-if="variant === 'h2'">{{label}}</h2>
  <h3 v-else-if="variant === 'h3'">{{label}}</h3>
  <h4 v-else-if="variant === 'h4'">{{label}}</h4>
  <h5 v-else-if="variant === 'h5'">{{label}}</h5>
  <h6 v-else>{{label}}</h6>
</template>

<script>
export default {
  name: 'Heading-text',

  props: {
    label: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      required: true,
    },
  },
};
</script>