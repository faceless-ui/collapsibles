import React, { Fragment } from 'react';
import { CollapsibleGroup, Collapsible } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const CollapsibleGroupDemo = () => (
  <Fragment>
    <code>
      <pre>
        {'<CollapsibleGroup'}
        <ul style={{ listStyle: 'none' }}>
          <li>
            {'allowMultiple={true}'}
          </li>
        </ul>
        {'>'}
      </pre>
    </code>
    <CollapsibleGroup
      allowMultiple
      classPrefix="custom"
    >
      <Collapsible
        clickableNode={<span>{'<Collapsible />'}</span>}
      >
        <span>boop be bop</span>
      </Collapsible>

      <Collapsible
        clickableNode={<span>{'<Collapsible />'}</span>}
      >
        <span>boop be bop</span>
      </Collapsible>

      <Collapsible
        clickableNode={<span>{'<Collapsible />'}</span>}
      >
        <span>beep bot</span>
      </Collapsible>
    </CollapsibleGroup>
    <code>
      <pre>
        {'</CollapsibleGroup>'}
      </pre>
    </code>

    <div style={{ height: '50px' }} />

    <code>
      <pre>
        {'<CollapsibleGroup'}
        <ul style={{ listStyle: 'none' }}>
          <li>
            {'allowMultiple={false}'}
          </li>
          <br />
          <li>
            {'transTime={2000}'}
          </li>
          <br />
          <li>
            {'transCurve={"cubic-bezier(0, 0, 0.2, 1)"}'}
          </li>
        </ul>
        {'>'}
      </pre>
    </code>
    <CollapsibleGroup
      allowMultiple={false}
      transTime={2000}
      transCurve="cubic-bezier(0, 0, 0.2, 1)"
    >
      <Collapsible
        clickableNode={<span>{'<Collapsible />'}</span>}
        openOnInit
      >
        <span>boop be bop</span>
      </Collapsible>
      <Collapsible
        clickableNode={<span>{'<Collapsible />'}</span>}
        openOnInit
      >
        <span>boop be bop</span>
      </Collapsible>
      <Collapsible
        clickableNode={<span>{'<Collapsible />'}</span>}
        openOnInit
      >
        <span>boop be bop</span>
      </Collapsible>
    </CollapsibleGroup>
    <code>
      <pre>
        {'</CollapsibleGroup>'}
      </pre>
    </code>

  </Fragment>
);

export default CollapsibleGroupDemo;
