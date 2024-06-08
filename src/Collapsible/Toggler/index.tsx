import React, { ElementType, HTMLProps, MouseEvent, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useCollapsible } from '../useCollapsible/index.js';

export interface CollapsibleTogglerProps extends HTMLProps<HTMLElement> {
  disable?: boolean
  htmlElement?: ElementType
  children?: React.ReactNode
}

export const CollapsibleToggler: React.FC<CollapsibleTogglerProps> = (props) => {
  const {
    className,
    htmlElement: Tag = 'button',
    disable,
    children,
    onClick,
    type,
    ...rest
  } = props;

  const nodeRef = useRef<HTMLElement>(null);

  const {
    rootClass,
    handleClick,
    isOpen,
    transTime,
    id: idFromContext,
  } = useCollapsible();

  const baseClass = `${rootClass}__toggler`;

  const mergedClasses = [
    baseClass,
    isOpen && `${baseClass}--is-open`,
    disable && `${baseClass}--is-disabled`,
    className,
  ].filter(Boolean).join(' ');

  let typeToUse: string | undefined = type;
  if (!type && Tag === 'button') typeToUse = 'button';

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
        type={typeToUse}
        aria-expanded={Boolean(isOpen).toString()}
        // NOTE: this 'aria-owns' attribute should match the ID of the CollapsibleContent
        aria-owns={`collapsible-content_${idFromContext}`}
        aria-label="Toggle collapsible"
        id={`collapsible-toggler_${idFromContext}`}
        {...rest}
        onClick={(e: MouseEvent<HTMLElement>) => {
          if (!disable) handleClick();
          if (typeof onClick === 'function') onClick(e);
        }}
        className={mergedClasses}
      >
        {children && children}
      </Tag>
    </CSSTransition>
  );
};
