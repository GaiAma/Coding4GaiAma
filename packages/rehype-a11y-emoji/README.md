# rehype-a11y-emoji

As I couldn't get [gatsby-remark-a11y-emoji](https://github.com/florianeckerstorfer/gatsby-remark-a11y-emoji) working with [gatsby-plugin-mdx](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx#readme) I made this rehype version to make **emojis accessible** by wrapping them in a `<span role="image">` with `aria-label` set to the emojis description based on [gemoji](https://github.com/github/gemoji/).

So

```
😅
```

turns into

```html
<span role="img" aria-label="smiling face with open mouth &amp; cold sweat"
  >😅</span
>
```

### Install

```bash
yarn add -D rehype-a11y-emoji
# or
npm i -D rehype-a11y-emoji
```

### Usage

```js
// gatsby-config.js
{
  resolve: `gatsby-plugin-mdx`,
  options: {
    rehypePlugins: [require(`rehype-a11y-emoji`)],
  },
}
```
