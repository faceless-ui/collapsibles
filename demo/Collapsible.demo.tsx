import React, { Fragment } from 'react';
import {
  Collapsible,
  CollapsibleToggler,
  CollapsibleContent,
} from '@faceless-ui/collapsibles';
import PrintContext from './PrintContext';
import Background from './Background';

const CollapsibleDemo: React.FC = () => (
  <Fragment>
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
        transTime={250}
        transCurve="ease-in"
        classPrefix="demo"
        initialHeight={50}
      >
        <PrintContext context="collapsible" />
        <header>
          <div>
            <span>
              <CollapsibleToggler
                onClick={() => console.log('hi toggler')} // eslint-disable-line no-console
              >
                <span>
                  <span>
                    <span>
                      Collapsible Toggler
                    </span>
                  </span>
                </span>
              </CollapsibleToggler>
            </span>
          </div>
        </header>
        <article>
          <aside>
            <div>
              <CollapsibleContent style={{}}>
                <section>
                  <div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </div>
                </section>
              </CollapsibleContent>
            </div>
          </aside>
        </article>
      </Collapsible>
    </Background>
  </Fragment>
);

export default CollapsibleDemo;
