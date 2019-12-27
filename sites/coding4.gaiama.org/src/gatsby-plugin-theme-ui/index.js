/**
 * https://www.schemecolor.com/fresh-pineapple.php
 * ripe pineapple: #ffdf7a from https://www.dunnedwards.com/colors/browser/de5389
 */

// const pineapple = {
//   text: 'hsl(183, 22%, 67%)',
//   background: 'hsl(90, 10%, 16%)',
//   primary: 'hsl(48, 62%, 64%)',
//   secondary: 'hsl(28, 63%, 48%)',
//   highlight: 'hsl(4, 47%, 51%)',
//   purple: 'hsl(290, 100%, 80%)',
//   muted: 'hsla(230, 20%, 0%, 20%)',
//   gray: 'hsl(210, 50%, 60%)',
//   codeLineHighlight: `hsla(0, 0%, 50%, 0.5)`,
// }

// const watermelon = {
//   text: '#000',
//   background: '#fff',
//   primary: `hsl(0, 91%, 65%)`,
// }
const blank = {
  primary: '#000',
  text: '#000',
  background: '#fff',
  secondary: '#000',
  tertiary: '#000',
  highlight: '#000',
  muted: '#000',
  gray: '#000',
  codeLineHighlight: `hsla(0, 0%, 50%, 0.5)`,
}
const pineapple = {
  primary: '#fed308',
  text: '#000',
  background: '#e8e8e8',
  secondary: '#105326',
  tertiary: '#309f57',
  highlight: '#ffa700',
  muted: 'hsla(230, 20%, 0%, 20%)',
  gray: 'hsl(210, 50%, 60%)',
  codeLineHighlight: `hsla(0, 0%, 50%, 0.5)`,
}
const pineapple2 = {
  primary: '#7BC820',
  text: '#fff',
  background: '#fed308',
  secondary: '#105326',
  tertiary: '#309f57',
  highlight: '#ffa700',
}
// based of https://avemateiu.com/color-palettes/color-palette-213/
const pineapple3 = {
  heading: `#fadc44`,
  primary: `#f0c20a`,
  text: `#4a5e26`,
  background: `#d9d8c2`,
  muted: `#8d6011`,
}
const pineapple4 = {
  heading: `#fadc44`,
  primary: `#f0c20a`,
  background: `#4a5e26`,
  text: `#d9d8c2`,
  muted: `#8d6011`,
}

const watermelon = {
  text: '#000',
  background: '#fff',
  primary: `hsl(0, 91%, 65%)`,
}

const pineappleNew = {
  text: `#000`,
  background: `#fed308`,
  background2: `#e8e8e8`,
  primary: `#105326`,
  // secondary: `#309f57`,
  accent: `#fff`,
  muted: `#309f57`,
}

const grid = {
  display: `grid`,
  gridTemplateColumns: [
    `
        0
        0
        0
        20px
        minmax(auto, 90vw)
        20px
        0
        0
        0`,
    null,
    null,
    `
        1fr
        minmax(auto, 7rem)
        minmax(auto, 5rem)
        20px
        minmax(auto, 34.8rem)
        20px
        minmax(auto, 5rem)
        minmax(auto, 7rem)
        1fr`,
  ],
  '> *': {
    variant: `grid.content`,
  },
}
grid.content = { gridColumn: `5` }
grid.contentM = { gridColumn: `4/6` }
grid.contentL = { gridColumn: `3/8` }
grid.contentXL = { gridColumn: `2/9` }
grid.contentXXL = { gridColumn: `2/9` }
grid.contentXXXL = { gridColumn: `1/10` }

export default {
  useCustomProperties: true,
  initialColorModeName: `pineapple`,
  initialColorMode: `pineapple`,
  // useColorSchemeMediaQuery: true,
  colors: {
    ...pineapple,
    // text: 'hsl(210, 50%, 96%)',
    // background: 'hsl(230, 25%, 18%)',
    // primary: 'hsl(260, 100%, 80%)',
    // secondary: 'hsl(290, 100%, 80%)',
    // highlight: 'hsl(260, 20%, 40%)',
    // purple: 'hsl(290, 100%, 80%)',
    // muted: 'hsla(230, 20%, 0%, 20%)',
    // gray: 'hsl(210, 50%, 60%)',
    modes: {
      pineappleNew,
      dark: pineapple,
      blank,
      pineapple2,
      pineapple3,
      pineapple4,
      watermelon,
      // papaya: {
      //   primary: 'hsl(48, 62%, 64%)',
      //   text: '#433',
      //   background: 'papayawhip',
      // },
    },
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64],
  // breakpoints: [
  //   '40em', '56em', '64em',
  // ],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      color: `accent`,
      mt: 3,
    },
  },
  grid,
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: `accent`,
    },
    small: {
      fontSize: 1,
    },
    muted: {
      color: `muted`,
      a: theme => ({
        ...theme.links.muted,
      }),
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    Footer: {
      fontSize: 1,
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'textStyles.display',
      m: 0,
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5,
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4,
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1,
    },
    // a: {
    //   color: 'primary',
    //   '&:hover': {
    //     color: 'secondary',
    //   },
    // },
    ul: {
      variant: `grid.contentM`,
      p: 0,
      m: 0,
      mt: 3,
      ml: `20px`,

      'li+li': {
        mt: 3,
      },
    },
    ol: {
      variant: `styles.ul`,
    },
    // pre: {
    //   variant: 'prism',
    //   fontFamily: 'monospace',
    //   fontSize: 1,
    //   p: 3,
    //   color: 'text',
    //   bg: 'muted',
    //   overflow: 'auto',
    //   code: {
    //     color: 'inherit',
    //   },
    // },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: 'monospace',
      // color: 'secondary',
      // bg: 'muted',
      bg: `primary`,
      color: `accent`,
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      'th,td': {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'muted',
        borderBottomStyle: 'solid',
      },
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px',
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px',
    },
    hr: {
      variant: `grid.contentL`,
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    img: {
      maxWidth: '100%',
    },
    p: {
      fontFamily: `body`,
      m: 0,
      // ':not(:first-of-type)': {},
      mt: 4,
    },
    blockquote: {
      variant: `grid.contentM`,
      m: 0,
      mt: 4,
      borderLeft: `2px solid`,
      borderLeftColor: `text`,
      pl: `8px`,
      p: { m: 0 },
    },
  },
  radii: {
    none: 0,
    sm: `0.2rem`,
    md: `0.4rem`,
    lg: `0.6rem`,
    round: `50%`,
  },
  buttons: {
    slim: {
      fontSize: 1,
      fontWeight: `heading`,
      p: 1,
      color: `background`,
    },
  },
  links: {
    plain: {
      transition: `all 0.3s ease`,
      textDecoration: `none`,
      wordBreak: `break-all`,
      // color: `primary`,
      color: `muted`,
      ':hover': {
        // backgroundColor: `primary`,
        backgroundColor: `accent`,
        // color: `background`,
        borderBottomColor: `none`,
      },
      svg: {
        verticalAlign: `middle`,
      },
    },
    default: {
      variant: `links.plain`,
      borderBottom: `1px solid`,
      borderBottomColor: `primary`,
    },
    muted: {
      variant: `links.default`,
      color: `muted`,
      borderColor: `muted`,
    },
    text: {
      variant: `links.default`,
      color: `text`,
      borderBottomColor: `text`,
    },
  },
  // prism: {
  //   '.comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
  //     color: 'gray',
  //   },
  //   '.comment': {
  //     fontStyle: 'italic',
  //   },
  //   '.property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable': {
  //     color: 'purple',
  //   },
  //   '.atrule,.attr-value,.keyword': {
  //     color: 'primary',
  //   },
  //   '.selector,.attr-name,.string,.char,.builtin,.inserted': {
  //     color: 'secondary',
  //   },
  // },
}

