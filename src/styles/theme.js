const breakpoints = ['0px', '600px', '960px', '1280px']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export default {
  colors: {
    white: '#FFF',
    black: '#000',
    highlight: '#FFC600',
    fill: '#4E7BCA',
    gray: '#979797',
    gray2: '#E8E8E8',
    gray3: '#D1D1D1',
    lightGray: '#F0F0F0',
    veryLightGray: '#D8D8D8',
    defaultText: '#666666',
    headerText: '#323230',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: [10.5, 12, 14, 15, 18, 20, 22.5, 27, 37.5],
  breakpoints,
}
