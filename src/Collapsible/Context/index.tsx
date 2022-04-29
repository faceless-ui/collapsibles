import { createContext } from 'react';
import { Props } from '../Provider';

export interface ICollapsibleContext extends Omit<Props, 'children'> {
  transTime: number // optional in props, so make required
  rootClass: string
  isOpen?: boolean
  handleClick: () => void
}

const CollapsibleContext = createContext<ICollapsibleContext>({} as ICollapsibleContext);

export default CollapsibleContext;
