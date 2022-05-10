import React, { useState, useEffect } from 'react';
import CollapsibleContext from '../Context';
import useCollapsibleGroup from '../../CollapsibleGroup/useCollapsibleGroup';
import { ICollapsibleContext } from '../Context';

export const collapsibleBaseClass = 'collapsible';

export type ChildFunction = (context: ICollapsibleContext) => React.ReactNode; // eslint-disable-line no-unused-vars

export type Props = {
  openOnInit?: boolean
  classPrefix?: string
  transTime?: number
  transCurve?: string
  onToggle?: () => void
  open?: boolean
  children: React.ReactNode | ChildFunction
}

const Collapsible: React.FC<Props> = (props) => {
  const {
    openOnInit,
    classPrefix,
    transTime,
    transCurve,
    children,
    onToggle,
    open: openFromProps,
  } = props;

  const [isOpen, setIsOpen] = useState<boolean | undefined>(openOnInit);
  const [ignoreGroupUpdate, setIgnoreGroupUpdate] = useState(false);
  const [prevGroupToggleCount, setPrevGroupToggleCount] = useState(0);

  useEffect(() => {
    if (openFromProps !== undefined) {
      setIsOpen(openFromProps);
    }
  }, [openFromProps]);

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

  const prefixToUse = classPrefix || groupClassPrefix;

  const context: ICollapsibleContext = {
    classPrefix,
    rootClass: prefixToUse ? `${prefixToUse}__${collapsibleBaseClass}` : collapsibleBaseClass,
    openOnInit,
    isOpen,
    handleClick,
    transTime: (typeof transTime === 'number' && transTime) || (typeof groupTransTime === 'number' && groupTransTime) || 0,
    transCurve: transCurve || groupTransCurve,
    onToggle,
  };

  return (
    <CollapsibleContext.Provider
      value={context}
    >
      {(children && (typeof children === 'function' ? children({ ...context }) : children)) || null}
    </CollapsibleContext.Provider>
  );
};

export default Collapsible;
