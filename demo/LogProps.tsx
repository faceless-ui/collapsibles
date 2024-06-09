import React from 'react';
import type { ICollapsibleContext } from '../src/types.js';
import type { ICollapsibleGroupContext } from '../src/types.js';

const filterObject = () => {
  const seen = new WeakSet();
  return (key: string, value: string) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) return '[Circle]';
      seen.add(value);

      const keys = Object.keys(value);
      const isReact = keys.some((k) => k.startsWith('__reactInternalInstance$') || k.startsWith('__reactContainere$'));
      if (isReact) return '[React]';

      return value;
    }

    if (typeof value === 'function') return '[Function]';

    if (typeof value === 'undefined') return 'undefined';

    return value;
  };
};

const LogProps: React.FC<ICollapsibleContext | ICollapsibleGroupContext | undefined> = (props) => (
  <code>
    <pre>
      {JSON.stringify(props, filterObject(), 2)}
    </pre>
  </code>
);

export default LogProps;
