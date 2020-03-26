import React, { Fragment } from 'react';
import { Collapsible, CollapsibleToggler, CollapsibleContent } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const CollapsibleDemo = () => (
  <Fragment>
    <Collapsible
      transTime={250}
      onClick={() => console.log('hi collapsible')} // eslint-disable-line no-console
      classPrefix="demo"
      openOnInit
    >
      <CollapsibleToggler
        htmlAttributes={{
          onClick: () => console.log('hi toggler'), // eslint-disable-line no-console
        }}
      >
        Click me!
      </CollapsibleToggler>
      <CollapsibleContent>
        Lorem ipsum
      </CollapsibleContent>
    </Collapsible>
  </Fragment>
);

export default CollapsibleDemo;
