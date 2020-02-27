import { PluginOptions, GoatCounter } from './types';
import { RouteUpdateArgs } from 'gatsby';

declare global {
  interface Window {
    goatcounter: GoatCounter;
    excludeGCPaths: RegExp[];
  }
}

const isProduction = process.env.NODE_ENV === 'production';

export const onRouteUpdate = (
  { location }: RouteUpdateArgs,
  opts: PluginOptions
) => {
  // if (process.env.NODE_ENV !== `production`) {
  //   return null;
  // }

  const pathIsExcluded =
    location &&
    typeof window.excludeGCPaths !== `undefined` &&
    window.excludeGCPaths.some(rx => rx.test(location.pathname));
  if (pathIsExcluded || (!isProduction && !opts.allowLocal)) return null;

  // wrap inside a timeout to make sure react-helmet is done with it's changes (https://github.com/gatsbyjs/gatsby/issues/9139)
  // reactHelmet is using requestAnimationFrame: https://github.com/nfl/react-helmet/blob/5.2.0/src/HelmetUtils.js#L296-L299
  const sendPageView = () => {
    const pagePath = location
      ? location.pathname + location.search + location.hash
      : undefined;

    window.goatcounter.count!({ path: pagePath });
  };

  // ensure asynchronously loaded window.goatcounter.count is available
  const t = window.setInterval(() => {
    if (window.goatcounter?.count) {
      window.clearInterval(t);
      // Minimum delay for reactHelmet's requestAnimationFrame
      const delay = Math.max(32, opts.pageTransitionDelay || 0);
      window.setTimeout(sendPageView, delay);
    }
  }, 100);

  return null;
};
