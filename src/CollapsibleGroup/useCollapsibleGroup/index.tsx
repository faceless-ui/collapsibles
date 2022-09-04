import { useContext } from 'react';
import CollapsibleGroupContext, { ICollapsibleGroupContext } from '../Provider/context';

const useCollapsibleGroup = (): ICollapsibleGroupContext => useContext(CollapsibleGroupContext);

export default useCollapsibleGroup;
