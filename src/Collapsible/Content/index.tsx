import React, { ElementType, HTMLProps } from 'react';
import AnimateHeight from 'react-animate-height';
import useCollapsible from '../useCollapsible';

export interface CollapsibleContentProps extends HTMLProps<HTMLElement> {
  htmlElement?: ElementType
  children?: React.ReactNode
}

const CollapsibleContent: React.FC<CollapsibleContentProps> = (props) => {
  const {
    className,
    htmlElement: Tag = 'div',
    children,
    ...rest
  } = props;

  const {
    rootClass,
    transCurve,
    transTime,
    isOpen,
    initialHeight,
    id: idFromContext,
  } = useCollapsible();

  const baseClass = `${rootClass}__content`;

  const mergedClasses = [
    baseClass,
    isOpen && `${baseClass}--is-open`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <Tag
      // NOTE: the 'aria-owns' attribute of the toggler should match this id
      id={`collapsible-content_${idFromContext}`}
      // NOTE: the ID of the CollapsibleToggler should match this 'aria-labelledby' attribute
      aria-labelledby={`collapsible-toggler_${idFromContext}`}
      role="region"
      {...rest}
      className={mergedClasses}
    >
      <AnimateHeight
        height={isOpen ? 'auto' : initialHeight}
        easing={transCurve || 'linear'}
        duration={transTime || 0}
      >
        {children && children}
      </AnimateHeight>
    </Tag>
  );
};

export default CollapsibleContent;
