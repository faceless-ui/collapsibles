import React from 'react';
import { CSSTransition } from 'react-transition-group';
import useCollapsible from '../useCollapsible';
import { Props } from './types';

const CollapsibleToggler: React.FC<Props> = (props) => {
  const {
    id,
    className,
    style,
    htmlElement = 'button',
    htmlAttributes = {},
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

  const Tag = htmlElement as React.ElementType;

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
      <Tag
        {...{
          id,
          className: mergedClasses,
          style,
          ...mergedAttributes,
        }}
      >
        {children && children}
      </Tag>
    </CSSTransition>
  );
};

export default CollapsibleToggler;
