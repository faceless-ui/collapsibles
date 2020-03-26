import React, { useState } from 'react';
import PropTypes from 'prop-types';
import defaultClassPrefix from '../defaultClassPrefix';

import { CollapsibleContext } from './context';
import { useCollapsibleGroup } from '../CollapsibleGroup/context';

const Collapsible = (props) => {
  const {
    openOnInit,
    transTime,
    transCurve,
    classPrefix,
    children,
    onClick,
  } = props;

  const { classPrefix: groupClassPrefix } = useCollapsibleGroup();
  const rootClass = `${classPrefix || groupClassPrefix || defaultClassPrefix}__collapsible`;

  const [isOpen, setIsOpen] = useState(openOnInit);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (typeof onClick === 'function') onClick();
  };

  return (
    <CollapsibleContext.Provider
      value={{
        isOpen,
        handleClick,
        rootClass,
        transTime,
        transCurve,
      }}
    >
      {children && children}
    </CollapsibleContext.Provider>
  );
};

Collapsible.defaultProps = {
  classPrefix: '',
  openOnInit: false,
  onClick: undefined,
  transTime: 0,
  transCurve: 'linear',
  children: undefined,
};

Collapsible.propTypes = {
  classPrefix: PropTypes.string,
  openOnInit: PropTypes.bool,
  onClick: PropTypes.func,
  transTime: PropTypes.number,
  transCurve: PropTypes.string,
  children: PropTypes.node,
};

export default Collapsible;
