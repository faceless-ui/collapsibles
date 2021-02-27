import { Props } from '../Provider/types';

export interface ICollapsibleGroupContext extends Props {
  toggleCount: number,
  reportToggleToGroup: () => void
}
