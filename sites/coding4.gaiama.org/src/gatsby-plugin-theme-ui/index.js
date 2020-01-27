// Checkout https://alligator.io/css/minimal-css-reset/
// maybe for rythm https://hankchizljaw.com/wrote/a-modern-css-reset/

// TODO: proper baseline rythm https://codepen.io/machal/embed/zVQQKN/?height=320&theme-id=light&default-tab=result,css
// https://bubblin.io/blog/baseline-css

// https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/

/**
 * https://a11yproject.com/posts/never-remove-css-outlines/
 * remove CSS outline in an accessible way
 * https://github.com/lindsayevans/outline.js
 * https://gist.github.com/jensgro/2470777
 * https://medium.com/hackernoon/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
 * https://twitter.com/JavaScriptFeed/status/1074515514746118144
 * https://hackernoon.com/one-line-of-code-to-remove-focus-blue-outline-and-keep-accessibility-bca3ccea9892
 */

// TODO: try out [palx](https://github.com/jxnblk/palx) for more color themes, maybe using babel-preval

export default {
  useCustomProperties: true,
  initialColorModeName: 'dark',
  // useColorSchemeMediaQuery: true,
  // breakpoints: ['576px', '768px', '992px', '1200px'],
  colors: {
    primary: '#fff',
    text: '#fff',
    background: '#000',
    background2: '#000',
    secondary: '#fff',
    accent: '#fff',
    muted: 'hsla(0, 0%, 100%, 0.75)',
    subtle: '#a0aec0',
    codeLineHighlight: `hsla(0, 0%, 50%, 0.5)`,
    codeError: `rgba(255, 0, 0, 0.52)`,
    codeSuccess: `rgba(0, 128, 0, 0.52)`,
    modes: {
      'b/w': {
        primary: '#000',
        text: '#000',
        background: '#fff',
        background2: '#fff',
        secondary: '#000',
        accent: '#000',
        muted: 'hsla(0, 0%, 0%, 0.75)',
        subtle: '#a0aec0',
        // muted: 'hsla(230, 20%, 0%, 20%)',
      },
    },
  },
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '2.5rem',
    '3rem',
    '3.5rem',
    '4.5rem',
    '5.5rem',
    '6rem',
  ],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '2.5rem',
    // '3.5rem',
    // '4.5rem',
    // '5.5rem',
    // '6rem',
  ],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
    light: 300,
    normal: 400,
    display: 300,
  },
  lineHeights: { body: 1.5, heading: 1.2 },
  sizes: { sm: 540, md: 720, lg: 960, xl: 1140 },
  shadows: {
    default: '0 .5rem 1rem rgba(0, 0, 0, .15)',
    sm: '0 .125rem .25rem rgba(0, 0, 0, .075)',
    lg: '0 1rem 3rem rgba(0, 0, 0, .175)',
  },
  radii: {
    default: '0.25rem',
    sm: '0.2rem',
    lg: '0.3rem',
    round: '50rem',
    egg: '30% 70% 70% 30% / 30% 30% 70% 70%',
  },
  typeStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'body',
      lineHeight: 'heading',
      mt: 0,
      mb: 5,
    },
    display: { fontWeight: 'display', lineHeight: 'heading' },
  },
  styles: {
    Global: theme => ({
      '*': { boxSizing: 'border-box' },
      html: { scrollBehavior: `smooth` },
      body: { margin: 0 },
      // by https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/
      '@media screen and (prefers-reduced-motion: reduce), (update: slow)': {
        '*:not(.safe-animation), *:not(.safe-animation)::before, *:not(.safe-animation)::after': {
          animationDuration: `0.01s !important`,
          animationIterationCount: `1 !important` /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/#comment-1700170) */,
          transitionDuration: `0.001ms !important`,
          scrollBehavior: `auto !important`,
        },
      },
      'body::-webkit-scrollbar-thumb': {
        borderRadius: `10px`,
        backgroundColor: theme.colors.text, // NOTE:  maybe as primary? `#f56545`,
      },
      'body::-webkit-scrollbar': {
        width: `2px`,
      },
      // 'body::-webkit-scrollbar-track': {
      //   background: `#161616`,
      // },
      '@media only screen and (max-width: 900px)': {
        'table, thead, tbody, th, td, tr': {
          display: 'block',
        },
        'thead tr': {
          position: 'absolute',
          top: '-9999px',
          left: '-9999px',
        },
        tr: { border: '1px solid #ccc' },
        td: {
          border: 'none',
          borderBottom: '1px solid #eee',
          position: 'relative',
          paddingLeft: '200px',
          marginLeft: '150px',
        },
        'td:before': {
          position: 'absolute',
          top: '12px',
          left: '6px',
          width: '200px',
          paddingRight: '40px',
          whiteSpace: 'nowrap',
          marginLeft: '-150px',
        },
      },
    }),
    root: { fontFamily: 'body', lineHeight: 'body', fontWeight: 'body' },
    Layout: {},
    Footer: { fontSize: 1, maxWidth: `90vw`, mx: `auto` },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover,:focus': { textDecoration: 'underline' },
    },
    p: { m: 0, mb: 10, lineHeight: 'body' },
    h1: {
      variant: 'typeStyles.heading',
      fontSize: 7,
    },
    h2: {
      variant: `typeStyles.heading`,
      fontSize: 6,
    },
    h3: {
      variant: `typeStyles.heading`,
      fontSize: 5,
    },
    h4: {
      variant: `typeStyles.heading`,
      fontSize: 4,
    },
    h5: {
      variant: `typeStyles.heading`,
      fontSize: 3,
    },
    h6: {
      variant: `typeStyles.heading`,
      fontSize: 2,
    },
    blockquote: {
      variant: 'grid.list',
      m: 0,
      mb: 7,
      borderLeft: '5px solid',
      borderLeftColor: 'text',
      pl: '15px',
      p: { m: 0 },
    },
    ul: {
      variant: `grid.list`,
      p: 0,
      m: 0,
      mb: 7,
      ml: `20px`,
      li: {
        mb: 3,
      },
    },
    ol: {
      variant: `styles.ul`,
    },
    table: {
      width: '100%',
      m: 0,
      mb: 7,
      borderCollapse: 'collapse',
    },
    th: {
      verticalAlign: 'bottom',
      borderTopWidth: 2,
      borderTopStyle: 'solid',
      borderTopColor: 'subtle',
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderBottomColor: 'subtle',
      p: 1,
      textAlign: 'inherit',
    },
    td: {
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderBottomColor: 'subtle',
      verticalAlign: 'top',
      p: 1,
    },
    img: { maxWidth: '100%', height: 'auto' },
    inlineCode: {
      bg: `primary`,
      borderRadius: `sm`,
      color: `background`,
      display: `inline-block`,
      fontFamily: 'monospace',
      maxWidth: `100%`,
      overflowX: `auto`,
      px: 1,
      verticalAlign: `middle`,
      whiteSpace: `nowrap`,
    },
    kbd: {
      variant: `styles.inlineCode`,
      bg: `subtle`,
      color: `text`,
      kbd: { p: 0, fontWeight: `heading` },
    },
  },
  grid: {
    display: 'grid',

    gridTemplateColumns: [
      // `0 0 0 20px minmax(auto, 90vw) 20px 0 0 0`,
      `0 0 0 2vw 20px minmax(auto,90vw) 20px 2vw 0 0 0`,
      null,
      null,
      // `1fr minmax(auto, 7rem) minmax(auto, 5rem) 20px minmax(auto, 34.8rem) 20px minmax(auto, 5rem) minmax(auto, 7rem) 1fr`,
      `1fr 1fr minmax(auto,7rem) minmax(auto,5rem) 20px minmax(auto,34.8rem) 20px minmax(auto,5rem) minmax(auto,7rem) 1fr 1fr`,
    ],
    '> *': { variant: `grid.content` },
    content: { gridColumn: '6' },
    contentL: { gridColumn: '4/9' },
    contentXL: { gridColumn: '2/11' },
    contentXXL: { gridColumn: '1/12' },
    list: { gridColumn: '5/7' },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'accent',
    },
    small: { fontSize: 1 },
    muted: {
      color: 'muted',
      a: { variant: `links.muted` },
    },
  },
  buttons: {
    slim: {
      fontSize: 1,
      fontWeight: 'heading',
      p: 1,
      px: 2,
      color: 'background',
    },
  },
  links: {
    plain: {
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      color: 'primary',
      ':hover,:focus, &.active': {
        backgroundColor: 'accent',
        color: 'background',
        borderBottomColor: 'initial',
      },
      svg: { verticalAlign: 'middle' },
    },
    default: {
      variant: 'links.plain',
      borderBottom: '1px solid',
      borderBottomColor: 'primary',
    },
    muted: { variant: 'links.default', color: 'muted', borderColor: 'muted' },
    text: {
      variant: 'links.default',
      color: 'text',
      borderBottomColor: 'text',
    },
  },
  gradients: {
    peach: 'linear-gradient(20deg, #db7093, #daa357)',
    peach2: 'linear-gradient(90deg,#ff8a00,#e52e71)',
  },
}

