import { createContext } from 'react';
import { CollapsibleGroupProps } from "../Provider"

export interface ICollapsibleGroupContext extends Omit<CollapsibleGroupProps, 'children'> {
  toggleCount: number
  reportToggleToGroup: () => void
}

const CollapsibleGroupContext = createContext<ICollapsibleGroupContext>({} as ICollapsibleGroupContext);

export default CollapsibleGroupContext;
