# gaiama-slugger

## Early release

### ⚠️ Things may change and could even break.

It's an opinionated slugger wrapping [@sindresorhus/slugify](https://github.com/sindresorhus/slugify).  
It pre-defines settings and adds a counter to handle multiple occurrences of the same slug.  
This feature is already being discussed in [#37](https://github.com/sindresorhus/slugify/issues/37) so it might end up in "upstream" soon-ish. 🤷‍♂️

This package is basically to satisfy our requirements and ensure consistency.  
If tests start to fail only this package has to be fixed. 😉

## Install

```bash
yarn add @gaiama/slugger
# or
npm i @gaiama/slugger
```

## Usage

```js
import { slugify } from '@gaiama/slugger'
slugify('foo') // => foo
slugify('foo') // => foo-2
slugify('foo 1') // => foo-1
slugify('foo-1') // => foo-1-2
slugify('foo-1') // => foo-1-3
slugify('foo') // => foo-3
slugify('foo') // => foo-4
slugify('foo-1') // => foo-1-4
slugify('foo-2') // => foo-2-1
slugify('foo-2') // => foo-2-2
slugify('foo-2-1') // => foo-2-1-1
slugify('foo-2-1') // => foo-2-1-2
slugify('foo-11') // => foo-11-1
slugify('foo-111') // => foo-111-1
slugify('foo-111-1') // => foo-111-1-1
```

## API

### slugify(string, options?)

#### string

Type: `string`

String to slugify.

#### options

Type: `object`

options are passed straight to [@sindresorhus/slugify](https://github.com/sindresorhus/slugify#options)

## License

[MIT](/license) © [CanRau](https://www.canrau.com/)