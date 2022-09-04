import { useContext } from 'react';
import CollapsibleContext from '../Provider/context';
import { ICollapsibleContext } from '../Provider/context';

const useCollapsible = (): ICollapsibleContext => useContext(CollapsibleContext);

export default useCollapsible;
