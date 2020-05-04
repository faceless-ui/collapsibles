import React from 'react';
import PropTypes from 'prop-types';
import { useCollapsible, useCollapsibleGroup } from '../src';
import LogProps from './LogProps';

const PrintContext = (props) => {
  const { context } = props;

  const collapsibleContext = useCollapsible();
  const collapsibleGroupContext = useCollapsibleGroup();

  let contextToPrint = '';
  if (context === 'collapsible') contextToPrint = collapsibleContext;
  if (context === 'collapsibleGroup') contextToPrint = collapsibleGroupContext;

  return <LogProps {...contextToPrint} />;
};

PrintContext.defaultProps = {
  context: '',
};

PrintContext.propTypes = {
  context: PropTypes.oneOf([
    'collapsible',
    'collapsibleGroup',
  ]),
};

export default PrintContext;
