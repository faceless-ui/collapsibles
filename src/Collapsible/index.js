import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';

import defaultClassPrefix from '../defaultClassPrefix';

class Collapsible extends Component {
  constructor(props) {
    super(props);
    const { openOnInit } = props;
    this.state = { open: openOnInit };
  }

  componentDidUpdate(prevProps) {
    const { controlManually } = this.props;

    if (controlManually) {
      const { open } = this.props;

      if (prevProps.open !== open) {
        this.setState({ open });
      }
    }
  }

  toggle = () => {
    const {
      controlManually,
      onClick,
    } = this.props;

    if (!controlManually) {
      const { open } = this.state;
      this.setState({ open: !open });
    }

    if (typeof onClick === 'function') onClick();
  }

  render() {
    const {
      id,
      className,
      children,
      clickableNode,
      transTime,
      transCurve,
      classPrefix,
      disableClick,
    } = this.props;

    const { open } = this.state;
    const baseClass = `${classPrefix || defaultClassPrefix}__collapsible`;

    const classes = [
      className,
      baseClass,
      open && `${baseClass}--is-open`,
      disableClick && `${baseClass}--click-disabled`,
    ].filter(Boolean).join(' ');

    if (clickableNode && children) {
      return (
        <div
          className={classes}
          {...{ id }}
        >
          {React.cloneElement(
            clickableNode,
            {
              onClick: !disableClick ? this.toggle : null,
              style: {
                marginBottom: 0,
              },
              className: `${baseClass}__clickable-node`,
            },
          )}
          <AnimateHeight
            height={open ? 'auto' : 0}
            easing={transCurve}
            duration={transTime}
          >
            {children}
          </AnimateHeight>
        </div>
      );
    }
    return null;
  }
}

export const CollapsibleDefaultProps = {
  id: '',
  className: '',
  openOnInit: false,
  disableClick: false,
};

export const CollapsiblePropTypes = {
  clickableNode: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  openOnInit: PropTypes.bool,
  children: PropTypes.node.isRequired,
  disableClick: PropTypes.bool,
};

Collapsible.defaultProps = {
  ...CollapsibleDefaultProps,
  onClick: undefined,
  open: false,
  transTime: 250,
  transCurve: 'linear',
  controlManually: false,
  classPrefix: '',
};

Collapsible.propTypes = {
  ...CollapsiblePropTypes,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  transTime: PropTypes.number,
  transCurve: PropTypes.string,
  controlManually: PropTypes.bool,
  classPrefix: PropTypes.string,
};

export default Collapsible;
