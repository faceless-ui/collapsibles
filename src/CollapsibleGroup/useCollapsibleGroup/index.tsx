import { useContext } from 'react';
import CollapsibleGroupContext from '../Context';
import { ICollapsibleGroupContext } from '../Context';

const useCollapsibleGroup = (): ICollapsibleGroupContext => useContext(CollapsibleGroupContext);

export default useCollapsibleGroup;
