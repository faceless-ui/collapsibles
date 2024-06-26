import React from 'react';
import { useCollapsible, useCollapsibleGroup } from '@faceless-ui/collapsibles';
import type { ICollapsibleContext } from '../src/types.js';
import type { ICollapsibleGroupContext } from '../src/types.js';
import LogProps from './LogProps.js';

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
