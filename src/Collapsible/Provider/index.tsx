import React, { useState, useEffect } from 'react';
import defaultClassPrefix from '../../defaultClassPrefix';
import CollapsibleContext from '../Context';
import useCollapsibleGroup from '../../CollapsibleGroup/useCollapsibleGroup';
import { Props } from './types';

const Collapsible: React.FC<Props> = (props) => {
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
  const [prevGroupToggleCount, setPrevGroupToggleCount] = useState(0);

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

  const context = {
    classPrefix,
    rootClass: `${classPrefix || groupClassPrefix || defaultClassPrefix}__collapsible`,
    openOnInit,
    isOpen,
    handleClick,
    transTime: (typeof transTime === 'number' && transTime) || (typeof groupTransTime === 'number' && groupTransTime) || 0,
    transCurve: transCurve || groupTransCurve,
    onToggle,
  };

  return (
    <CollapsibleContext.Provider value={{ ...context }}>
      {(children && (typeof children === 'function' ? children({ ...context }) : children)) || null}
    </CollapsibleContext.Provider>
  );
};

export default Collapsible;
