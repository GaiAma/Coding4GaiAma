type PropertyFunction<T> = () => T;

export type PluginOptions = {
  code: '';
  selfHostUrl: '';
  exclude: string[];
  pageTransitionDelay: number;
  head: boolean;
  pixel: boolean;
  allowLocal: boolean;
  referrer: boolean | PropertyFunction<string>;
  localStorageKey: string;
  urlCleanup: boolean;
  // postCountCallback: PropertyFunction<void>;
};

export type CountVars = {
  path?: string; // Page path (without domain) or event name.
  referrer?: string | PropertyFunction<string>; // Where the user came from; can be an URL (https://example.com) or any string (June Newsletter). Default is to use the Referer header.
  title?: string; // Human-readable title. Default is document.title.
  event?: boolean; // Treat the path as an event, rather than a URL. Boolean.
};

export type GoatCounter = {
  no_onload: boolean; // Don’t do anything on page load. If you want to call count() manually.
  allow_local?: boolean; // Allow requests from local addresses (localhost, 192.168.0.0, etc.) for testing the integration locally.
  count?: (count_vars: CountVars) => void;
  referrer?: string | PropertyFunction<string>;
  get_query?: (parameter: string) => string;
};
