import ThemeSpacing from './ThemeSpacing.vue'

export default {
  title: 'Theme/Spacing',
  component: ThemeSpacing,
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      control: {
        type: 'select'
      },
      options: [10, 20, 30, 40]
    }
  }
}

export const Spacing10 = {
  args: {
    spacing: 10
  }
}
export const Spacing20 = {
  args: {
    spacing: 20
  }
}
export const Spacing30 = {
  args: {
    spacing: 30
  }
}
export const Spacing40 = {
  args: {
    spacing: 40
  }
}
