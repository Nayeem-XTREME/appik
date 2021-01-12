const breakpoints = ["576px", "768px", "992px", "1200px"]

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export default {
  name: "light",
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: "14px",
    lineHeight: 1.65,
    fontWeight: "400",
    h1: {
      fontSize: "50px",
      lineHeight: 1.65,
      fontWeight: 700,
      fontFamily: '"Montserrat", sans-serif',
    },
    h2: {
      fontSize: "36px",
      lineHeight: 1.65,
      fontWeight: 700,
      fontFamily: '"Montserrat", sans-serif',
    },
    h3: {
      fontSize: "30px",
      lineHeight: 1.65,
      fontWeight: 700,
      fontFamily: '"Montserrat", sans-serif',
    },
    h4: {
      fontSize: "24px",
      lineHeight: 1.65,
      fontWeight: 700,
      fontFamily: '"Montserrat", sans-serif',
    },
    h5: {
      fontSize: "20px",
      lineHeight: 1.65,
      fontWeight: 700,
      fontFamily: '"Montserrat", sans-serif',
    },
    h6: {
      fontSize: "1rem",
      lineHeight: 1.65,
      fontWeight: 700,
      fontFamily: '"Montserrat", sans-serif',
    },
    p: {
      fontSize: "1rem",
      lineHeight: 1.65,
      fontWeight: 400,
      fontFamily: '"Montserrat", sans-serif',
    },
    body: {
      fontSize: "1rem",
      lineHeight: 1.65,
      fontWeight: 400,
      fontFamily: '"Montserrat", sans-serif',
    }
  },
  colors: {
    //Custom
    highlight: "#FFC600",
    fill: "#4E7BCA",
    gray: "#979797",
    defaultText: "#666666",
    headerText: "#323230"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  breakpoints,
}
