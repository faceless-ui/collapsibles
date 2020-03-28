import React, { useContext } from 'react';

const CollapsibleContext = React.createContext({});

export default CollapsibleContext;

export const useCollapsible = () => useContext(CollapsibleContext);
