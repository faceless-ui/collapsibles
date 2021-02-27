import { createContext } from 'react';
import { ICollapsibleGroupContext } from './types';

const CollapsibleGroupContext = createContext<ICollapsibleGroupContext>({} as ICollapsibleGroupContext);

export default CollapsibleGroupContext;
