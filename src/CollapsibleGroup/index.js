import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Collapsible, { CollapsiblePropTypes } from '../Collapsible';

import defaultClassPrefix from '../defaultClassPrefix';

class CollapsibleGroup extends Component {
  constructor(props) {
    super(props);

    const { collapsibles } = this.props;
    const openStates = collapsibles && collapsibles.length > 0
      ? collapsibles.map(item => item.openOnInit || false)
      : [];

    this.state = { openStates };
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
      className,
      collapsibles,
      allowMultiple,
      transTime,
      transCurve,
      classPrefix,
    } = this.props;

    const { openStates } = this.state;

    const oneIsOpen = openStates.some((state) => {
      return state === true;
    });

    const baseClass = `${classPrefix || defaultClassPrefix}__collapsible-group`;

    const classes = [
      className,
      baseClass,
      oneIsOpen && `${baseClass}--is-open`,
    ].filter(Boolean).join(' ');

    if (collapsibles && collapsibles.length > 0) {
      return (
        <div className={classes}>
          {collapsibles.map((item, index) => {
            const {
              clickableNode,
              children,
              disableClick,
            } = item;

            const open = openStates[index];

            return (
              <Collapsible
                key={index}
                clickableNode={clickableNode}
                openOnInit={open}
                controlManually={!allowMultiple}
                onClick={!disableClick ? () => this.onClick(index) : undefined}
                {...{
                  open,
                  transTime,
                  transCurve,
                  classPrefix,
                  disableClick,
                }}
              >
                {React.createElement(
                  Fragment,
                  {},
                  children,
                )}
              </Collapsible>
            );
          })}
        </div>
      );
    }
    return null;
  }
}

CollapsibleGroup.defaultProps = {
  className: '',
  allowMultiple: false,
  transTime: undefined,
  transCurve: undefined,
  classPrefix: '',
};

CollapsibleGroup.propTypes = {
  className: PropTypes.string,
  allowMultiple: PropTypes.bool,
  collapsibles: PropTypes.arrayOf(
    PropTypes.shape({
      ...CollapsiblePropTypes,
      children: PropTypes.node,
    }),
  ).isRequired,
  transTime: PropTypes.number,
  transCurve: PropTypes.string,
  classPrefix: PropTypes.string,
};

export default CollapsibleGroup;
