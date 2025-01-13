import { memo } from 'react';
const style = {
  height: '50px',
  backgroundColor: 'lightgreen',
};

const Child3Component = () => {
  console.log('rendered Child3');
  return <div style={style}>Child3</div>;
};

Child3Component.displayName = 'Child3';

export const Child3 = memo(Child3Component);
