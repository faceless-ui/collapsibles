import React from 'react';
import PropTypes from 'prop-types';
import { useCollapsible, useCollapsibleGroup } from '../src';

const PrintContext = (props) => {
  const { context } = props;

  const collapsibleContext = useCollapsible();
  const collapsibleGroupContext = useCollapsibleGroup();

  let contextToPrint = '';
  if (context === 'collapsible') contextToPrint = collapsibleContext;
  if (context === 'collapsibleGroup') contextToPrint = collapsibleGroupContext;

  return (
    <code>
      <pre style={{ margin: '0 0 20px' }}>
        {`${context}:`}
        {JSON.stringify(contextToPrint, (k, v) => (v === undefined ? 'undefined' : v), 2)}
      </pre>
    </code>
  );
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
