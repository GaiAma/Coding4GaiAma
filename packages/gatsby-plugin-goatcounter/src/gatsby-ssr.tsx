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
  pluginOptions: PluginOptions
) => {
  const setComponents = pluginOptions.head
    ? setHeadComponents
    : setPostBodyComponents;

  const excludePaths: RegExp[] = [];
  if (Array.isArray(pluginOptions.exclude)) {
    const Minimatch = require('minimatch').Minimatch;
    pluginOptions.exclude.map(exclude => {
      const mm = new Minimatch(exclude);
      excludePaths.push(mm.makeRe(exclude));
    });
  }

  const settings: GoatCounter = { no_onload: true };
  if (pluginOptions.allowLocal) settings.allow_local = true;

  setComponents([
    <script
      key="gatsby-plugin-goatcounter-config"
      dangerouslySetInnerHTML={{
        // prettier-ignore
        __html:
          'window.goatcounter={' +
            Object.entries(settings).reduce((acc, [key, val]) => `${acc}${key}:${val},`, '') +
            (pluginOptions.referrer === true ? `referrer:function(){return window.goatcounter.get_query('ref')||window.goatcounter.get_query('utm_source')||document.referrer;},` : '') +
            (typeof pluginOptions.referrer === 'function' ? `referrer:${pluginOptions.referrer}` : '') +
          '};' +
          (excludePaths.length ? `window.GPGC_ExcludePaths=[${excludePaths}];` : '') +
          (pluginOptions.urlCleanup === true ? `window.GPGC_CleanPath=function(){var l=document.location;var p=l.pathname;var s=l.search.substring(1).split('&').filter(function(x){return !/^(utm_.*=|ref=)/.test(x)}).join('&');return p+(s.length?'?'+s:'')+l.hash;};window.GPGC_PostCountCallback=function(){window.history.replaceState({},document.title,window.GPGC_CleanPath());};` : '')
        // (typeof pluginOptions.postCountCallback === 'function' ? `window.GPGC_PostCountCallback=${pluginOptions.postCountCallback};` : '')
      }}
    />,
    <script
      key="gatsby-plugin-goatcounter"
      async
      data-goatcounter={`https://${pluginOptions.code}.goatcounter.com/count`}
      src="https://gc.zgo.at/count.js"
    />,
  ]);

  if (pluginOptions.pixel) {
    setPreBodyComponents([
      <noscript key="gatsby-plugin-goatcounter-noscript">
        <img
          src={`https://${pluginOptions.code}.goatcounter.com/count?p=${pathname}`}
        />
      </noscript>,
    ]);
  }
};