// import { bootstrap } from '@theme-ui/presets'
// /**
//  * https://www.schemecolor.com/fresh-pineapple.php
//  * ripe pineapple: #ffdf7a from https://www.dunnedwards.com/colors/browser/de5389
//  */

// // const pineapple = {
// //   text: 'hsl(183, 22%, 67%)',
// //   background: 'hsl(90, 10%, 16%)',
// //   primary: 'hsl(48, 62%, 64%)',
// //   secondary: 'hsl(28, 63%, 48%)',
// //   highlight: 'hsl(4, 47%, 51%)',
// //   purple: 'hsl(290, 100%, 80%)',
// //   muted: 'hsla(230, 20%, 0%, 20%)',
// //   gray: 'hsl(210, 50%, 60%)',
// //   codeLineHighlight: `hsla(0, 0%, 50%, 0.5)`,
// // }

// // const watermelon = {
// //   text: '#000',
// //   background: '#fff',
// //   primary: `hsl(0, 91%, 65%)`,
// // }
// // const pineapple = {
// //   primary: '#fed308',
// //   text: '#000',
// //   background: '#e8e8e8',
// //   secondary: '#105326',
// //   tertiary: '#309f57',
// //   highlight: '#ffa700',
// //   muted: 'hsla(230, 20%, 0%, 20%)',
// //   gray: 'hsl(210, 50%, 60%)',
// //   codeLineHighlight: `hsla(0, 0%, 50%, 0.5)`,
// // }
// // const pineapple2 = {
// //   primary: '#7BC820',
// //   text: '#fff',
// //   background: '#fed308',
// //   secondary: '#105326',
// //   tertiary: '#309f57',
// //   highlight: '#ffa700',
// // }
// // based of https://avemateiu.com/color-palettes/color-palette-213/
// // const pineapple3 = {
// //   heading: `#fadc44`,
// //   primary: `#f0c20a`,
// //   text: `#4a5e26`,
// //   background: `#d9d8c2`,
// //   muted: `#8d6011`,
// // }
// const pineapple4 = {
//   heading: `#fadc44`,
//   primary: `#f0c20a`,
//   background: `#4a5e26`,
//   text: `#d9d8c2`,
//   muted: `#8d6011`,
// }

