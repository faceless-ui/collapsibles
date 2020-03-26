import React, { useContext } from 'react';

export const CollapsibleGroupContext = React.createContext({});

export const useCollapsibleGroup = () => useContext(CollapsibleGroupContext);
