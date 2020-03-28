import React, { useContext } from 'react';

const CollapsibleGroupContext = React.createContext({});

export default CollapsibleGroupContext;

export const useCollapsibleGroup = () => useContext(CollapsibleGroupContext);
