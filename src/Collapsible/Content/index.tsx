import React, { CSSProperties, ElementType } from 'react';
import AnimateHeight from 'react-animate-height';
import useCollapsible from '../useCollapsible';

const CollapsibleContent: React.FC<{
  id?: string
  className?: string
  style?: CSSProperties
  htmlElement?: ElementType
  htmlAttributes?: {
    [key: string]: unknown
  }
  children?: React.ReactNode
}> = (props) => {
  const {
    id,
    className,
    style,
    htmlElement = 'div',
    htmlAttributes = {},
    children,
  } = props;

  const {
    rootClass,
    transCurve,
    transTime,
    isOpen,
  } = useCollapsible();

  const baseClass = `${rootClass}__content`;

  const mergedClasses = [
    baseClass,
    isOpen && `${baseClass}--is-open`,
    className,
  ].filter(Boolean).join(' ');

  const Tag = htmlElement as React.ElementType;

  return (
    <Tag
      {...{
        id,
        className: mergedClasses,
        style,
        ...htmlAttributes,
      }}
    >
      <AnimateHeight
        height={isOpen ? 'auto' : 0}
        easing={transCurve || 'linear'}
        duration={transTime || 0}
      >
        {children && children}
      </AnimateHeight>
    </Tag>
  );
};

export default CollapsibleContent;
