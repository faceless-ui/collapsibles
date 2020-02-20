import React, { Fragment } from 'react';
import { CollapsibleGroup } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const CollapsibleGroupDemo = () => (
  <Fragment>
    <code>
      <pre>
        {'<CollapsibleGroup />'}
        <br />
        Props:
        <br />
        allowMultiple: true
        <br />
        collapsibles: array
      </pre>
    </code>
    <CollapsibleGroup
      allowMultiple
      classPrefix="custom"
      collapsibles={[
        {
          openOnInit: true,
          clickableNode: <span>click me (click disabled)</span>,
          children: <span>4 some content</span>,
          disableClick: true,
        },
        {
          openOnInit: true,
          clickableNode: <span>click me</span>,
          children: <span>4 some content</span>,
        },
      ]}
    />

    <div style={{ height: '50px' }} />

    <code>
      <pre>
        {'<CollapsibleGroup />'}
        <br />
        Props:
        <br />
        allowMultiple: false
        <br />
        collapsibles: array
      </pre>
    </code>
    <CollapsibleGroup
      allowMultiple={false}
      transTime={2000}
      transCurve="cubic-bezier(0, 0, 0.2, 1)"
      collapsibles={[
        {
          openOnInit: true,
          clickableNode: <span>click me</span>,
          children: <span>4 some content</span>,
        },
        {
          openOnInit: true,
          clickableNode: <span>click me</span>,
          children: <span>4 some content</span>,
        },
      ]}
    />
  </Fragment>
);

export default CollapsibleGroupDemo;
