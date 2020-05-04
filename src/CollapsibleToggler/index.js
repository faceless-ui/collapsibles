import React from 'react';
import PropTypes from 'prop-types';
import HTMLElement from '@trbl/react-html-element';
import { CSSTransition } from 'react-transition-group';
import { useCollapsible } from '../Collapsible/context';

const CollapsibleToggler = (props) => {
  const {
    id,
    className,
    style,
    htmlElement,
    htmlAttributes,
    disable,
    children,
  } = props;

  const {
    rootClass,
    handleClick,
    isOpen,
    transTime,
  } = useCollapsible();

  const baseClass = `${rootClass}__toggler`;

  const mergedClasses = [
    baseClass,
    isOpen && `${baseClass}--is-open`,
    disable && `${baseClass}--is-disabled`,
    className,
  ].filter(Boolean).join(' ');

  const mergedAttributes = {
    ...htmlAttributes,
    onClick: () => {
      if (!disable) handleClick();
      if (typeof htmlAttributes.onClick === 'function') htmlAttributes.onClick();
    },
  };

  return (
    <CSSTransition
      timeout={transTime}
      in={isOpen}
      classNames={{
        appear: `${baseClass}--appear`,
        appearActive: `${baseClass}--appearActive`,
        appearDone: `${baseClass}--appearDone`,
        enter: `${baseClass}--enter`,
        enterActive: `${baseClass}--enterActive`,
        enterDone: `${baseClass}--enterDone`,
        exit: `${baseClass}--exit`,
        exitActive: `${baseClass}--exitActive`,
        exitDone: `${baseClass}--exitDone`,
      }}
    >
      appear
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
    </CSSTransition>
  );
};

CollapsibleToggler.defaultProps = {
  disable: false,
  id: undefined,
  className: undefined,
  style: {},
  htmlElement: 'button',
  htmlAttributes: {},
  children: undefined,
};

CollapsibleToggler.propTypes = {
  disable: PropTypes.bool,
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
  children: PropTypes.node,
};

export default CollapsibleToggler;
