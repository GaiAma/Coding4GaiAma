/// <reference types="user-meta" />
import { ActionType } from 'plop';
import userMeta from 'user-meta';
import chalk from 'chalk';
import { pkgJsonStr } from './templates/package';
const pkgName = 'plop-pack-gatsby';

// TODO: CHECKOUT https://github.com/tomorrowstudio/generator-gatsby

export type Config = {
  repo: string;
  homepage?: string;
};

type Data = ActionType &
  Config & {
    year: number;
    files: string[];
    keywords: string[];
    dependencies: any; // { [key: string]: string };
    devDependencies: any; // { [key: string]: string };
  };

const defaults = {};

const error = (msg: string) => {
  console.log(chalk.red.bold(`ERROR[${pkgName}]: ${msg}`));
  process.exit(1);
};

const pkgJson = JSON.parse(pkgJsonStr);

export default (plop: any, config: Config): void => {
  // setup config defaults
  const cfg = Object.assign(defaults, config || {});

  if (!cfg.repo) error(`Please provide a repo url`);

  plop.setDefaultInclude({
    helpers: true,
    generators: true,
    actionTypes: true,
  });

  plop.load('plop-pack-node-helpers');

  plop.setGenerator(`gatsby`, {
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
        when(answers: any) {
          if (!userMeta.name) {
            return true;
          }
          if (!answers.author) answers.author = {};
          answers.author.username = userMeta.name;
          console.log(`Using NPM/Git name`);
          return false;
        },
      },
      {
        type: `input`,
        name: `useremail`,
        message: `Your email`,
        default: userMeta.email,
        when(answers: any) {
          if (!userMeta.email) {
            return true;
          }
          if (!answers.author) answers.author = {};
          answers.author.useremail = userMeta.email;
          console.log(`Using NPM/Git email`);
          return false;
        },
      },
      {
        type: `input`,
        name: `userurl`,
        message: `Your url`,
        default: userMeta.url,
        when(answers: any) {
          if (!userMeta.url) {
            return true;
          }
          if (!answers.author) answers.author = {};
          answers.author.userurl = userMeta.url;
          console.log(`Using NPM/Git url`);
          return false;
        },
      },
      {
        type: `checkbox`,
        name: `files`,
        message: `Which APIs to prepare?`,
        choices: [
          'gatsby-config.js',
          'gatsby-node.js',
          'gatsby-ssr.js',
          'gatsby-browser.js',
        ],
      },
    ],
    actions: (data: Data) => {
      data.year = new Date().getFullYear();

      data.repo = cfg.repo;
      data.homepage = cfg.homepage || cfg.repo.replace(/.git$/, '');

      const packageJson: any = { ...pkgJson };

      if (data.files.includes('gatsby-config.js')) {
        packageJson.keywords.push('gatsby-theme');
      }

      if (data.dependencies) {
        packageJson.dependencies = {
          ...pkgJson.dependencies,
          ...data.dependencies,
        };
      }

      if (data.devDependencies) {
        packageJson.devDependencies = {
          ...pkgJson.devDependencies,
          ...data.devDependencies,
        };
      }

      if (data.files?.length) {
        packageJson.files = data.files;
      }

      return [
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/package.json`,
          template: JSON.stringify(packageJson, null, 2),
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/index.js`,
          templateFile: `templates/index.js.hbs`,
        },
        // {
        //   type: `add`,
        //   path: `packages/{{kebabCase name}}/src/index.test.ts`,
        //   templateFile: `templates/src/index.test.ts.hbs`,
        // },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/README.md`,
          templateFile: `templates/README.md.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/.gitignore`,
          templateFile: `templates/gitignore.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/.npmignore`,
          templateFile: `templates/npmignore.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/.prettierrc`,
          templateFile: `templates/prettierrc.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/license`,
          templateFile: `templates/license.hbs`,
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/tsconfig.json`,
          templateFile: `templates/tsconfig.json.hbs`,
        },
        data.files.includes(`gatsby-node.js`) && {
          type: `add`,
          path: `packages/{{kebabCase name}}/src/gatsby-node.ts`,
          templateFile: `templates/src/gatsby-node.ts.hbs`,
        },
        data.files.includes(`gatsby-config.js`) && {
          type: `add`,
          path: `packages/{{kebabCase name}}/src/gatsby-config.ts`,
          templateFile: `templates/src/gatsby-config.ts.hbs`,
        },
        data.files.includes(`gatsby-ssr.js`) && {
          type: `add`,
          path: `packages/{{kebabCase name}}/src/gatsby-ssr.ts`,
          templateFile: `templates/src/gatsby-ssr.ts.hbs`,
        },
        data.files.includes(`gatsby-browser.js`) && {
          type: `add`,
          path: `packages/{{kebabCase name}}/src/gatsby-browser.ts`,
          templateFile: `templates/src/gatsby-browser.ts.hbs`,
        },
      ].filter(Boolean);
    },
  });
};
