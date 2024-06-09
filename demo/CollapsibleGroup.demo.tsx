import React, { Fragment } from 'react';
import { CollapsibleGroup, Collapsible, CollapsibleToggler, CollapsibleContent } from '@faceless-ui/collapsibles';
import PrintContext from './PrintContext.js';
import Background from './Background.js';

const CollapsibleGroupDemo: React.FC = () => (
  <Fragment>
    <Background>
      <CollapsibleGroup
        transTime={1000}
        transCurve="ease-in-out"
        classPrefix="demo"
      >
        <PrintContext context="collapsibleGroup" />
        <Background>
          <Collapsible openOnInit>
            <PrintContext context="collapsible" />
            <CollapsibleToggler>
              Collapsible Toggler
            </CollapsibleToggler>
            <CollapsibleContent>
              Quiscras iam semper metusdo proin entum atein bibendu
            </CollapsibleContent>
          </Collapsible>
        </Background>
        <Background>
          <Collapsible
            transTime={0}
            openOnInit
            classPrefix="override"
          >
            <PrintContext context="collapsible" />
            <CollapsibleToggler>
              Collapsible Toggler
            </CollapsibleToggler>
            <CollapsibleContent>
              Liberom diampr ornare ris maurisma dictumst
            </CollapsibleContent>
          </Collapsible>
        </Background>
        <Background>
          <Collapsible openOnInit>
            <PrintContext context="collapsible" />
            <CollapsibleToggler>
              Collapsible Toggler
            </CollapsibleToggler>
            <CollapsibleContent>
              Nostra tellus sit vestib aenean ellus amus iquam ris pelle
            </CollapsibleContent>
          </Collapsible>
        </Background>
      </CollapsibleGroup>
    </Background>
  </Fragment>
);

export default CollapsibleGroupDemo;
