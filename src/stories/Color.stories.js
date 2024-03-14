import ColorBlock from '../components/ColorBlock.vue'

export default {
  title: 'Example/Colors',
  component: ColorBlock,
  parameters: {
    // layout: 'centered',
    docs: {
      story: {
        iframeHeight: 700
      }
    }
  }
}

export const Primary = {
  args: {
    sectionHeadline: 'Primary',
    backgroundColor: [
      { colorName: 'primary-black', colorValue: '#000001' },
      { colorName: 'primary-email-green', colorValue: '#000001' },
      { colorName: 'primary-web-primary-green', colorValue: '#000001' },
      { colorName: 'primary-white', colorValue: '#000001' },
      { colorName: 'primary-grey-lightest', colorValue: '#000001' },
      { colorName: 'primary-gray-background', colorValue: '#000001' }
    ],
    numberOfColors: 6
  }
}

export const Secondary = {
  args: {
    sectionHeadline: 'Secondary',
    backgroundColor: [
      { colorName: 'secondary-green', colorValue: '#45a821' },
      { colorName: 'secondary-violet', colorValue: '#070540' },
      { colorName: 'secondary-yellow-medium', colorValue: '#f1c043' },
      { colorName: 'secondary-yellow-light', colorValue: ' #f9e48a' },
      { colorName: 'secondary-blue-medium', colorValue: '#b9d1e3' },
      { colorName: 'secondary-blue-light', colorValue: '#e8f289' },
      { colorName: 'secondary-orange-medium', colorValue: '#ee7623' },
      { colorName: 'secondary-orange-light', colorValue: '#ff8935' }
    ],
    numberOfColors: 8
  }
}

export const Neutral = {
  args: {
    sectionHeadline: 'Neutral',
    backgroundColor: [
      { colorName: 'neutral-beige', colorValue: '#e5c598' },
      { colorName: 'neutral-gray-light', colorValue: '#d8d8d8' },
      { colorName: 'neutral-gray-medium', colorValue: '#bfbfbf' },
      { colorName: 'neutral-gray', colorValue: '#808080' },
      { colorName: 'neutral-gray-dark', colorValue: '#595959' },
      { colorName: 'neutral-gray-darkest', colorValue: '#3f4143' }
    ],
    numberOfColors: 6
  }
}
export const GreenScreen = {
  args: {
    sectionHeadline: 'Green Screens',
    backgroundColor: [
      { colorName: 'green-screen-50', colorValue: '#e8f8ec' },
      { colorName: 'green-screen-100', colorValue: '#c7eed1' },
      { colorName: 'green-screen--200-300', colorValue: '#79da94' },
      { colorName: 'green-screen-400', colorValue: '#40d271' },
      { colorName: 'green-screen-500', colorValue: '#00c859' },
      { colorName: 'green-screen-600', colorValue: '#2ab75b' },
      { colorName: 'green-screen-700', colorValue: '#1da44f' },
      { colorName: 'green-screen-800', colorValue: '#129244' },
      { colorName: 'green-screen-900', colorValue: '#007230' },
      { colorName: 'green-screen-950', colorValue: '#007324' }
    ],
    numberOfColors: 10
  }
}

export const IllustrationOrange = {
  args: {
    sectionHeadline: 'Orange',
    backgroundColor: [
      { colorName: 'illustration-orange-200', colorValue: '#ffc6ab' },
      { colorName: 'illustration-orange-300', colorValue: '#ff9974' },
      { colorName: 'illustration-orange-400', colorValue: '#e97c3d' }
    ],
    numberOfColors: 3
  }
}

export const IllustrationPurple = {
  args: {
    sectionHeadline: 'Purple',
    backgroundColor: [
      { colorName: 'illustration-purple-0', colorValue: '#baa6fe' },
      { colorName: 'illustration-purple-100', colorValue: '#c6baee' },
      { colorName: 'illustration-purple-200', colorValue: '#aa96ee' },
      { colorName: 'illustration-purple-300', colorValue: '#8c80ff' },
      { colorName: 'illustration-purple-400', colorValue: '#aa96ee' }
    ],
    numberOfColors: 5
  }
}

export const IllustrationBlue = {
  args: {
    sectionHeadline: 'Blue',
    backgroundColor: [
      { colorName: 'illustration-blue-100', colorValue: '#deeeff' },
      { colorName: 'illustration-blue-200', colorValue: '#5cbfea' }
    ],
    numberOfColors: 2
  }
}
