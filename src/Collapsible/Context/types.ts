import { Props } from '../Provider/types';

export interface ICollapsibleContext extends Props {
  rootClass: string,
  isOpen: boolean,
  handleClick: () => void
}
