import { PluginOptions, GoatCounter } from './index.d';
import { RenderBodyArgs } from 'gatsby';
import * as React from 'react';

export const onRenderBody = (
  {
    setHeadComponents,
    setPreBodyComponents,
    setPostBodyComponents,
    pathname,
  }: RenderBodyArgs,
  opts: PluginOptions
) => {
  const excludeGCPaths: string[] = [];
  if (typeof opts.exclude !== `undefined`) {
    const Minimatch = require(`minimatch`).Minimatch;
    opts.exclude.map(exclude => {
      const mm = new Minimatch(exclude);
      excludeGCPaths.push(mm.makeRe());
    });
  }

  const settings: GoatCounter = { no_onload: true };
  if (opts.allowLocal) settings.allow_local = true;

  const setComponents = opts.head ? setHeadComponents : setPostBodyComponents;

  setComponents([
    <script
      key="gatsby-plugin-goatcounter-config"
      dangerouslySetInnerHTML={{
        __html: `
        window.goatcounter = ${JSON.stringify(settings)};
        ${
          excludeGCPaths.length
            ? `window.excludeGCPaths=[${excludeGCPaths.join(`,`)}];`
            : ``
        }
        `,
      }}
    />,
    <script
      key="gatsby-plugin-goatcounter"
      async
      data-goatcounter={`https://${opts.code}.goatcounter.com/count`}
      src="https://gc.zgo.at/count.js"
    />,
  ]);

  if (opts.pixel) {
    setPreBodyComponents([
      <noscript key="gatsby-plugin-goatcounter-noscript">
        <img src={`https://${opts.code}.goatcounter.com/count?p=${pathname}`} />
      </noscript>,
    ]);
  }
};