// const watermelon = {
//   text: '#000',
//   background: '#fff',
//   primary: `hsl(0, 91%, 65%)`,
// }

// const pineapple = {
//   text: `#000`,
//   background: `#fed308`,
//   background2: `#e8e8e8`,
//   primary: `#105326`,
//   // secondary: `#309f57`,
//   accent: `#fff`,
//   muted: `#309f57`,
//   codeLineHighlight: `hsla(0, 0%, 50%, 0.5)`,
// }
// const blackAndWhite = {
//   primary: '#000',
//   text: '#000',
//   background: '#fff',
//   background2: '#fff',
//   secondary: '#000',
//   accent: '#000',
//   muted: '#000',
// }
// const whiteAndBlack = {
//   primary: '#fff',
//   text: '#fff',
//   background: '#000',
//   background2: '#000',
//   secondary: '#fff',
//   accent: '#fff',
//   muted: '#fff',
// }

// const grid = {
//   display: `grid`,
//   gridTemplateColumns: [
//     `
//         0
//         0
//         0
//         20px
//         minmax(auto, 90vw)
//         20px
//         0
//         0
//         0`,
//     null,
//     null,
//     `
//         1fr
//         minmax(auto, 7rem)
//         minmax(auto, 5rem)
//         20px
//         minmax(auto, 34.8rem)
//         20px
//         minmax(auto, 5rem)
//         minmax(auto, 7rem)
//         1fr`,
//   ],
//   '> *': {
//     variant: `grid.content`,
//   },
// }
// grid.content = { gridColumn: `5` }
// grid.contentM = { gridColumn: `4/6` }
// grid.contentL = { gridColumn: `3/8` }
// grid.contentXL = { gridColumn: `2/9` }
// grid.contentXXL = { gridColumn: `2/9` }
// grid.contentXXXL = { gridColumn: `1/10` }

