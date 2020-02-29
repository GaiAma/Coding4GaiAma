// global window
import { CountVars } from './types';
import { useEffect, useState } from 'react';

// TODO: Skip own views inspo: https://coding4gaiama.goatcounter.com/settings#tab-site-code
// NOTE: OutboundLink use ref as replacement for GAs eventLabel?

export const useGoatCounter = () => {
  const [count, setCount] = useState({ count: (_: CountVars) => {} });

  useEffect(() => {
    const t = window.setInterval(() => {
      if (window.goatcounter?.count) {
        window.clearInterval(t);
        setCount({ count: window.goatcounter.count });
      }
    }, 100);

    return () => {
      window.clearInterval(t);
    };
  }, []);

  return count.count;
};
