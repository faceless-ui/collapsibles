import React from 'react';
import { mount } from 'enzyme';

import Collapsible from '.';

describe('<Collapsible />', () => {
  it('starts open, simulates click and ends closed', () => {
    const wrapper = mount(
      <Collapsible
        clickableNode={<span>Clickable Node</span>}
        openOnInit
      >
        <p>beep bop boop</p>
      </Collapsible>,
    );

    expect(wrapper.state().open).toBe(true);
    wrapper.find('.trbl__collapsible__clickable-node').simulate('click');
    expect(wrapper.state().open).toBe(false);
  });

  it('starts closed, simulates click and ends open', () => {
    const wrapper = mount(
      <Collapsible
        clickableNode={<span>Clickable Node</span>}
        openOnInit={false}
      >
        <p>beep bop boop</p>
      </Collapsible>,
    );

    expect(wrapper.state().open).toBe(false);
    wrapper.find('.trbl__collapsible__clickable-node').simulate('click');
    expect(wrapper.state().open).toBe(true);
  });

  it('ignores click when disabled', () => {
    const wrapper = mount(
      <Collapsible
        clickableNode={<span>Clickable Node [disabled]</span>}
        openOnInit={false}
        disableClick
      >
        <p>beep bop boop</p>
      </Collapsible>,
    );

    wrapper.find('.trbl__collapsible__clickable-node').simulate('click');
    expect(wrapper.state().open).toBe(false);
  });
});
