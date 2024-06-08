import { createContext } from 'react';
import type { CollapsibleProps } from './index.js';

export interface ICollapsibleContext extends Omit<CollapsibleProps, 'children'> {
  transTime: number // optional in props, so make required
  initialHeight: number // optional in props, so make required
  rootClass: string
  isOpen?: boolean
  handleClick: () => void
}

export const CollapsibleContext = createContext<ICollapsibleContext>({} as ICollapsibleContext);
