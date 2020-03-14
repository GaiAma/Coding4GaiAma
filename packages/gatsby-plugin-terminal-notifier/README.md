# gatsby-plugin-terminal-notifier

![notification example](images/dev-notification-example.png)

## Install

```bash
yarn add -D gatsby-plugin-terminal-notifier
# or
npm i -D gatsby-plugin-terminal-notifier
```

## Usage

```js
// gatsby-config.js
module.exports = {
  plugins: ['gatsby-plugin-terminal-notifier']
}
```

### Customize notifications

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-terminal-notifier'
      options: {
        devNote: 'My custom dev notification',
        buildNote: 'My cool post build notification'
      }
    }
  ]
}
```

## License

[MIT](/license) © [CanRau](https://www.canrau.com/)