import React, { ElementType, HTMLProps, MouseEvent, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import useCollapsible from '../useCollapsible';

export interface CollapsibleTogglerProps extends HTMLProps<HTMLElement> {
  disable?: boolean
  htmlElement?: ElementType
  children?: React.ReactNode
}

const CollapsibleToggler: React.FC<CollapsibleTogglerProps> = (props) => {
  const {
    className,
    htmlElement: Tag = 'button',
    disable,
    children,
    onClick,
    type: typeFromProps,
    ...rest
  } = props;

  const nodeRef = useRef<HTMLElement>(null);

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

  let typeToUse: string | undefined = typeFromProps;
  if (!typeFromProps && Tag === 'button') typeToUse = 'button';

  const mergedAttributes = {
    type: typeToUse,
    ...rest,
    onClick: (e: MouseEvent<HTMLElement>) => {
      if (!disable) handleClick();
      if (typeof onClick === 'function') onClick(e);
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
      nodeRef={nodeRef}
    >
      <Tag
        {...mergedAttributes}
        className={mergedClasses}
      >
        {children && children}
      </Tag>
    </CSSTransition>
  );
};

export default CollapsibleToggler;
