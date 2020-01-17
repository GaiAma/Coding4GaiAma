/**
 * related
 * - https://github.com/malerba118/react-starter-cli/tree/master/plop-templates
 * - https://dev.to/ekafyi/adding-generators-to-your-gatsby-site-with-plop-2gd5
 * - https://www.reddit.com/r/javascript/comments/3v5gum/plop_a_microgenerator_to_ease_your_daily_life/
 *
 * DONE: dedupe and maybe even merge `package` & `package:unified`
 */
const userMeta = require('user-meta')

const typeData = {
  unified: {
    dependencies: `"mdast-util-to-string": "^1.0.7","unist-util-visit": "^2.0.1"`,
    devDependencies: `"ava": "2.4.0","remark": "11.0.2","unist-builder": "2.0.2","unist-util-remove-position": "2.0.0"`,
    keywords: `"unified","remark","mdx","plugin","mdast","markdown"`,
    outDir: 'lib',
    files: '', // `"lib"`,
  },
  gatsby: {
    dependencies: ``,
    devDependencies: ``,
    keywords: `"gatsby","gatsby-plugin"`,
    outDir: '.',
    files: '',
  },
  plain: {
    dependencies: ``,
    devDependencies: ``,
    keywords: ``,
    outDir: 'lib',
    files: '', // `"lib"`,
  },
}

module.exports = function(plop) {
  plop.setHelper('pkgList', txt => {
    if (!txt) return ''
    return `${txt}`
      .split(',')
      .map(x => `${x}`)
      .join(',\n    ')
  })

  plop.setHelper('if_eq', function(a, b, opts) {
    return a === b ? opts.fn(this) : opts.inverse(this)
  })

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
      {
        type: `list`,
        name: `type`,
        message: `Is this a Gatsby Theme?`,
        choices: ['plain', 'gatsby', 'unified'],
        when(answers) {
          if (/(gatsby-theme)/.test(answers.name)) {
            answers.type = 'gatsby'
            console.log(`seems to be a Gatsby theme`)
            return false
          } else if (/(remark|rehype|retext)/.test(answers.name)) {
            answers.type = 'unified'
            console.log(`seems to be a UnifiedJS plugin`)
            return false
          }
          return true
        },
      },
    ],
    actions: data => {
      data.year = new Date().getFullYear()

      data.authorString = [
        !!data.username && data.username,
        !!data.useremail && `<${data.useremail}>`,
        !!data.userurl && `(${data.userurl})`,
      ]
        .filter(Boolean)
        .join(` `)

      // data = { ...data, ...typeData[data.type] }
      Object.assign(data, typeData[data.type])
      // console.log('\ntypeData', data, '\n')

      return [
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/package.json`,
          templateFile: `plop-templates/package/package.json.hbs`,
        },
        data.type === `unified` && {
          type: `add`,
          path: `packages/{{kebabCase name}}/src/index-unified.ts`,
          templateFile: `plop-templates/package/src/index.ts.hbs`,
        },
        data.type === `plain` && {
          type: `add`,
          path: `packages/{{kebabCase name}}/src/index-plain.ts`,
          templateFile: `plop-templates/package/src/index.ts.hbs`,
        },
        data.type === `gatsby` && {
          type: `add`,
          path: `packages/{{kebabCase name}}/index-noop.js`,
          templateFile: `plop-templates/package/index.js.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/src/index.test.ts`,
          templateFile: `plop-templates/package/src/index.test.ts.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/README.md`,
          templateFile: `plop-templates/package/README.md.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/.gitignore`,
          templateFile: `plop-templates/package/gitignore.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/.npmignore`,
          templateFile: `plop-templates/package/npmignore.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/.prettierrc`,
          templateFile: `plop-templates/package/prettierrc.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/license`,
          templateFile: `plop-templates/package/license.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/tsconfig.json`,
          templateFile: `plop-templates/package/tsconfig.json.hbs`,
        },
        data.type === `unified` && {
          type: `add`,
          path: `packages/{{kebabCase name}}/types/mdast-util-to-string/index.d.ts`,
          templateFile: `plop-templates/package/types/mdast-util-to-string/index.d.ts`,
        },
        data.type === `gatsby` && {
          type: `add`,
          path: `packages/{{kebabCase name}}/src/gatsby-node.ts`,
          templateFile: `plop-templates/package/src/gatsby-node.ts.hbs`,
        },
        data.type === `gatsby` && {
          type: `add`,
          path: `packages/{{kebabCase name}}/src/gatsby-config.ts`,
          templateFile: `plop-templates/package/src/gatsby-config.ts.hbs`,
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
