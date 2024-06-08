import React, { useState } from 'react';
import { CollapsibleGroupContext } from './context.js';

export type CollapsibleGroupProps = {
  classPrefix?: string
  transTime?: number
  transCurve?: string
  allowMultiple?: boolean
  children: React.ReactNode
}

export const CollapsibleGroup: React.FC<CollapsibleGroupProps> = (props) => {
  const [toggleCount, setToggleCount] = useState(0);

  const {
    transTime,
    transCurve,
    classPrefix,
    allowMultiple,
    children,
  } = props;

  return (
    <CollapsibleGroupContext.Provider
      value={{
        transTime,
        transCurve,
        classPrefix,
        allowMultiple,
        reportToggleToGroup: () => setToggleCount(toggleCount + 1),
        toggleCount,
      }}
    >
      {children && children}
    </CollapsibleGroupContext.Provider>
  );
};
