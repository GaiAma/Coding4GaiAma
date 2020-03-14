import notifier from 'node-notifier';

export type PluginOptions = {
  devNote?: string;
  buildNote?: string;
};

exports.onCreateDevServer = ({}, { devNote }: PluginOptions) => {
  notifier.notify(devNote ?? '🎉 Gatsby dev server started');
};

exports.onPostBuild = ({}, { buildNote }: PluginOptions) => {
  notifier.notify(buildNote ?? '🎉 Gatsby Build Complete');
};
