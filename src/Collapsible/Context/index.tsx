import { createContext } from 'react';
import { ICollapsibleContext } from './types';

const CollapsibleContext = createContext<ICollapsibleContext>({} as ICollapsibleContext);

export default CollapsibleContext;
