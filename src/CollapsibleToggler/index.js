import React from 'react';
import PropTypes from 'prop-types';
import HTMLElement from '@trbl/react-html-element';
import { useCollapsible } from '../Collapsible/context';

const CollapsibleToggler = (props) => {
  const {
    id,
    className,
    style,
    htmlElement,
    htmlAttributes,
    disableClick,
    children,
  } = props;

  const {
    rootClass,
    handleClick,
    isOpen,
  } = useCollapsible();

  const baseClass = `${rootClass}__toggler`;

  const mergedClasses = [
    baseClass,
    isOpen && `${baseClass}--is-open`,
    disableClick && `${baseClass}--click-disabled`,
    className,
  ].filter(Boolean).join(' ');

  const mergedAttributes = {
    ...htmlAttributes,
    onClick: () => {
      if (!disableClick) handleClick();
      if (typeof htmlAttributes.onClick === 'function') htmlAttributes.onClick();
    },
  };

  return (
    <HTMLElement
      {...{
        id,
        className: mergedClasses,
        style,
        htmlElement,
        htmlAttributes: mergedAttributes,
      }}
    >
      {children && children}
    </HTMLElement>
  );
};

CollapsibleToggler.defaultProps = {
  id: undefined,
  className: undefined,
  style: {},
  htmlElement: 'button',
  htmlAttributes: {},
  disableClick: false,
  children: undefined,
};

CollapsibleToggler.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.string,
  htmlAttributes: PropTypes.shape({
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    onClick: PropTypes.func,
  }),
  disableClick: PropTypes.bool,
  children: PropTypes.node,
};

export default CollapsibleToggler;
