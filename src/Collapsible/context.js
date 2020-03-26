import React, { useContext } from 'react';

export const CollapsibleContext = React.createContext({});

export const useCollapsible = () => useContext(CollapsibleContext);
