/**
 * - https://github.com/malerba118/react-starter-cli/tree/master/plop-templates
 * - https://dev.to/ekafyi/adding-generators-to-your-gatsby-site-with-plop-2gd5
 * - https://www.reddit.com/r/javascript/comments/3v5gum/plop_a_microgenerator_to_ease_your_daily_life/
 * - https://github.com/HT2-Labs/plop-generators/blob/master/package.json#L16
 * - https://github.com/amwmedia/plop-pack-fancy-comments
 */
module.exports = function(plop) {
  plop.load('plop-pack-gatsby', {
    repo: 'https://github.com/GaiAma/Coding4GaiAma.git',
  })

  // [Asking questions recursively (Repeat questions)](https://github.com/plopjs/plop/issues/121)
  // https://github.com/SBoudrias/Inquirer.js/#reactive-interface
  // plop.addPrompt('recursive', require('inquirer-recursive'))

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
      // TODO: if checkbox or sthg open editor
      // {
      //   type: 'editor',
      //   name: 'body',
      //   message: 'Body text?',
      // },
      // {
      //   type: 'recursive',
      //   message: 'Add Tags?',
      //   name: 'newTags',
      //   prompts: [
      //     {
      //       type: 'input',
      //       name: 'tag',
      //       message: 'New tag name',
      //     },
      //   ],
      // },
    ],
    actions: data => {
      console.log(JSON.stringify(data, null, 2))
      // Get current date
      data.date = new Date().toISOString().split('T')[0]

      // Parse tags as yaml array
      if (data.tags) {
        data.tags = `tags:\n  - ${data.tags.split(',').join('\n  - ')}`
      }

      return [
        {
          type: `add`,
          path: `sites/coding4.gaiama.org/content/posts/{{date}}_{{kebabCase (lowerCase title)}}/en.mdx`,
          templateFile: `plop-templates/post/en.mdx.hbs`,
        },
      ].filter(Boolean)
    },
  })

  plop.setGenerator('exit', {
    description: 'exit plop',
    prompts: [],
    actions: () => ['\n🙏 Thanks for plopping with GaiAma\n'],
  })
}
