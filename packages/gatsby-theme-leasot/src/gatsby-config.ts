type Props = {
  name?: string;
  customTags?: string[];
  mode?: string;
  sourcePath: string;
  ignore?: RegExp[];
};

const defaultOptions: Props = {
  name: 'leasot',
  sourcePath: './',
  ignore: [
    /\.*.*\/(node_modules|\.cache|public|static|dist)\/./,
    /\.*.\.(log|jpe?g|png|gif|ico|json|map|gz|pdf|yarn|d\.ts)/,
    /packages\/.+\/lib\//,
    /packages\/[^/]+\/[^/]+\.js/,
  ],
};

const withDefaults = (options: Props) => {
  return Object.assign({}, defaultOptions, options);
};

export default (options: Props) => {
  const { name, customTags, mode, sourcePath, ignore } = withDefaults(options);
  return {
    plugins: [
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          // TODO: do we need to pass it or can we somehow know the parents root __dirname 🤔
          path: sourcePath,
          name,
          ignore,
        },
      },
      {
        resolve: 'gatsby-transformer-leasot',
        options: {
          customTags,
          mode,
        },
      },
    ],
  };
};
