import React, { Fragment } from 'react';
import { CollapsibleGroup, Collapsible } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const CollapsibleGroupDemo = () => (
  <Fragment>
    <code>
      <pre>
        {'<CollapsibleGroup />'}
        <br />
        Props:
        <br />
        allowMultiple: true
      </pre>
    </code>
    <CollapsibleGroup
      allowMultiple={false}
      classPrefix="custom"
    >
      <Collapsible
        clickableNode={<span>click me (click disabled)</span>}
        openOnInit
        disableClick
      >
        <span>4 some content</span>
      </Collapsible>

      <Collapsible
        clickableNode={<span>click me</span>}
        openOnInit
      >
        <span>4 some content</span>
      </Collapsible>
    </CollapsibleGroup>

    <div style={{ height: '50px' }} />

    <code>
      <pre>
        {'<CollapsibleGroup />'}
        <br />
        Props:
        <br />
        allowMultiple: false
      </pre>
    </code>


    <CollapsibleGroup
      allowMultiple={false}
      transTime={2000}
      transCurve="cubic-bezier(0, 0, 0.2, 1)"
    >
      <Collapsible
        clickableNode={<span>click me</span>}
        openOnInit
      >
        <span>4 some content</span>
      </Collapsible>

      <Collapsible
        clickableNode={<span>click me</span>}
        openOnInit
      >
        <span>4 some content</span>
      </Collapsible>
    </CollapsibleGroup>


  </Fragment>
);

export default CollapsibleGroupDemo;
