# gatsby-plugin-goatcounter

Adds GDPR compliant [GoatCounter Statistics](https://goatcounter.com/) to your GatsbyJS website.

## Still in beta
I'm pretty new to releasing TypeScript packages for front-end ussage, so I'm not entirely sure everything works as intended.
I'd appreciate bug reports & feature requests. 🙏
I'm already using it on [Coding4Gaiama](https://coding4.gaiama.org). 🚀
For example I'm not sure how to disable `warning 'use strict' is unnecessary inside of modules` from ESLint. 🤷‍♂️
I consider adding a component to track outbound links like [gatsby-plugin-google-analytics](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics#outboundlink-component)

## Install

```bash
yarn add -D gatsby-plugin-goatcounter@beta
# or
npm i -D gatsby-plugin-goatcounter@beta
```

### How to use

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        // REQUIRED! https://[my_code].goatcounter.com
        code: 'YOUR_GOATCOUNTER_PAGE_CODE';
        // Avoids sending pageview hits from custom paths
        exclude: [];
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // set to true to include a gif to count non-JS users
        pixel: false,
        // Allow requests from local addresses (localhost, 192.168.0.0, etc.) for testing the integration locally.
        allowLocal: false
      },
    },
  ],
}
```

### manual counting

You can use `goatcount` to manually track events on
```js
import { goatcount } from 'gatsby-plugin-goatcounter'

goatcount({
  path: 'event-name',
  event: true,
})

goatcount({
  path: 'event-name',
  title: 'Event Name',
  referrer: 'example.com',
  event: true,
})
```

## License

[MIT](/license) © [CanRau](https://www.canrau.com/)