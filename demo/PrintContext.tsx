import React from 'react';
import { useCollapsible, useCollapsibleGroup } from '../src';
import { ICollapsibleContext } from '../src/Collapsible/Context';
import { ICollapsibleGroupContext } from '../src/CollapsibleGroup/Context';
import LogProps from './LogProps';

type Props = {
  context: 'collapsible' | 'collapsibleGroup'
}

const PrintContext: React.FC<Props> = (props) => {
  const { context } = props;

  const collapsibleContext = useCollapsible();
  const collapsibleGroupContext = useCollapsibleGroup();

  let contextToPrint: ICollapsibleContext | ICollapsibleGroupContext | undefined;
  if (context === 'collapsible') contextToPrint = collapsibleContext;
  if (context === 'collapsibleGroup') contextToPrint = collapsibleGroupContext;

  if (contextToPrint) {
    return <LogProps {...contextToPrint} />
  }

  return null;
};

export default PrintContext;