// export default {
//   useCustomProperties: true,
//   initialColorModeName: `dark`,
//   initialColorMode: `dark`,
//   // useColorSchemeMediaQuery: true,
//   ...bootstrap,
//   colors: {
//     // ...pineapple,
//     ...whiteAndBlack,
//     modes: {
//       // dark: whiteAndBlack,
//       'b/w': blackAndWhite,
//       // pineapple4,
//       // watermelon,
//     },
//   },
//   fonts: {
//     body: 'system-ui, sans-serif',
//     heading: 'inherit',
//     monospace: 'Menlo, monospace',
//   },
//   // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
//   // space: [0, `0.2rem`, `0.5rem`, `1rem`, `2rem`, `4rem`],
//   // fontWeights: {
//   //   body: 400,
//   //   heading: 700,
//   //   display: 900,
//   // },

//   // bootstrap
//   // fontSizes: [
//   //   '0.75rem',
//   //   '0.875rem',
//   //   '1rem',
//   //   '1.25rem',
//   //   '1.5rem',
//   //   '1.75rem',
//   //   '2rem',
//   //   '2.5rem',
//   //   '3.5rem',
//   //   '4.5rem',
//   //   '5.5rem',
//   //   '6rem',
//   // ],
//   // space: ['0rem', '0.25rem', '0.5rem', '1rem', '1.5rem', '3rem'],
//   // fontWeights: {
//   //   body: 400,
//   //   heading: 500,
//   //   bold: 700,
//   //   light: 300,
//   //   normal: 400,
//   //   display: 300,
//   // },

//   // // breakpoints: [
//   // //   '40em', '56em', '64em',
//   // // ],
//   // lineHeights: {
//   //   body: 1.5,
//   //   heading: 1.25,
//   // },
//   // textStyles: {
//   //   heading: {
//   //     fontFamily: 'heading',
//   //     fontWeight: 'heading',
//   //     lineHeight: 'heading',
//   //   },
//   //   display: {
//   //     variant: 'textStyles.heading',
//   //     fontSize: [5, 6],
//   //     fontWeight: 'display',
//   //     letterSpacing: '-0.03em',
//   //     color: `accent`,
//   //     mt: 3,
//   //   },
//   // },
//   grid,
//   text: {
//     heading: {
//       fontFamily: 'heading',
//       fontWeight: 'heading',
//       lineHeight: 'heading',
//       color: `accent`,
//     },
//     small: {
//       fontSize: 1,
//     },
//     muted: {
//       color: `muted`,
//       a: theme => ({
//         ...theme.links.muted,
//       }),
//     },
//   },
//   styles: {
//     ...bootstrap.styles,
//     Global: {
//       '*': {
//         boxSizing: 'border-box',
//       },
//       body: {
//         margin: 0,
//       },
//     },
//     Layout: {},
//     Footer: {
//       fontSize: 1,
//     },
//     root: {
//       fontFamily: 'body',
//       lineHeight: 'body',
//       fontWeight: 'body',
//     },

//     // bootstrap
//     // h1: {
//     //   fontFamily: 'heading',
//     //   fontWeight: 'heading',
//     //   lineHeight: 'heading',
//     //   mt: 0,
//     //   mb: 2,
//     //   fontSize: 7,
//     // },
//     // h2: {
//     //   fontFamily: 'heading',
//     //   fontWeight: 'heading',
//     //   lineHeight: 'heading',
//     //   mt: 0,
//     //   mb: 2,
//     //   fontSize: 6,
//     // },
//     // h3: {
//     //   fontFamily: 'heading',
//     //   fontWeight: 'heading',
//     //   lineHeight: 'heading',
//     //   mt: 0,
//     //   mb: 2,
//     //   fontSize: 5,
//     // },
//     // h4: {
//     //   fontFamily: 'heading',
//     //   fontWeight: 'heading',
//     //   lineHeight: 'heading',
//     //   mt: 0,
//     //   mb: 2,
//     //   fontSize: 4,
//     // },
//     // h5: {
//     //   fontFamily: 'heading',
//     //   fontWeight: 'heading',
//     //   lineHeight: 'heading',
//     //   mt: 0,
//     //   mb: 2,
//     //   fontSize: 3,
//     // },
//     // h6: {
//     //   fontFamily: 'heading',
//     //   fontWeight: 'heading',
//     //   lineHeight: 'heading',
//     //   mt: 0,
//     //   mb: 2,
//     //   fontSize: 2,
//     // },
//     // p: {
//     //   mb: 3,
//     //   lineHeight: 'body',
//     // },

