import { PluginOptions, GoatCounter, CountVars } from './index.d';
import { RouteUpdateArgs } from 'gatsby';

declare global {
  interface Window {
    goatcounter: GoatCounter;
    GPGC_ExcludePaths: RegExp[];
    GPGC_PostCountCallback: () => void;
    GPGC_CleanPath: () => string;
  }
}

const isProduction = process.env.NODE_ENV === 'production';

export const onRouteUpdate = (
  { location }: RouteUpdateArgs,
  opts: PluginOptions = {} as PluginOptions
) => {
  const lsKey = opts.localStorageKey ?? 'skipgc';

  if (opts.allowLocal !== true) {
    if (window.location.hash === `#${lsKey}`) {
      localStorage.setItem(lsKey, 't');
    }
    if (window.localStorage.getItem(lsKey) === 't') {
      return null;
    }
  }

  const pathIsExcluded =
    window.location &&
    window?.GPGC_ExcludePaths?.some(rx => rx.test(window.location.pathname));

  if ((!isProduction && !opts.allowLocal) || pathIsExcluded) return null;

  // wrap inside a timeout to make sure react-helmet is done with it's changes (https://github.com/gatsbyjs/gatsby/issues/9139)
  // reactHelmet is using requestAnimationFrame: https://github.com/nfl/react-helmet/blob/5.2.0/src/HelmetUtils.js#L296-L299
  const sendPageView = () => {
    const path =
      window?.GPGC_CleanPath?.() ??
      location.pathname + location.search + location.hash;

    const settings: CountVars = { ...window.goatcounter, path };

    settings.referrer = () =>
      window.goatcounter?.get_query?.('ref') ??
      window.goatcounter?.get_query?.('utm_source') ??
      document.referrer;

    window.goatcounter.count!(settings);

    window?.GPGC_PostCountCallback?.();
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
