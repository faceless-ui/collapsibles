import React, { Fragment } from 'react';
import { Collapsible } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const CollapsibleDemo = () => {
  return (
    <Fragment>
      <code>
        <pre>
          {'<Collapsible />'}
          <br />
          Props:
          <br />
          openOnInit: true
          <br />
          transTime: undefined
          <br />
          transCurve: undefined
        </pre>
      </code>
      <Collapsible
        classPrefix="custom"
        clickableNode={<span>click me</span>}
        openOnInit
      >
        <span>to collapse content</span>
      </Collapsible>

      <div style={{ height: '50px' }} />

      <code>
        <pre>
          {'<Collapsible />'}
          <br />
          Props:
          <br />
          openOnInit: false
          <br />
          transTime: 2000
          <br />
          transCurve: &ldquo;cubic-bezier(0, 0, 0.2, 1)&rdquo;
          <br />
          disableClick: true
        </pre>
      </code>
      <Collapsible
        transTime={2000}
        transCurve="cubic-bezier(0, 0, 0.2, 1)"
        clickableNode={<span>click me (click disabled)</span>}
        disableClick
      >
        <span>for some content</span>
      </Collapsible>

      <div style={{ height: '50px' }} />

    </Fragment>
  );
};

export default CollapsibleDemo;
