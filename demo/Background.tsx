import React from 'react';

const Frame: React.FC = (props) => {
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

export default Frame;
