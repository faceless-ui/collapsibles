import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CollapsibleGroupContext from './context';

const CollapsibleGroup = (props) => {
  const [toggleCount, setToggleCount] = useState(0);

  const {
    transTime,
    transCurve,
    classPrefix,
    allowMultiple,
    children,
  } = props;

  return (
    <CollapsibleGroupContext.Provider
      value={{
        transTime,
        transCurve,
        classPrefix,
        allowMultiple,
        reportToggleToGroup: () => setToggleCount(toggleCount + 1),
        toggleCount,
      }}
    >
      {children && children}
    </CollapsibleGroupContext.Provider>
  );
};

CollapsibleGroup.defaultProps = {
  classPrefix: undefined,
  transTime: undefined,
  transCurve: undefined,
  allowMultiple: false,
  children: undefined,
};

CollapsibleGroup.propTypes = {
  classPrefix: PropTypes.string,
  transTime: PropTypes.number,
  transCurve: PropTypes.string,
  allowMultiple: PropTypes.bool,
  children: PropTypes.node,
};

export default CollapsibleGroup;