//     // h1: {
//     //   variant: 'textStyles.display',
//     //   m: 0,
//     // },
//     // h2: {
//     //   variant: 'textStyles.heading',
//     //   fontSize: 5,
//     // },
//     // h3: {
//     //   variant: 'textStyles.heading',
//     //   fontSize: 4,
//     // },
//     // h4: {
//     //   variant: 'textStyles.heading',
//     //   fontSize: 3,
//     // },
//     // h5: {
//     //   variant: 'textStyles.heading',
//     //   fontSize: 2,
//     // },
//     // h6: {
//     //   variant: 'textStyles.heading',
//     //   fontSize: 1,
//     // },
//     // // a: {
//     // //   color: 'primary',
//     // //   '&:hover': {
//     // //     color: 'secondary',
//     // //   },
//     // // },
//     // ul: {
//     //   variant: `grid.contentM`,
//     //   p: 0,
//     //   m: 0,
//     //   mt: 3,
//     //   ml: `20px`,

//     //   'li+li': {
//     //     mt: 3,
//     //   },
//     // },
//     // ol: {
//     //   variant: `styles.ul`,
//     // },
//     // // pre: {
//     // //   variant: 'prism',
//     // //   fontFamily: 'monospace',
//     // //   fontSize: 1,
//     // //   p: 3,
//     // //   color: 'text',
//     // //   bg: 'muted',
//     // //   overflow: 'auto',
//     // //   code: {
//     // //     color: 'inherit',
//     // //   },
//     // // },
//     // code: {
//     //   fontFamily: 'monospace',
//     //   color: 'secondary',
//     //   fontSize: 1,
//     // },
//     // inlineCode: {
//     //   fontFamily: 'monospace',
//     //   // color: 'secondary',
//     //   // bg: 'muted',
//     //   bg: `primary`,
//     //   color: `background`,
//     //   px: 1,
//     //   borderRadius: `sm`,
//     // },
//     // table: {
//     //   width: '100%',
//     //   my: 4,
//     //   borderCollapse: 'separate',
//     //   borderSpacing: 0,
//     //   'th,td': {
//     //     textAlign: 'left',
//     //     py: '4px',
//     //     pr: '4px',
//     //     pl: 0,
//     //     borderColor: 'muted',
//     //     borderBottomStyle: 'solid',
//     //   },
//     // },
//     // th: {
//     //   verticalAlign: 'bottom',
//     //   borderBottomWidth: '2px',
//     // },
//     // td: {
//     //   verticalAlign: 'top',
//     //   borderBottomWidth: '1px',
//     // },
//     // hr: {
//     //   variant: `grid.contentL`,
//     //   border: 0,
//     //   borderBottom: '1px solid',
//     //   borderColor: 'muted',
//     // },
//     // img: {
//     //   maxWidth: '100%',
//     // },
//     // p: {
//     //   fontFamily: `body`,
//     //   m: 0,
//     //   // ':not(:first-of-type)': {},
//     //   mt: 4,
//     // },
//     blockquote: {
//       variant: `grid.contentM`,
//       m: 0,
//       mt: 4,
//       borderLeft: `5px solid`,
//       borderLeftColor: `text`,
//       pl: `15px`,
//       p: { m: 0 },
//     },
//   },
//   // radii: {
//   //   none: 0,
//   //   sm: `0.2rem`,
//   //   md: `0.4rem`,
//   //   lg: `0.6rem`,
//   //   round: `50%`,
//   // },
//   buttons: {
//     slim: {
//       fontSize: 1,
//       fontWeight: `heading`,
//       p: 1,
//       color: `background`,
//     },
//   },
//   links: {
//     plain: {
//       transition: `all 0.3s ease`,
//       textDecoration: `none`,
//       wordBreak: `break-all`,
//       // color: `primary`,
//       color: `muted`,
//       ':hover,&.active': {
//         // backgroundColor: `primary`,
//         backgroundColor: `accent`,
//         color: `background`,
//         borderBottomColor: `initial`,
//       },
//       svg: {
//         verticalAlign: `middle`,
//       },
//     },
//     default: {
//       variant: `links.plain`,
//       borderBottom: `1px solid`,
//       borderBottomColor: `primary`,
//     },
//     muted: {
//       variant: `links.default`,
//       color: `muted`,
//       borderColor: `muted`,
//     },
//     text: {
//       variant: `links.default`,
//       color: `text`,
//       borderBottomColor: `text`,
//     },
//   },
//   gradients: {
//     peach: `linear-gradient(20deg, #db7093, #daa357)`,
//   },
//   // prism: {
//   //   '.comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
//   //     color: 'gray',
//   //   },
//   //   '.comment': {
//   //     fontStyle: 'italic',
//   //   },
//   //   '.property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable': {
//   //     color: 'purple',
//   //   },
//   //   '.atrule,.attr-value,.keyword': {
//   //     color: 'primary',
//   //   },
//   //   '.selector,.attr-name,.string,.char,.builtin,.inserted': {
//   //     color: 'secondary',
//   //   },
//   // },
// }