// export default {
//   // initialColorModeName: `light`,
//   // initialColorMode: `light`,
//   // useColorSchemeMediaQuery: true,

//   fonts: {
//     body: `"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
//     heading: `inherit`,
//   },

//   colors: {
//     text: '#111',
//     background: '#fff',
//     dimgrey: `hsl(0, 0%, 41%)`,
//     codeLineHighlight: `hsla(0, 0%, 50%, 0.5)`,
//     modes: {
//       dark: {
//         text: '#fff',
//         background: '#111',
//       },
//     },
//   },

//   fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 72],

//   text: {
//     caps: {},
//     small: {
//       fontSize: 2,
//     },
//     heading: {
//       fontFamily: 'heading',
//       fontWeight: 'heading',
//       lineHeight: 'heading',
//     },
//   },

//   fontWeights: {
//     body: 400,
//     heading: 700,
//     display: 900,
//   },

//   lineHeights: {
//     body: 1.5,
//     heading: 1.25,
//   },

//   radii: {
//     none: 0,
//     sm: `0.2rem`,
//     md: `0.4rem`,
//     lg: `0.6rem`,
//     round: `50%`,
//   },

//   links: {
//     plain: {
//       transition: `all 0.3s ease`,
//       textDecoration: `none`,
//       color: `text`,
//       ':hover': {
//         backgroundColor: `text`,
//         color: `background`,
//       },
//     },
//     default: {
//       variant: `links.plain`,
//       borderBottom: `1px solid`,
//       borderBottomColor: `text`,
//     },
//     dim: {
//       variant: `links.plain`,
//       color: `dimgrey`,
//     },
//     // cta: {
//     //   variant: `links.plain`,
//     //   fontWeight: `400`,
//     //   borderRadius: `sm`,
//     //   //fontSize: `1.2rem`,
//     //   backgroundColor: `cta`,
//     //   color: `#042f37`,
//     //   padding: `0.5rem 1rem`,
//     //   ':hover': {
//     //     color: `white`,
//     //     backgroundColor: `primary`,
//     //   },
//     // },
//   },

//   styles: {
//     h1: {
//       gridColumn: `4/7`,
//       width: `100%`,
//       maxWidth: `100%`,
//       fontSize: 7,
//       fontFamily: 'heading',
//       fontWeight: 'heading',
//       color: 'primary',
//       m: 0,
//       mt: 4,
//     },
//     h2: {
//       variant: `styles.h1`,
//       fontSize: 6,
//       mt: 4,
//     },
//     h3: {
//       variant: `styles.h1`,
//       fontSize: 5,
//       mt: 4,
//     },
//     h4: {
//       variant: `styles.h1`,
//       fontSize: 4,
//       mt: 4,
//     },
//     h5: {
//       variant: `styles.h1`,
//       fontSize: 3,
//       mt: 4,
//     },
//     h6: {
//       variant: `styles.h1`,
//       fontSize: 2,
//       mt: 4,
//     },
//     p: {
//       gridColumn: `4/7`,
//       m: 0,
//       mt: 4,
//     },
//     blockquote: {
//       gridColumn: `4/7`,
//       width: `100%`,
//       maxWidth: `100%`,
//       m: 0,
//       // paddingLeft: `10px`,
//       ':before': {
//         content: `""`,
//         borderRight: `3px solid`,
//         borderRightColor: `text`,
//       },
//     },
//   },
// }

// content: "<h1>";
//     font-size: 0.9rem;
//     font-weight: 100;
//     vertical-align: middle;
//     margin-top: -0.4rem;
//     display: inline-block;
//     transform: rotate(-15deg);
//     margin-left: -2.5rem;
//     padding-right: 0.5rem;
