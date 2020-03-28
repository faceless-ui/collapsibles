import React from 'react';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';
import HTMLElement from '@trbl/react-html-element';
import { useCollapsible } from '../Collapsible/context';

const CollapsibleContent = (props) => {
  const {
    id,
    className,
    style,
    htmlElement,
    htmlAttributes,
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

  return (
    <HTMLElement
      {...{
        id,
        className: mergedClasses,
        style,
        htmlElement,
        htmlAttributes,
      }}
    >
      <AnimateHeight
        height={isOpen ? 'auto' : 0}
        easing={transCurve || 'linear'}
        duration={transTime || 0}
      >
        {children && children}
      </AnimateHeight>
    </HTMLElement>
  );
};

CollapsibleContent.defaultProps = {
  id: undefined,
  className: undefined,
  style: {},
  htmlElement: 'div',
  htmlAttributes: {},
  children: undefined,
};

CollapsibleContent.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.string,
  htmlAttributes: PropTypes.shape({
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.shape({}),
  }),
  children: PropTypes.node,
};

export default CollapsibleContent;