// // export default {
// //   // initialColorModeName: `light`,
// //   // initialColorMode: `light`,
// //   // useColorSchemeMediaQuery: true,

// //   fonts: {
// //     body: `"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
// //     heading: `inherit`,
// //   },

// //   colors: {
// //     text: '#111',
// //     background: '#fff',
// //     dimgrey: `hsl(0, 0%, 41%)`,
// //     codeLineHighlight: `hsla(0, 0%, 50%, 0.5)`,
// //     modes: {
// //       dark: {
// //         text: '#fff',
// //         background: '#111',
// //       },
// //     },
// //   },

// //   fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 72],

// //   text: {
// //     caps: {},
// //     small: {
// //       fontSize: 2,
// //     },
// //     heading: {
// //       fontFamily: 'heading',
// //       fontWeight: 'heading',
// //       lineHeight: 'heading',
// //     },
// //   },

// //   fontWeights: {
// //     body: 400,
// //     heading: 700,
// //     display: 900,
// //   },

// //   lineHeights: {
// //     body: 1.5,
// //     heading: 1.25,
// //   },

// //   radii: {
// //     none: 0,
// //     sm: `0.2rem`,
// //     md: `0.4rem`,
// //     lg: `0.6rem`,
// //     round: `50%`,
// //   },

// //   links: {
// //     plain: {
// //       transition: `all 0.3s ease`,
// //       textDecoration: `none`,
// //       color: `text`,
// //       ':hover': {
// //         backgroundColor: `text`,
// //         color: `background`,
// //       },
// //     },
// //     default: {
// //       variant: `links.plain`,
// //       borderBottom: `1px solid`,
// //       borderBottomColor: `text`,
// //     },
// //     dim: {
// //       variant: `links.plain`,
// //       color: `dimgrey`,
// //     },
// //     // cta: {
// //     //   variant: `links.plain`,
// //     //   fontWeight: `400`,
// //     //   borderRadius: `sm`,
// //     //   //fontSize: `1.2rem`,
// //     //   backgroundColor: `cta`,
// //     //   color: `#042f37`,
// //     //   padding: `0.5rem 1rem`,
// //     //   ':hover': {
// //     //     color: `white`,
// //     //     backgroundColor: `primary`,
// //     //   },
// //     // },
// //   },

// //   styles: {
// //     h1: {
// //       gridColumn: `4/7`,
// //       width: `100%`,
// //       maxWidth: `100%`,
// //       fontSize: 7,
// //       fontFamily: 'heading',
// //       fontWeight: 'heading',
// //       color: 'primary',
// //       m: 0,
// //       mt: 4,
// //     },
// //     h2: {
// //       variant: `styles.h1`,
// //       fontSize: 6,
// //       mt: 4,
// //     },
// //     h3: {
// //       variant: `styles.h1`,
// //       fontSize: 5,
// //       mt: 4,
// //     },
// //     h4: {
// //       variant: `styles.h1`,
// //       fontSize: 4,
// //       mt: 4,
// //     },
// //     h5: {
// //       variant: `styles.h1`,
// //       fontSize: 3,
// //       mt: 4,
// //     },
// //     h6: {
// //       variant: `styles.h1`,
// //       fontSize: 2,
// //       mt: 4,
// //     },
// //     p: {
// //       gridColumn: `4/7`,
// //       m: 0,
// //       mt: 4,
// //     },
// //     blockquote: {
// //       gridColumn: `4/7`,
// //       width: `100%`,
// //       maxWidth: `100%`,
// //       m: 0,
// //       // paddingLeft: `10px`,
// //       ':before': {
// //         content: `""`,
// //         borderRight: `3px solid`,
// //         borderRightColor: `text`,
// //       },
// //     },
// //   },
// // }

// // content: "<h1>";
// //     font-size: 0.9rem;
// //     font-weight: 100;
// //     vertical-align: middle;
// //     margin-top: -0.4rem;
// //     display: inline-block;
// //     transform: rotate(-15deg);
// //     margin-left: -2.5rem;
// //     padding-right: 0.5rem;
