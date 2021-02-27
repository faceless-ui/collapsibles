import React, { Fragment } from 'react';
import {
  Collapsible,
  CollapsibleToggler,
  CollapsibleContent,
} from '../src'; // swap '../src' for '../dist/build.bundle' to test production
import PrintContext from './PrintContext';
import Background from './Background';

const CollapsibleDemo: React.FC = () => (
  <Fragment>
    <Background>
      <Collapsible>
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
        openOnInit
      >
        <PrintContext context="collapsible" />
        <header>
          <div>
            <span>
              <CollapsibleToggler
                htmlAttributes={{
                  onClick: () => console.log('hi toggler'), // eslint-disable-line no-console
                }}
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
              <CollapsibleContent>
                <section>
                  <div>
                    <div>
                      Liberom diampr ornare ris maurisma dictumst
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
