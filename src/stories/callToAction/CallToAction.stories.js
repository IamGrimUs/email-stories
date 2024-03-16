import Button from './CallToAction.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
    buttonType: {
      control: {
        type: 'select'
      },
      options: ['primary', 'secondary', 'tertiary', 'login']
    },
    size: {
      control: {
        type: 'select'
      },
      options: ['desktop', 'mobile']
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    buttonType: 'primary',
    label: 'Call to action',
    size: 'desktop'
  }
}

export const Secondary = {
  args: {
    buttonType: 'secondary',
    label: 'call to action',
    size: 'desktop'
  }
}

export const Tertiary = {
  args: {
    buttonType: 'tertiary',
    label: 'call to action',
    size: 'desktop'
  }
}

export const Login = {
  args: {
    buttonType: 'login',
    label: 'call to action',
    size: 'desktop'
  }
}

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button'
//   }
// }

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button'
//   }
// }
