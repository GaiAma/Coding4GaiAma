import { CountVars } from './types';

export * from './types';

export const goatcount = (vars: CountVars) => {
  return typeof window !== 'undefined' &&
    typeof window.goatcounter?.count === 'function'
    ? window.goatcounter.count(vars)
    : () => false;
};
