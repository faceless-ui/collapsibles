import React, { useState } from 'react';
import { Props } from './types';
import CollapsibleGroupContext from '../Context';

const CollapsibleGroup: React.FC<Props> = (props) => {
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

export default CollapsibleGroup;
