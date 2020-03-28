import React from 'react';
import PropTypes from 'prop-types';

const Frame = (props) => {
  const { children } = props;
  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, .1)',
        padding: '20px',
        boxSizing: 'border-box',
        marginBottom: '20px',
      }}
    >
      {children && children}
    </div>
  );
};

Frame.defaultProps = {
  children: undefined,
};

Frame.propTypes = {
  children: PropTypes.node,
};

export default Frame;
