import React from 'react';
import { mount } from 'enzyme';

import CollapsibleGroup from '.';
import Collapsible from '../Collapsible';

describe('<CollapsibleGroup />', () => {
  it('renders with 1 child', () => {
    const wrapper = mount(
      <CollapsibleGroup>
        <Collapsible
          clickableNode={<span>Clickable Node</span>}
        >
          <span>beep bop boop</span>
        </Collapsible>
      </CollapsibleGroup>,
    );

    expect(wrapper.find('.trbl__collapsible__clickable-node').length).toHaveLength(1);
  });

  it('renders with 2 children', () => {
    const wrapper = mount(
      <CollapsibleGroup>
        <Collapsible
          clickableNode={<span>Clickable Node</span>}
        >
          <span>beep bop boop</span>
        </Collapsible>
        <Collapsible
          clickableNode={<span>Clickable Node</span>}
        >
          <span>beep bop boop</span>
        </Collapsible>
      </CollapsibleGroup>,
    );

    expect(wrapper.find('.trbl__collapsible__clickable-node').length).toHaveLength(2);
  });

  it('allows for multiple to be open', () => {
    const wrapper = mount(
      <CollapsibleGroup
        allowMultiple
        classPrefix="custom"
      >
        <Collapsible
          clickableNode={<span>first clickable node</span>}
          openOnInit
        >
          <span>4 some content</span>
        </Collapsible>
        <Collapsible
          clickableNode={<span>second clickable node</span>}
          openOnInit
        >
          <span>4 some content</span>
        </Collapsible>
      </CollapsibleGroup>,
    );

    expect(wrapper.state().openStates.filter((bool) => bool).length).toHaveLength(2);
  });

  it('ensures only 1 is open when disallowing multiple', () => {
    const wrapper = mount(
      <CollapsibleGroup allowMultiple={false}>
        <Collapsible
          clickableNode={<span>Clickable Node</span>}
          openOnInit
        >
          <span>beep bop boop</span>
        </Collapsible>
        <Collapsible
          clickableNode={<span>Clickable Node</span>}
          openOnInit
        >
          <span>beep bop boop</span>
        </Collapsible>
      </CollapsibleGroup>,
    );

    expect(wrapper.state().openStates.filter((bool) => bool).length).toHaveLength(2);
  });

  it('ensures only 1 is open after click simulation when disallowing multiple', () => {
    const wrapper = mount(
      <CollapsibleGroup allowMultiple={false}>
        <Collapsible
          clickableNode={<span>Clickable Node</span>}
          openOnInit
        >
          <span>beep bop boop</span>
        </Collapsible>
        <Collapsible
          clickableNode={<span>Clickable Node</span>}
        >
          <span>beep bop boop</span>
        </Collapsible>
      </CollapsibleGroup>,
    );

    wrapper.find('.trbl__collapsible__clickable-node').at(1).simulate('click');
    expect(wrapper.state().openStates.filter((bool) => bool).length).toHaveLength(1);
  });

  it('ensures disabled clickableNodes cannot be triggered', () => {
    const wrapper = mount(
      <CollapsibleGroup>
        <Collapsible
          clickableNode={<span>Clickable Node</span>}
          disableClick
        >
          <span>beep bop boop</span>
        </Collapsible>
      </CollapsibleGroup>,
    );

    wrapper.find('.trbl__collapsible__clickable-node').at(0).simulate('click');
    expect(wrapper.state().openStates.filter((bool) => bool).length).toHaveLength(0);
  });
});
