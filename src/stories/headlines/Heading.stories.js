import Heading from './Heading-text.vue';

export default {
    title: 'Shaw+Scott/Headlines',
    component: Heading,
    argTypes: {
      variant: {
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        control: { type: 'radio' },
      },
    },
  };

  export const Headline = {
    args: {
      label: 'Example headline',
      variant: 'h1',
    },
  }
    export const Headline2 = {
      args: {
        label: 'Example headline',
        variant: 'h2',
      },
  };