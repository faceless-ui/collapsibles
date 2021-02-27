import React from 'react';
import { useCollapsible, useCollapsibleGroup } from '../src';
import { ICollapsibleContext } from '../src/Collapsible/Context/types';
import { ICollapsibleGroupContext } from '../src/CollapsibleGroup/Context/types';
import LogProps from './LogProps';

type Props = {
  context: 'collapsible' | 'collapsibleGroup'
}

const PrintContext: React.FC<Props> = (props) => {
  const { context } = props;

  const collapsibleContext = useCollapsible();
  const collapsibleGroupContext = useCollapsibleGroup();

  let contextToPrint: ICollapsibleContext | ICollapsibleGroupContext;
  if (context === 'collapsible') contextToPrint = collapsibleContext;
  if (context === 'collapsibleGroup') contextToPrint = collapsibleGroupContext;

  return <LogProps {...contextToPrint} />;
};

export default PrintContext;
