import { memo } from 'react';
const style = {
  height: '50px',
  backgroundColor: 'lightgreen',
};

const Child2Component = () => {
  console.log('rendered Child2');
  return (
  <div style={style}>
    <p>Child2</p>
    </div>);
};

Child2Component.displayName = 'Child2Component';

export const Child2 = memo(Child2Component);
