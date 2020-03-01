import * as fs from 'fs';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import globby from 'globby';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

const sharedConfig = {
  plugins: [
    resolve({ extensions, preferBuiltins: true }),
    commonjs({ include: '**/node_modules/**' }),
    babel({ extensions, include: ['src/**/*'], exclude: 'node_modules/**' }),
  ],
  external: Object.keys(globals),
};

// const stripSrc = n => n.replace('src/', '');

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: './index.js',
        format: 'cjs',
        globals,
        sourcemap: true,
        // strict: false,
      },
      // { file: './index.mjs', format: 'esm', globals, sourcemap: true },
    ],
    ...sharedConfig,
    plugins: [
      ...sharedConfig.plugins,
      customCopy({
        // assets: [{ src: 'src/index.d.ts', dest: 'index.esm.d.ts' }],
        assets: [{ src: 'src/index.d.ts', dest: 'index.d.ts' }],
      }),
    ],
  },
  ...['gatsby-browser', 'gatsby-node', 'gatsby-ssr'].map(name => ({
    input: `./src/${name}.tsx`,
    output: [
      {
        file: `./${name}.js`,
        format: 'cjs',
        globals,
        sourcemap: true,
        // strict: false,
      },
    ],
    ...sharedConfig,
  })),
];

// CUSTOM COPY PLUGIN
function customCopy({ assets = [], copyOnce = true, globalReplace } = {}) {
  let copied = false;

  return {
    name: 'customCopy',
    async generateBundle(_, bundle) {
      if (copyOnce && copied) {
        return;
      }
      if (!assets.length) {
        this.warn('An empty list of asstes was passed to plugin options');
        return;
      }
      const srcDir = process.cwd();
      for (const { src, dest, replace, replaceContent } of assets) {
        const matchedPaths = await globby(src, {
          expandDirectories: false,
          onlyFiles: false,
        });
        if (matchedPaths.length) {
          matchedPaths.forEach(matchedPath => {
            const fileName =
              typeof dest === 'string'
                ? dest
                : typeof replace === 'function'
                ? replace(matchedPath)
                : typeof globalReplace === 'function'
                ? globalReplace(matchedPath)
                : matchedPath;
            const source = fs.readFileSync(
              matchedPath,
              replaceContent && 'utf8'
            );
            this.emitFile({
              type: 'asset',
              source:
                typeof replaceContent === 'function'
                  ? replaceContent(source)
                  : source,
              fileName,
            });
          });
        }
      }
    },
  };
}
// CUSTOM COPY PLUGIN
