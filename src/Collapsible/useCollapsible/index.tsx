import { useContext } from 'react';
import { CollapsibleContext, type ICollapsibleContext } from '../Provider/context.js';

export const useCollapsible = (): ICollapsibleContext => useContext(CollapsibleContext);
