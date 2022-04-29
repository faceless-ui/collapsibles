import { useContext } from 'react';
import CollapsibleContext from '../Context';
import { ICollapsibleContext } from '../Context';

const useCollapsible = (): ICollapsibleContext => useContext(CollapsibleContext);

export default useCollapsible;
