import React, { Component } from 'react';
import PropTypes from 'prop-types';

import defaultClassPrefix from '../defaultClassPrefix';

class CollapsibleGroup extends Component {
  constructor(props) {
    super(props);

    const { children, allowMultiple } = this.props;
    const childrenAsArray = React.Children.toArray(children);
    let oneIsOpen = false;
    const openStates = childrenAsArray && childrenAsArray.length > 0
      ? childrenAsArray.map((item) => {
        let startOpen = false;
        if (allowMultiple) startOpen = item.props.openOnInit;
        if (!oneIsOpen && item.props.openOnInit) {
          oneIsOpen = true;
          startOpen = true;
        }
        return startOpen;
      })
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
      allowMultiple,
      transTime,
      transCurve,
      classPrefix,
      children,
    } = this.props;

    const { openStates } = this.state;

    const oneIsOpen = openStates.some((state) => state === true);

    const baseClass = `${classPrefix || defaultClassPrefix}__collapsible-group`;

    const classes = [
      className,
      baseClass,
      oneIsOpen && `${baseClass}--is-open`,
    ].filter(Boolean).join(' ');

    const childrenAsArray = React.Children.toArray(children);
    if (childrenAsArray && childrenAsArray.length > 0) {
      return (
        <div className={classes}>
          {childrenAsArray.map((collapsible, index) => {
            if (childrenAsArray[index].type.name === 'Collapsible') {
              const {
                clickableNode,
                disableClick,
              } = collapsible.props;

              const open = openStates[index];

              return (
                React.cloneElement(
                  collapsible,
                  {
                    key: index,
                    clickableNode,
                    disableClick,
                    openOnInit: open,
                    controlManually: !allowMultiple,
                    onClick: !disableClick ? () => this.onClick(index) : undefined,
                    open,
                    transTime,
                    transCurve,
                    classPrefix,
                  },
                )
              );
            }

            return collapsible;
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
  transTime: PropTypes.number,
  transCurve: PropTypes.string,
  classPrefix: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CollapsibleGroup;
