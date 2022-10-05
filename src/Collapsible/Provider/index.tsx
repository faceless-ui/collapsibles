import React, { useState, useEffect, useId } from 'react';
import CollapsibleContext, { ICollapsibleContext } from './context';
import useCollapsibleGroup from '../../CollapsibleGroup/useCollapsibleGroup';

export const collapsibleBaseClass = 'collapsible';

export type ChildFunction = (context: ICollapsibleContext) => React.ReactNode; // eslint-disable-line no-unused-vars

export type CollapsibleProps = {
  openOnInit?: boolean
  classPrefix?: string
  transTime?: number
  transCurve?: string
  onToggle?: () => void
  open?: boolean
  initialHeight?: number
  children: React.ReactNode | ChildFunction
  id?: string
}

const Collapsible: React.FC<CollapsibleProps> = (props) => {
  const {
    openOnInit,
    classPrefix,
    transTime,
    transCurve,
    children,
    onToggle,
    open: openFromProps,
    initialHeight = 0,
    id: idFromProps,
  } = props;

  const [isOpen, setIsOpen] = useState<boolean | undefined>(openOnInit);
  const [ignoreGroupUpdate, setIgnoreGroupUpdate] = useState(false);
  const [prevGroupToggleCount, setPrevGroupToggleCount] = useState(0);

  // NOTE: the 'aria-owns' and 'aria-labelledby' attributes rely on this matching IDs
  const uniqueID = useId();
  const id = idFromProps || uniqueID;

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
    initialHeight,
    id
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
