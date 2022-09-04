import { createContext } from 'react';
import { CollapsibleProps } from '.';

export interface ICollapsibleContext extends Omit<CollapsibleProps, 'children'> {
  transTime: number // optional in props, so make required
  initialHeight: number // optional in props, so make required
  rootClass: string
  isOpen?: boolean
  handleClick: () => void
}

const CollapsibleContext = createContext<ICollapsibleContext>({} as ICollapsibleContext);

export default CollapsibleContext;
