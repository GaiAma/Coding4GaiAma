/**
 * related
 * - https://github.com/malerba118/react-starter-cli/tree/master/plop-templates
 * - https://dev.to/ekafyi/adding-generators-to-your-gatsby-site-with-plop-2gd5
 * - https://www.reddit.com/r/javascript/comments/3v5gum/plop_a_microgenerator_to_ease_your_daily_life/
 *
 * TODO: dedupe and maybe even merge `package` & `package:unified`
 */
const userMeta = require('user-meta')

module.exports = function(plop) {
  // Add new package
  plop.setGenerator(`package`, {
    description: `This sets up the basic files for a new package.`,
    prompts: [
      {
        type: `input`,
        name: `name`,
        message: `name of new package`,
      },
      {
        type: `input`,
        name: `username`,
        message: `Your name`,
        default: userMeta.name,
        when(answers) {
          if (!userMeta.name) {
            return true
          }
          answers.username = userMeta.name
          console.log(`Using NPM/Git name`)
        },
      },
      {
        type: `input`,
        name: `useremail`,
        message: `Your email`,
        default: userMeta.email,
        when(answers) {
          if (!userMeta.email) {
            return true
          }
          answers.useremail = userMeta.email
          console.log(`Using NPM/Git email`)
        },
      },
      {
        type: `input`,
        name: `userurl`,
        message: `Your url`,
        default: userMeta.url,
        when(answers) {
          if (!userMeta.url) {
            return true
          }
          answers.userurl = userMeta.url
          console.log(`Using NPM/Git url`)
        },
      },
      // {
      //   type: `confirm`,
      //   name: `isBrowser`,
      //   message: `Will this package contain code that runs in a browser, e.g. have a gatsby-browser.js or gatsby-ssr.js file?`,
      // },
    ],
    actions: data => {
      // Get current date
      data.year = new Date().getFullYear()

      data.pkgAuthor = [
        !!data.username && data.username,
        !!data.useremail && `<${data.useremail}>`,
        !!data.userurl && `(${data.userurl})`,
      ]
        .filter(Boolean)
        .join(` `)

      return [
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/package.json`,
          templateFile: `plop-templates/package/package.json.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/index.js`,
          templateFile: `plop-templates/package/index.js.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/README.md`,
          templateFile: `plop-templates/package/README.md.hbs`,
        },
        // data.isBrowser && {
        //   type: `add`,
        //   path: `packages/{{kebabCase name}}/.babelrc`,
        //   templateFile: `plop-templates/package/.babelrc.hbs`,
        // },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/.gitignore`,
          templateFile: `plop-templates/package/.gitignore.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/.npmignore`,
          templateFile: `plop-templates/package/.npmignore.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/license`,
          templateFile: `plop-templates/package/license.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/src/.gitkeep`,
        },
      ].filter(Boolean)
    },
  })
  // Add new unified plugin
  plop.setGenerator(`package:unified`, {
    description: `This sets up the basic files for a new unified plugin.`,
    prompts: [
      {
        type: `input`,
        name: `name`,
        message: `name of new package`,
      },
      {
        type: `input`,
        name: `username`,
        message: `Your name`,
        default: userMeta.name,
        when(answers) {
          if (!userMeta.name) {
            return true
          }
          answers.username = userMeta.name
          console.log(`Using NPM/Git name`)
        },
      },
      {
        type: `input`,
        name: `useremail`,
        message: `Your email`,
        default: userMeta.email,
        when(answers) {
          if (!userMeta.email) {
            return true
          }
          answers.useremail = userMeta.email
          console.log(`Using NPM/Git email`)
        },
      },
      {
        type: `input`,
        name: `userurl`,
        message: `Your url`,
        default: userMeta.url,
        when(answers) {
          if (!userMeta.url) {
            return true
          }
          answers.userurl = userMeta.url
          console.log(`Using NPM/Git url`)
        },
      },
      // {
      //   type: `confirm`,
      //   name: `isBrowser`,
      //   message: `Will this package contain code that runs in a browser, e.g. have a gatsby-browser.js or gatsby-ssr.js file?`,
      // },
    ],
    actions: data => {
      // Get current date
      data.year = new Date().getFullYear()

      data.pkgAuthor = [
        !!data.username && data.username,
        !!data.useremail && `<${data.useremail}>`,
        !!data.userurl && `(${data.userurl})`,
      ]
        .filter(Boolean)
        .join(` `)

      return [
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/package.json`,
          templateFile: `plop-templates/unified-plugin/package.json.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/src/index.ts`,
          templateFile: `plop-templates/unified-plugin/src/index.ts.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/README.md`,
          templateFile: `plop-templates/unified-plugin/README.md.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/.gitignore`,
          templateFile: `plop-templates/unified-plugin/.gitignore.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/license`,
          templateFile: `plop-templates/unified-plugin/license.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/tsconfig.json`,
          templateFile: `plop-templates/unified-plugin/tsconfig.json.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/types/mdast-util-to-string/index.d.ts`,
          templateFile: `plop-templates/unified-plugin/types/mdast-util-to-string/index.d.ts`,
        },
      ].filter(Boolean)
    },
  })

  // Add new post
  plop.setGenerator(`post`, {
    description: `This sets up the basic files for a new post.`,
    prompts: [
      {
        type: `input`,
        name: `title`,
        message: `title of new post`,
      },
      {
        type: `input`,
        name: `shortSlug`,
        message: `optional shortSlug`,
      },
      {
        type: `input`,
        name: `author`,
        message: `Your name`,
        default: `can`,
      },
      {
        type: `input`,
        name: `tags`,
        message: `Tags (comma separated)`,
      },
      {
        type: 'input',
        name: 'body',
        message: 'Body text?',
      },
    ],
    actions: data => {
      // Get current date
      data.date = new Date().toISOString().split('T')[0]

      // Parse tags as yaml array
      if (data.tags) {
        data.tags = `tags:\n  - ${data.tags.split(',').join('\n  - ')}`
      }

      return [
        {
          type: `add`,
          path: `sites/coding4.gaiama.org/content/posts/{{kebabCase title}}/en.mdx`,
          templateFile: `plop-templates/post/en.mdx.hbs`,
        },
      ].filter(Boolean)
    },
  })
}
