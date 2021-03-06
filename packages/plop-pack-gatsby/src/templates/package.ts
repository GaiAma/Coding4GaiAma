export const pkgJsonStr = `{
  "name": "{{kebabCase name}}",
  "version": "1.0.0",
  "description": "",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "author": "{{{authorString author}}}",
  "repository": {
    "type": "git",
    "url": "{{repo}}",
    "directory": "packages/{{kebabCase name}}"
  },
  "homepage": "{{homepage}}/tree/master/packages/{{kebabCase name}}/README.md",
  "license": "MIT",
  "scripts": {
    "build": "tsc",
    "watch": "yarn build --watch",
    "prepublishOnly": "yarn build"
  },
  "keywords": [
    "gatsby",
    "gatsby-plugin"
  ],
  "dependencies": {},
  "devDependencies": {
    "@types/node": "^13.5.0",
    "@types/unist": "^2.0.3",
    "typescript": "^3.7.4"
  }
}
`;
