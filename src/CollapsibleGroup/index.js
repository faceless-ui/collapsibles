import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CollapsibleGroupContext } from './context';

import defaultClassPrefix from '../defaultClassPrefix';

class CollapsibleGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = (indexOfClicked) => {
    const { allowMultiple } = this.props;
    const { openStates } = this.state;

    if (!allowMultiple) {
      const modifiedOpenStates = openStates.map((state, index) => {
        if (index !== indexOfClicked) return false;
        return !state;
      });
      this.setState({ openStates: modifiedOpenStates });
    } else {
      const newState = [...openStates];
      newState[indexOfClicked] = !openStates[indexOfClicked];
      this.setState({ openStates: newState });
    }
  };

  render() {
    const {
      transTime,
      transCurve,
      classPrefix,
      children,
    } = this.props;

    return (
      <CollapsibleGroupContext.Provider
        value={{
          transTime,
          transCurve,
          classPrefix: classPrefix || defaultClassPrefix,
        }}
      >
        {children && children}
      </CollapsibleGroupContext.Provider>
    );
  }
}

CollapsibleGroup.defaultProps = {
  classPrefix: undefined,
  transTime: undefined,
  transCurve: undefined,
  allowMultiple: false,
  children: undefined,
};

CollapsibleGroup.propTypes = {
  classPrefix: PropTypes.string,
  transTime: PropTypes.number,
  transCurve: PropTypes.string,
  allowMultiple: PropTypes.bool,
  children: PropTypes.node,
};

export default CollapsibleGroup;
