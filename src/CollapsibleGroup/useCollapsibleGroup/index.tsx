import { useContext } from 'react';
import { CollapsibleGroupContext, type ICollapsibleGroupContext } from '../Provider/context.js';

export const useCollapsibleGroup = (): ICollapsibleGroupContext => useContext(CollapsibleGroupContext);
