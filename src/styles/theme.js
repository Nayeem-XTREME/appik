const breakpoints = ["576px", "768px", "992px", "1200px"]

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export default {
  colors: {
    highlight: "#FFC600",
    fill: "#4E7BCA",
    gray: "#979797",
    defaultText: "#666666",
    headerText: "#323230"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  breakpoints,
}
