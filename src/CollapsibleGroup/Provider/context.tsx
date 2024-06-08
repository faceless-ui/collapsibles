import { createContext } from 'react';
import type { CollapsibleGroupProps } from "./index.js"

export interface ICollapsibleGroupContext extends Omit<CollapsibleGroupProps, 'children'> {
  toggleCount: number
  reportToggleToGroup: () => void
}

export const CollapsibleGroupContext = createContext<ICollapsibleGroupContext>({} as ICollapsibleGroupContext);
