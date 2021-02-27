import { useContext } from 'react';
import CollapsibleContext from '../Context';
import { ICollapsibleContext } from '../Context/types';

const useCollapsible = (): ICollapsibleContext => useContext(CollapsibleContext);

export default useCollapsible;
