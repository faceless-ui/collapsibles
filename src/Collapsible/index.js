import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import defaultClassPrefix from '../defaultClassPrefix';
import CollapsibleContext from './context';
import { useCollapsibleGroup } from '../CollapsibleGroup/context';

const Collapsible = (props) => {
  const {
    openOnInit,
    classPrefix,
    transTime,
    transCurve,
    children,
    onToggle,
  } = props;

  const [isOpen, setIsOpen] = useState(openOnInit);
  const [ignoreGroupUpdate, setIgnoreGroupUpdate] = useState(false);
  const [prevGroupToggleCount, setPrevGroupToggleCount] = useState(false);

  const {
    reportToggleToGroup,
    toggleCount: groupToggleCount,
    classPrefix: groupClassPrefix,
    transTime: groupTransTime,
    transCurve: groupTransCurve,
    allowMultiple,
  } = useCollapsibleGroup();

  const handleClick = () => {
    if (!allowMultiple && reportToggleToGroup) {
      setIgnoreGroupUpdate(true);
      reportToggleToGroup();
    } else setIsOpen(!isOpen);
    if (typeof onToggle === 'function') onToggle();
  };

  useEffect(() => {
    if (groupToggleCount > prevGroupToggleCount) {
      if (!ignoreGroupUpdate) setIsOpen(false);
      else {
        setIgnoreGroupUpdate(false);
        setIsOpen(!isOpen);
      }
      setPrevGroupToggleCount(groupToggleCount);
    }
  }, [groupToggleCount, prevGroupToggleCount, isOpen, ignoreGroupUpdate]);

  return (
    <CollapsibleContext.Provider
      value={{
        classPrefix,
        rootClass: `${classPrefix || groupClassPrefix || defaultClassPrefix}__collapsible`,
        openOnInit,
        isOpen,
        handleClick,
        transTime: (typeof transTime === 'number' && transTime) || (typeof transTime === 'number' && groupTransTime) || 0,
        transCurve: transCurve || groupTransCurve,
      }}
    >
      {children && children}
    </CollapsibleContext.Provider>
  );
};

Collapsible.defaultProps = {
  classPrefix: '',
  openOnInit: false,
  onToggle: undefined,
  transTime: undefined,
  transCurve: undefined,
  children: undefined,
};

Collapsible.propTypes = {
  classPrefix: PropTypes.string,
  openOnInit: PropTypes.bool,
  onToggle: PropTypes.func,
  transTime: PropTypes.number,
  transCurve: PropTypes.string,
  children: PropTypes.node,
};

export default Collapsible;
