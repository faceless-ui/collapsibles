import React, { Fragment } from 'react';
import { Collapsible } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const CollapsibleDemo = () => (
  <Fragment>
    <code>
      <pre>
        {'<Collapsible'}
        <ul style={{ listStyle: 'none' }}>
          <li>
            {'openOnInit={true}'}
          </li>
        </ul>
        {'/>'}
      </pre>
    </code>
    <Collapsible
      classPrefix="custom"
      clickableNode={<span>{'<Collapsible />'}</span>}
      openOnInit
    >
      <span>beep bop robots</span>
    </Collapsible>

    <div style={{ height: '50px' }} />

    <code>
      <pre>
        {'<Collapsible'}
        <ul style={{ listStyle: 'none' }}>
          <li>
            {'disableClick={true}'}
          </li>
        </ul>
        {'/>'}
      </pre>
    </code>
    <Collapsible
      clickableNode={<span>{'<Collapsible disableClick />'}</span>}
      disableClick
    >
      <span>beep bop robots</span>
    </Collapsible>

    <div style={{ height: '50px' }} />

  </Fragment>
);

export default CollapsibleDemo;
