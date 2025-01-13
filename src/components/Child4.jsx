import { memo } from 'react';

const style = {
  height: '200px',
  backgroundColor: 'wheat',
  padding: '10px',
};

const Child4Component = () => {
  console.log('rendered Child4');
  return <div style={style}>Child4</div>;
};

Child4Component.displayName = 'Child4';

export const Child4 = memo(Child4Component);
