import ThemeLayoutGrids from './ThemeLayoutGrids.vue'

export default {
  title: 'Theme/LayoutGrids',
  component: ThemeLayoutGrids,
  tags: ['autodocs'],
  argTypes: {
    numOfColumns: {
      control: {
        type: 'select',
        required: true
      },
      options: [0, 1, 2, 3, 4]
    }
  }
}

export const FullWidth = {
  args: {
    numOfColumns: 0
  }
}
export const ColumnOf1 = {
  args: {
    numOfColumns: 1
  }
}
export const ColumnOf2 = {
  args: {
    numOfColumns: 2
  }
}
export const ColumnOf3 = {
  args: {
    numOfColumns: 3
  }
}
export const ColumnOf4 = {
  args: {
    numOfColumns: 4
  }
}
