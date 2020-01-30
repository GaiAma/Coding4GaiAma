/// <reference types="user-meta" />
// import { NodePlopAPI } from 'plop';
// import { HelperOptions } from 'handlebars';
import userMeta from 'user-meta';

export type Config = {};

export type Author = {
  username: string;
  useremail: string;
  userurl: string;
};

const defaults = {};

export default (plop: any, config: Config): void => {
  // (<any>Object) from https://stackoverflow.com/a/57268258/3484824
  const cfg = (<any>Object).assign(defaults, config || {});

  plop.setDefaultInclude({ helpers: true });

  plop.setHelper('userMeta', () => {
    return {
      name: userMeta.name,
      email: userMeta.email,
      url: userMeta.url,
    };
  });

  // TODO: maybe provide a flag to enable \n before first item
  // TODO: maybe use plop-pack-package-json ??
  // TODO: or make it an `each` helper?
  plop.setHelper('pkgList', (txt: string) => {
    if (!txt) return '';
    return txt.split(',').join(',\n    ');
  });

  plop.setHelper('pkgJson', (obj: any) => {
    return JSON.stringify(obj, null, 2);
  });

  plop.setHelper('authorString', ({ username, useremail, userurl }: Author) =>
    [
      !!username && username,
      !!useremail && `<${useremail}>`,
      !!userurl && `(${userurl})`,
    ]
      .filter(Boolean)
      .join(` `)
  );

  // type PkgJsonObject = {
  //   [key: string]: string;
  // };
  // plop.setHelper('pkgJsonObject', (obj: PkgJsonObject) => {
  //   return Object.keys(obj).reduce(
  //     (result, key) => `${result}\n    "${key}": "${obj[key]}"`,
  //     ''
  //   );
  // });

  plop.setHelper('if_eq', function(this: any, a: string, b: string, opts: any) {
    return a === b ? opts.fn(this) : opts.inverse(this);
  });
};
